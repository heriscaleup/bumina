/**
 * Premium Pangalengan Travel — Main Script
 * script.js
 */

/* ===== PAGE LOADER ===== */
(function initLoader() {
  const loader = document.getElementById('pageLoader');
  if (!loader) return;
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 1200);
  });
  setTimeout(() => loader.classList.add('hidden'), 3000);
})();

/* ===== SCROLL PROGRESS BAR ===== */
(function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = docHeight > 0 ? (scrollTop / docHeight * 100) + '%' : '0%';
  }, { passive: true });
})();

/* ===== STICKY HEADER ===== */
(function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
})();

/* ===== HERO BG ZOOM-IN ===== */
(function initHeroBg() {
  const bg = document.getElementById('heroBg');
  if (!bg) return;
  requestAnimationFrame(() => {
    setTimeout(() => bg.classList.add('loaded'), 100);
  });
})();

/* ===== ACTIVE NAV ON SCROLL ===== */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.nav a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
})();

/* ===== SEARCH TABS ===== */
(function initSearchTabs() {
  document.querySelectorAll('.search-tab').forEach(tab => {
    tab.addEventListener('click', function () {
      document.querySelectorAll('.search-tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });
})();

/* ===== FAQ ACCORDION ===== */
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = answer.classList.contains('open');

  document.querySelectorAll('.faq-answer.open').forEach(a => {
    a.classList.remove('open');
    a.previousElementSibling.classList.remove('active');
    a.previousElementSibling.setAttribute('aria-expanded', 'false');
  });

  if (!isOpen) {
    answer.classList.add('open');
    btn.classList.add('active');
    btn.setAttribute('aria-expanded', 'true');
  }
}

document.querySelectorAll('.faq-question').forEach((btn, index) => {
  const answer = btn.nextElementSibling;
  if (!answer || !answer.classList.contains('faq-answer')) return;

  const questionId = btn.id || `faq-question-${index + 1}`;
  const answerId = answer.id || `faq-answer-${index + 1}`;

  btn.id = questionId;
  answer.id = answerId;
  btn.setAttribute('aria-controls', answerId);
  answer.setAttribute('aria-labelledby', questionId);
});

/* ===== MOBILE NAV ===== */
function toggleMobileNav() {
  const nav = document.getElementById('mobileNav');
  const hamburger = document.querySelector('.hamburger');
  const isOpen = nav.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function closeMobileNav() {
  const nav = document.getElementById('mobileNav');
  const hamburger = document.querySelector('.hamburger');
  nav.classList.remove('open');
  hamburger.classList.remove('open');
  document.body.style.overflow = '';
}

/* ===== SMOOTH SCROLL & MOBILE NAV CLOSE ===== */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        closeMobileNav();
        const offset = document.getElementById('header')?.offsetHeight || 0;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
})();

/* ===== SCROLL REVEAL ===== */
(function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observer.observe(el));
})();

/* ===== COUNT-UP ANIMATION FOR STATS ===== */
(function initCountUp() {
  const statEls = document.querySelectorAll('[data-count]');
  if (!statEls.length) return;

  function formatCount(val, decimals) {
    if (decimals > 0) return val.toFixed(decimals).replace('.', ',');
    const floored = Math.floor(val);
    return floored >= 1000
      ? floored.toLocaleString('id-ID')
      : floored.toString();
  }

  function animateCount(el) {
    const target   = parseFloat(el.dataset.count);
    const suffix   = el.dataset.suffix || '';
    const prefix   = el.dataset.prefix || '';
    const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
    const duration = 1800;
    const start    = performance.now();

    function step(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease     = 1 - Math.pow(1 - progress, 3);
      const current  = target * ease;
      el.textContent = prefix + formatCount(current, decimals) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statEls.forEach(el => observer.observe(el));
})();

/* ===== GALLERY LIGHTBOX ===== */
(function initLightbox() {
  const lightbox     = document.getElementById('lightbox');
  const lightboxImg  = document.getElementById('lightboxImg');
  const lightboxCap  = document.getElementById('lightboxCaption');
  if (!lightbox || !lightboxImg) return;

  const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
  let currentIndex   = 0;

  function openLightbox(index) {
    currentIndex = index;
    const item    = galleryItems[index];
    const img     = item.querySelector('img');
    const capText = item.querySelector('.gallery-caption-text');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    if (lightboxCap) lightboxCap.textContent = capText ? capText.textContent : '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { lightboxImg.src = ''; }, 300);
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    openLightbox(currentIndex);
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    openLightbox(currentIndex);
  }

  galleryItems.forEach((item, i) => {
    item.addEventListener('click', () => openLightbox(i));
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', item.querySelector('img')?.alt || 'Lihat gambar');
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(i); }
    });
  });

  document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox);
  document.getElementById('lightboxNext')?.addEventListener('click', showNext);
  document.getElementById('lightboxPrev')?.addEventListener('click', showPrev);

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowRight')  showNext();
    if (e.key === 'ArrowLeft')   showPrev();
  });

  let touchStartX = 0;
  lightbox.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
  lightbox.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? showNext() : showPrev();
  }, { passive: true });
})();

