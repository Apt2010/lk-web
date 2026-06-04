// ── HAMBURGER ──
const ham = document.getElementById('hamburger');
const mobMenu = document.getElementById('mobMenu');
const mobOverlay = document.getElementById('mobOverlay');

function openMob() {
  mobMenu.classList.add('open');
  mobOverlay.classList.add('on');
  document.body.style.overflow = 'hidden';
}

function closeMob() {
  mobMenu.classList.remove('open');
  mobOverlay.classList.remove('on');
  document.body.style.overflow = '';
}

ham.addEventListener('click', openMob);
document.getElementById('mobClose').addEventListener('click', closeMob);
mobOverlay.addEventListener('click', closeMob);
document.querySelectorAll('.mob-menu a').forEach(a => a.addEventListener('click', closeMob));

// ── MOBILE SERVICES ACCORDION ──
const mobServToggle = document.getElementById('mobServToggle');
const mobServList = document.getElementById('mobServList');
mobServToggle.addEventListener('click', e => {
  e.stopPropagation();
  mobServList.classList.toggle('open');
});

// ── FAQ ──
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-a').style.maxHeight = '0';
      i.querySelector('.faq-a').style.paddingBottom = '0';
    });
    if (!wasOpen) {
      item.classList.add('open');
      const ans = item.querySelector('.faq-a');
      ans.style.maxHeight = ans.scrollHeight + 'px';
    }
  });
});

// ── MODAL ──
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalMsg = document.getElementById('modalMsg');

function showModal(t, m) {
  modalTitle.textContent = t;
  modalMsg.textContent = m;
  modal.classList.add('on');
  document.body.style.overflow = 'hidden';
}

function hideModal() {
  modal.classList.remove('on');
  document.body.style.overflow = '';
}

document.getElementById('modalCloseBtn').addEventListener('click', hideModal);
modal.addEventListener('click', e => { if (e.target === modal) hideModal(); });

// ── FORM ──
document.getElementById('estimateForm').addEventListener('submit', e => {
  e.preventDefault();
  const n = document.getElementById('fName').value.trim();
  const p = document.getElementById('fPhone').value.trim();
  if (!n || !p) {
    showModal('Missing Info', 'Please enter at least your name and phone number to receive your free estimate.');
    return;
  }
  showModal(
    'Estimate Request Received! 🎉',
    `Thank you ${n}! Our construction expert will call you within 24 hours at ${p}. No commitment, fully transparent pricing.`
  );
  e.target.reset();
});

// ── BUTTONS ──
document.getElementById('viewAllBtn')?.addEventListener('click', e => {
  e.preventDefault();
  showModal('180+ Completed Projects', 'Visit our full gallery or schedule a site visit to see finished homes across Simmakkal, iyer bungalow, Anna Nagar, Karaiyippatti and more.');
});

document.getElementById('waBtn')?.addEventListener('click', e => {
  e.preventDefault();
  showModal('WhatsApp LK Constraction', 'Send us a message at +91 98765 43210 on WhatsApp. Available 9 AM – 8 PM daily.');
});

// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const id = this.getAttribute('href');
    if (id && id !== '#') {
      const el = document.querySelector(id);
      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth' }); }
    }
  });
});

// ── NAV ACTIVE ON SCROLL ──
const secs = document.querySelectorAll('section[id],div[id="contact"]');
window.addEventListener('scroll', () => {
  let cur = '';
  secs.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
  document.querySelectorAll('.nav-menu a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
  });
}, { passive: true });
