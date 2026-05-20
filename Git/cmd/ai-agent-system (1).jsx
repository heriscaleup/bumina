import { useState, useRef, useCallback, useEffect } from "react";

// ─── CONFIG ────────────────────────────────────────────────────────────────
const MODEL = "claude-sonnet-4-20250514";
const MAX_TOKENS = 1500;

const AGENTS = {
  research: {
    id: "research",
    label: "Product Research",
    icon: "🔍",
    color: "#0F6E56",
    bg: "#E1F5EE",
    border: "#9FE1CB",
    description: "Riset produk trending, analisis market Indonesia, peluang TikTok Shop & Shopee",
    system: `Kamu adalah AI Product Research Analyst spesialis pasar Indonesia 2026.
Fokus: TikTok Shop, Shopee, affiliate marketing, produk viral, consumer trend Indonesia.
Setiap laporan berikan:
1. Nama produk & kategori
2. Potensi market (Rendah/Sedang/Tinggi/Sangat Tinggi)
3. Target audience spesifik
4. Alasan produk berpotensi (data-driven)
5. Saran strategi konten
6. Platform terbaik (TikTok/Shopee/keduanya)
7. Estimasi komisi affiliate jika relevan
Format: profesional, bullet points, langsung ke poin. Bahasa Indonesia.`,
    suggestions: [
      "Cari 5 produk trending TikTok Shop hari ini",
      "Analisis peluang produk skincare lokal Indonesia",
      "Produk affiliate Shopee dengan komisi tertinggi bulan ini",
      "Trending produk outdoor & camping Indonesia 2026",
      "Produk digital paling laris untuk dijual online",
    ],
  },
  content: {
    id: "content",
    label: "Content Creator",
    icon: "🎬",
    color: "#185FA5",
    bg: "#E6F1FB",
    border: "#B5D4F4",
    description: "Ide konten harian, hook viral, script TikTok/Reels, strategi creator",
    system: `Kamu adalah AI Content Creator spesialis konten viral Indonesia 2026.
Platform: TikTok, Instagram Reels, Shopee Video.
Output yang kamu berikan:
- Hook kuat (3 variasi: pertanyaan, shock, relatable)
- Script lengkap dengan timing detik per detik
- Caption + hashtag optimal
- CTA yang convert
- Tip visual/audio jika relevan
Format konten: snappy, autentik, sesuai gaya kreator Indonesia. Bahasa campuran Indonesia-informal.
Selalu sertakan struktur: Hook (0-3 dtk) → Body (3-45 dtk) → CTA (45-60 dtk).`,
    suggestions: [
      "Buatkan script TikTok 60 detik untuk review sunscreen",
      "Hook viral untuk konten unboxing produk skincare",
      "Script live TikTok Shop untuk produk kitchen set",
      "Ide konten 7 hari untuk akun affiliate pemula",
      "Buatkan caption + hashtag untuk produk outdoor",
    ],
  },
  ads: {
    id: "ads",
    label: "Ads Analyst",
    icon: "📊",
    color: "#854F0B",
    bg: "#FAEEDA",
    border: "#FAC775",
    description: "Analisis performa iklan Meta, optimasi CTR, audience insight, rekomendasi budget",
    system: `Kamu adalah AI Ads Analyst spesialis Meta Ads (Facebook & Instagram) untuk pasar Indonesia 2026.
Keahlian: analisis campaign performance, optimasi budget, audience targeting, hook iklan.
Ketika menerima data kampanye, berikan:
1. Diagnosa performa (baik/buruk/warning)
2. Analisis metrik utama: Impresi, Jangkauan, CPR (Cost per Result), Spend
3. Benchmark vs rata-rata industri Indonesia
4. Root cause jika performa buruk
5. Rekomendasi konkret: budget, audience, creative, placement
6. Action items prioritas (Quick win vs Long term)
Format: tegas, data-driven, pakai angka. Jika tidak ada data, berikan edukasi dan framework analisis.
Bahasa Indonesia profesional.`,
    suggestions: [
      "Analisis performa kampanye kitchen set apartment saya",
      "Berapa CPM ideal untuk iklan produk rumah tangga Indonesia?",
      "Bagaimana cara optimasi iklan yang CTR rendah?",
      "Audience targeting terbaik untuk produk kitchen set",
      "Framework testing iklan untuk budget Rp 500ribu/hari",
    ],
  },
};