/* ===== FORM SUBMIT ===== */
const WA_NUMBER = '6281296361446';

function buildWaMessage(form) {
  const name  = form.querySelector('#fname')?.value    || '';
  const dest  = form.querySelector('#fdest')?.value    || '';
  const type  = form.querySelector('#ftype')?.value    || '';
  const date  = form.querySelector('#fdate')?.value    || '';
  const guest = form.querySelector('#fguests')?.value  || '';
  const msg   = form.querySelector('#fmessage')?.value || '';

  let text = `Halo Premium Pangalengan Travel! 👋\n\nSaya ingin konsultasi wisata Pangalengan.\n\n`;
  if (name)  text += `*Nama:* ${name}\n`;
  if (dest)  text += `*Destinasi:* ${dest}\n`;
  if (type)  text += `*Jenis Perjalanan:* ${type}\n`;
  if (date)  text += `*Tanggal Rencana:* ${date}\n`;
  if (guest) text += `*Jumlah Peserta:* ${guest}\n`;
  if (msg)   text += `\n*Keterangan:*\n${msg}`;
  return encodeURIComponent(text.trim());
}

function handleSubmit(e) {
  e.preventDefault();
  const btn  = e.target.querySelector('.form-submit');
  const orig = btn.textContent;

  btn.textContent = 'Mengirim...';
  btn.disabled    = true;

  const waText = buildWaMessage(e.target);

  setTimeout(() => {
    btn.textContent      = '✓ Mengalihkan ke WhatsApp...';
    btn.style.background = 'var(--green-accent)';
    btn.style.color      = '#fff';
    showToast('Melanjutkan ke WhatsApp...');

    setTimeout(() => {
      window.open(`https://wa.me/${WA_NUMBER}?text=${waText}`, '_blank');
      e.target.reset();

      setTimeout(() => {
        btn.textContent       = orig;
        btn.style.background  = '';
        btn.style.color       = '';
        btn.disabled          = false;
      }, 3000);
    }, 800);
  }, 900);
}

/* ===== TOAST NOTIFICATION ===== */
function showToast(message, duration = 3500) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

/* ===== BACK TO TOP ===== */
(function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ===== PARALLAX ON HERO ===== */
(function initParallax() {
  const heroBg = document.getElementById('heroBg');
  if (!heroBg || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const offset = window.scrollY;
        heroBg.style.transform = `scale(1) translateY(${offset * 0.3}px)`;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();

/* ===== TESTIMONIALS DRAG SCROLL (mobile) ===== */
(function initTestiDrag() {
  const grid = document.querySelector('.testi-grid');
  if (!grid) return;

  let isDown = false, startX = 0, scrollLeft = 0;

  grid.addEventListener('mousedown', e => {
    isDown = true;
    startX = e.pageX - grid.offsetLeft;
    scrollLeft = grid.scrollLeft;
    grid.style.cursor = 'grabbing';
  });
  grid.addEventListener('mouseleave', () => { isDown = false; grid.style.cursor = ''; });
  grid.addEventListener('mouseup',    () => { isDown = false; grid.style.cursor = ''; });
  grid.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x    = e.pageX - grid.offsetLeft;
    const walk = (x - startX) * 1.5;
    grid.scrollLeft = scrollLeft - walk;
  });
})();

/* ===== CLOSE MOBILE NAV ON ESC ===== */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMobileNav();
});
