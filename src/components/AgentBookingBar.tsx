export default function AgentBookingBar() {
  const webMcpAttributes = {
    toolname: "checkBuminaAvailability",
    tooldescription:
      "Open a WhatsApp conversation with Homestay Bumina EENK to ask about availability, rates, guest capacity, or booking policies.",
    toolautosubmit: "true",
  } as Record<string, string>;

  const parameterAttributes = {
    toolparamtitle: "Booking question",
    toolparamdescription:
      "A concise Indonesian or English message containing the preferred date, number of guests, and booking question.",
  } as Record<string, string>;

  return (
    <aside className="border-y border-white/10 bg-[#061b15] text-white" aria-labelledby="agent-booking-title">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-7 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(30rem,1.25fr)] lg:items-center lg:px-8">
        <div>
          <p className="text-[.68rem] font-black uppercase tracking-[.24em] text-emerald-300">Booking concierge · human &amp; agent ready</p>
          <h2 id="agent-booking-title" className="mt-2 text-xl font-black tracking-[-.035em] sm:text-2xl">Tanyakan tanggal. Jawabannya langsung ke WhatsApp.</h2>
        </div>
        <form
          action="https://wa.me/6285219460779"
          method="GET"
          target="_blank"
          className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/5 p-2 sm:flex-row"
          {...webMcpAttributes}
        >
          <label htmlFor="booking-question" className="sr-only">Tanggal, jumlah tamu, dan pertanyaan booking</label>
          <input
            id="booking-question"
            name="text"
            type="text"
            required
            defaultValue="Halo, saya ingin cek tanggal dan harga Homestay Bumina EENK."
            className="min-w-0 flex-1 rounded-xl border-0 bg-white px-4 py-3 text-sm text-slate-950 outline-none ring-emerald-300 placeholder:text-slate-400 focus:ring-2"
            {...parameterAttributes}
          />
          <button type="submit" className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-black text-emerald-950 transition hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-200">
            Buka WhatsApp ↗
          </button>
        </form>
      </div>
    </aside>
  );
}