// ─── META ADS CSV PARSER ────────────────────────────────────────────────────
function parseMetaAdsCSV(text) {
  const lines = text.trim().split("\n");
  if (lines.length < 2) return null;
  const headers = lines[0].split(",").map((h) => h.trim().replace(/^"|"$/g, ""));
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const vals = lines[i].split(",").map((v) => v.trim().replace(/^"|"$/g, ""));
    if (vals[0] === "No data available." || vals.every((v) => !v)) continue;
    const row = {};
    headers.forEach((h, idx) => (row[h] = vals[idx] || "-"));
    rows.push(row);
  }
  return { headers, rows, rawHeaders: headers };
}

function formatCSVContext(parsed, filename) {
  if (!parsed || parsed.rows.length === 0) {
    return `Data CSV: "${filename}"
Kolom tersedia: ${parsed?.headers?.join(", ") || "tidak terbaca"}
Status: TIDAK ADA DATA (kampanye mungkin belum aktif, periode salah, atau budget belum dipakai)
Analisis berdasarkan struktur kolom yang ada dan berikan rekomendasi setup kampanye.`;
  }
  const rows = parsed.rows
    .map((r) => parsed.headers.map((h) => `${h}: ${r[h]}`).join(" | "))
    .join("\n");
  return `Data CSV Meta Ads: "${filename}"\n${rows}`;
}

// ─── CHAT MESSAGE ───────────────────────────────────────────────────────────
function Message({ msg }) {
  const isUser = msg.role === "user";
  return (
    <div style={{
      display: "flex",
      justifyContent: isUser ? "flex-end" : "flex-start",
      marginBottom: 12,
      gap: 8,
      alignItems: "flex-start",
    }}>
      {!isUser && (
        <div style={{
          width: 28, height: 28, borderRadius: "50%",
          background: "#F1EFE8", display: "flex", alignItems: "center",
          justifyContent: "center", fontSize: 14, flexShrink: 0, marginTop: 2,
        }}>
          🤖
        </div>
      )}
      <div style={{
        maxWidth: "82%",
        background: isUser ? "#1a1a1a" : "#FAFAF8",
        color: isUser ? "#fff" : "#1a1a1a",
        borderRadius: isUser ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
        padding: "10px 14px",
        fontSize: 13.5,
        lineHeight: 1.65,
        border: isUser ? "none" : "0.5px solid #E8E6DF",
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
      }}>
        {msg.content}
      </div>
      {isUser && (
        <div style={{
          width: 28, height: 28, borderRadius: "50%",
          background: "#1a1a1a", display: "flex", alignItems: "center",
          justifyContent: "center", fontSize: 12, color: "#fff",
          flexShrink: 0, marginTop: 2, fontWeight: 500,
        }}>
          U
        </div>
      )}
    </div>
  );
}

// ─── TYPING INDICATOR ──────────────────────────────────────────────────────
function TypingIndicator({ agentColor }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
      <div style={{
        width: 28, height: 28, borderRadius: "50%",
        background: "#F1EFE8", display: "flex", alignItems: "center",
        justifyContent: "center", fontSize: 14, flexShrink: 0,
      }}>🤖</div>
      <div style={{
        background: "#FAFAF8", border: "0.5px solid #E8E6DF",
        borderRadius: "16px 16px 16px 4px", padding: "12px 16px",
        display: "flex", gap: 4, alignItems: "center",
      }}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{
            width: 7, height: 7, borderRadius: "50%",
            background: agentColor,
            animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
          }} />
        ))}
      </div>
    </div>
  );
}

// ─── CSV UPLOAD ZONE ────────────────────────────────────────────────────────
function CsvUploadZone({ onFile, uploadedFile }) {
  const inputRef = useRef();
  const [dragging, setDragging] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.name.endsWith(".csv")) onFile(file);
  };

  return (
    <div
      onClick={() => inputRef.current.click()}
      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      style={{
        border: `1.5px dashed ${dragging ? "#BA7517" : uploadedFile ? "#1D9E75" : "#D3D1C7"}`,
        borderRadius: 10, padding: "12px 16px",
        background: dragging ? "#FAEEDA" : uploadedFile ? "#E1F5EE" : "#FAFAF8",
        cursor: "pointer", transition: "all 0.2s",
        display: "flex", alignItems: "center", gap: 10,
        marginBottom: 12,
      }}
    >
      <span style={{ fontSize: 20 }}>{uploadedFile ? "✅" : "📁"}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 12.5, fontWeight: 500, color: uploadedFile ? "#0F6E56" : "#444" }}>
          {uploadedFile ? uploadedFile.name : "Upload CSV Meta Ads"}
        </div>
        <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>
          {uploadedFile ? "File siap dianalisis · klik untuk ganti" : "Drag & drop atau klik · format Meta Ads Manager"}
        </div>
      </div>
      <input ref={inputRef} type="file" accept=".csv" style={{ display: "none" }}
        onChange={(e) => { if (e.target.files[0]) onFile(e.target.files[0]); }} />
    </div>
  );
}

// ─── AGENT CHAT PANEL ───────────────────────────────────────────────────────
function AgentPanel({ agent, csvData }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const bottomRef = useRef();
  const textareaRef = useRef();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = useCallback(async (text) => {
    const userText = text || input.trim();
    if (!userText || loading) return;
    setInput("");
    setError(null);

    const newMessages = [...messages, { role: "user", content: userText }];
    setMessages(newMessages);
    setLoading(true);

    // Build system prompt — inject CSV context for ads agent
    let systemPrompt = agent.system;
    if (agent.id === "ads" && csvData) {
      systemPrompt += `\n\n=== DATA KAMPANYE YANG DIUPLOAD ===\n${csvData}`;
    }

    const apiMessages = newMessages.map((m) => ({ role: m.role, content: m.content }));

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: MODEL,
          max_tokens: MAX_TOKENS,
          system: systemPrompt,
          messages: apiMessages,
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error?.message || `HTTP ${res.status}`);
      }

      const data = await res.json();
      const reply = data.content?.find((b) => b.type === "text")?.text || "Tidak ada respons.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (e) {
      setError(e.message);
      setMessages((prev) => prev.slice(0, -1));
    } finally {
      setLoading(false);
    }
  }, [input, messages, loading, agent, csvData]);

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const clearChat = () => { setMessages([]); setError(null); };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Suggestion chips */}
      {messages.length === 0 && (
        <div style={{ padding: "0 0 12px" }}>
          <div style={{ fontSize: 11, color: "#888", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Coba tanya:
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {agent.suggestions.map((s, i) => (
              <button key={i} onClick={() => send(s)} style={{
                fontSize: 11.5, padding: "5px 11px",
                background: agent.bg, color: agent.color,
                border: `0.5px solid ${agent.border}`,
                borderRadius: 999, cursor: "pointer",
                fontFamily: "inherit", transition: "opacity 0.15s",
              }}
                onMouseEnter={(e) => e.target.style.opacity = "0.75"}
                onMouseLeave={(e) => e.target.style.opacity = "1"}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Messages */}
      <div style={{
        flex: 1, overflowY: "auto", paddingRight: 4,
        minHeight: messages.length > 0 ? 200 : 0,
      }}>
        {messages.map((m, i) => <Message key={i} msg={m} />)}
        {loading && <TypingIndicator agentColor={agent.color} />}
        {error && (
          <div style={{
            padding: "8px 12px", background: "#FCEBEB", border: "0.5px solid #F7C1C1",
            borderRadius: 8, fontSize: 12, color: "#A32D2D", marginBottom: 8,
          }}>
            ⚠️ Error: {error}
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input bar */}
      <div style={{
        borderTop: "0.5px solid #E8E6DF", paddingTop: 12, marginTop: 8,
        display: "flex", gap: 8, alignItems: "flex-end",
      }}>
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder={`Tanya ${agent.label} Agent...`}
          rows={1}
          style={{
            flex: 1, padding: "9px 12px", fontSize: 13.5,
            border: "0.5px solid #D3D1C7", borderRadius: 10,
            fontFamily: "inherit", resize: "none", outline: "none",
            lineHeight: 1.5, background: "#FAFAF8",
            minHeight: 38, maxHeight: 100,
            transition: "border-color 0.2s",
          }}
          onFocus={(e) => e.target.style.borderColor = agent.color}
          onBlur={(e) => e.target.style.borderColor = "#D3D1C7"}
        />
        <button
          onClick={() => send()}
          disabled={loading || !input.trim()}
          style={{
            width: 38, height: 38, borderRadius: 9,
            background: loading || !input.trim() ? "#E8E6DF" : agent.color,
            color: "#fff", border: "none", cursor: loading || !input.trim() ? "default" : "pointer",
            fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.2s", flexShrink: 0,
          }}
        >
          ↑
        </button>
        {messages.length > 0 && (
          <button onClick={clearChat} style={{
            width: 38, height: 38, borderRadius: 9,
            background: "#F1EFE8", color: "#888", border: "0.5px solid #D3D1C7",
            cursor: "pointer", fontSize: 14,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }} title="Clear chat">
            ×
          </button>
        )}
      </div>
      <div style={{ fontSize: 10.5, color: "#aaa", textAlign: "center", marginTop: 6 }}>
        Enter untuk kirim · Shift+Enter baris baru
      </div>
    </div>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────────────────────
export default function App() {
  const [activeAgent, setActiveAgent] = useState("research");
  const [csvFile, setCsvFile] = useState(null);
  const [csvContext, setCsvContext] = useState(null);
  const [csvParsed, setCsvParsed] = useState(null);

  const handleCsvFile = (file) => {
    setCsvFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      const parsed = parseMetaAdsCSV(text);
      setCsvParsed(parsed);
      setCsvContext(formatCSVContext(parsed, file.name));
    };
    reader.readAsText(file);
  };

  // Auto-load the uploaded CSV info
  useEffect(() => {
    // Pre-populate with the uploaded CSV structure info
    const preloadedContext = `Data CSV Meta Ads: "Paket-Kichenset-apartment-Kampanye-18-Apr-2026-17-Mei-2026.csv"
Nama kampanye: Paket Kitchen Set Apartment
Periode: 18 April 2026 – 17 Mei 2026
Kolom tersedia: Awal pelaporan, Akhir pelaporan, Nama kampanye, Penayangan kampanye, Hasil, Indikator Hasil, Biaya per Hasil, Anggaran Set Iklan, Jenis Anggaran Set Iklan, Jumlah yang dibelanjakan (IDR), Impresi, Jangkauan, Berakhir, Pengaturan atribusi
Status Data: TIDAK ADA DATA / No data available
Kemungkinan penyebab: kampanye belum aktif, budget belum terpakai, atau terjadi error saat export.
Harap analisis situasi ini dan berikan rekomendasi.`;
    setCsvContext(preloadedContext);
  }, []);

  const agent = AGENTS[activeAgent];

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", maxWidth: 720, margin: "0 auto" }}>
      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0.7); opacity: 0.5; }
          40% { transform: scale(1); opacity: 1; }
        }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #D3D1C7; border-radius: 2px; }
        textarea { overflow: hidden; }
      `}</style>

      {/* Header */}
      <div style={{ paddingTop: 16, paddingBottom: 12, borderBottom: "0.5px solid #E8E6DF", marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: "#1a1a1a", display: "flex", alignItems: "center",
            justifyContent: "center", fontSize: 16,
          }}>⚡</div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 15, color: "#1a1a1a", letterSpacing: "-0.01em" }}>
              AI Marketing Suite
            </div>
            <div style={{ fontSize: 11, color: "#888" }}>3 AI Agents · Indonesia Market · 2026</div>
          </div>
        </div>
      </div>

      {/* Agent Tabs */}
      <div style={{ display: "flex", gap: 6, marginBottom: 16, background: "#F5F3EE", borderRadius: 10, padding: 4 }}>
        {Object.values(AGENTS).map((a) => (
          <button
            key={a.id}
            onClick={() => setActiveAgent(a.id)}
            style={{
              flex: 1, padding: "8px 6px",
              background: activeAgent === a.id ? "#fff" : "transparent",
              border: activeAgent === a.id ? "0.5px solid #E8E6DF" : "none",
              borderRadius: 8, cursor: "pointer",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
              transition: "all 0.15s",
              boxShadow: activeAgent === a.id ? "0 1px 3px rgba(0,0,0,0.06)" : "none",
            }}
          >
            <span style={{ fontSize: 18 }}>{a.icon}</span>
            <span style={{
              fontSize: 10.5, fontWeight: activeAgent === a.id ? 600 : 400,
              color: activeAgent === a.id ? a.color : "#666",
              fontFamily: "inherit",
            }}>{a.label}</span>
          </button>
        ))}
      </div>

      {/* Agent Info Card */}
      <div style={{
        background: agent.bg, border: `0.5px solid ${agent.border}`,
        borderRadius: 10, padding: "10px 14px", marginBottom: 14,
        display: "flex", alignItems: "center", gap: 10,
      }}>
        <div style={{ fontSize: 22 }}>{agent.icon}</div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: agent.color }}>{agent.label} Agent</div>
          <div style={{ fontSize: 11.5, color: agent.color, opacity: 0.8, marginTop: 1 }}>{agent.description}</div>
        </div>
        <div style={{
          marginLeft: "auto", fontSize: 10, padding: "3px 8px",
          background: agent.color, color: "#fff", borderRadius: 999, whiteSpace: "nowrap",
        }}>Active</div>
      </div>

      {/* CSV Upload — only for Ads agent */}
      {activeAgent === "ads" && (
        <CsvUploadZone onFile={handleCsvFile} uploadedFile={csvFile} />
      )}

      {/* Ads CSV Preview */}
      {activeAgent === "ads" && (
        <div style={{
          background: "#FAFAF8", border: "0.5px solid #E8E6DF",
          borderRadius: 10, padding: "10px 14px", marginBottom: 14,
          fontSize: 12, color: "#666",
        }}>
          <div style={{ fontWeight: 500, color: "#444", marginBottom: 4, display: "flex", alignItems: "center", gap: 6 }}>
            <span>📋</span>
            <span>Data Kampanye Terdeteksi</span>
            {!csvFile && <span style={{ fontSize: 10, color: "#888", marginLeft: 4 }}>(dari file yang diupload sebelumnya)</span>}
          </div>
          <div style={{ lineHeight: 1.7 }}>
            <span style={{ fontWeight: 500 }}>Kampanye:</span> Paket Kitchen Set Apartment<br />
            <span style={{ fontWeight: 500 }}>Periode:</span> 18 Apr – 17 Mei 2026<br />
            <span style={{ fontWeight: 500 }}>Status:</span>{" "}
            <span style={{
              background: "#FCEBEB", color: "#A32D2D",
              fontSize: 10.5, padding: "2px 7px", borderRadius: 999,
            }}>No Data Available</span>
            {csvFile && csvParsed && csvParsed.rows.length > 0 && (
              <><br /><span style={{ fontWeight: 500 }}>Rows:</span> {csvParsed.rows.length} baris data</>
            )}
          </div>
        </div>
      )}

      {/* Chat Panel */}
      <div style={{
        background: "#fff", border: "0.5px solid #E8E6DF",
        borderRadius: 12, padding: 16, minHeight: 480,
        display: "flex", flexDirection: "column",
      }}>
        <AgentPanel
          key={activeAgent}
          agent={agent}
          csvData={activeAgent === "ads" ? csvContext : null}
        />
      </div>

      {/* Footer */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "12px 0", borderTop: "0.5px solid #E8E6DF", marginTop: 12,
        fontSize: 10.5, color: "#aaa",
      }}>
        <span>AI Marketing Suite · Indonesia 2026</span>
        <div style={{ display: "flex", gap: 12 }}>
          {Object.values(AGENTS).map((a) => (
            <span key={a.id} style={{ cursor: "pointer", color: activeAgent === a.id ? a.color : "#aaa" }}
              onClick={() => setActiveAgent(a.id)}>
              {a.icon} {a.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
