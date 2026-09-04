// Interactions for the two AGA pages. Everything is pre-rendered; this only
// toggles visibility, so the content is complete without JavaScript.

/* ------------------------------------------------ evidence-level legend --- */

const legendToggle = document.querySelector('[data-legend-toggle]');
const legend = document.getElementById('evidence-legend');

legendToggle?.addEventListener('click', () => {
  const open = legend.hidden;
  legend.hidden = !open;
  legendToggle.setAttribute('aria-expanded', String(open));
});

/* -------------------------------------- treatment categories, one at a time --- */

const catToggles = Array.from(document.querySelectorAll('[data-cat-toggle]'));
const catPanels = Array.from(document.querySelectorAll('[data-cat-panel]'));

function closeAllCategories() {
  for (const button of catToggles) {
    button.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
  }
  for (const panel of catPanels) panel.hidden = true;
}

for (const button of catToggles) {
  button.addEventListener('click', () => {
    const wasOpen = button.classList.contains('is-open');
    closeAllCategories();
    if (wasOpen) return;
    button.classList.add('is-open');
    button.setAttribute('aria-expanded', 'true');
    const panel = catPanels.find((p) => p.dataset.catPanel === button.dataset.catToggle);
    if (panel) panel.hidden = false;
  });
}

/* --------------------------------------- one open treatment per category --- */

for (const button of document.querySelectorAll('[data-treatment-toggle]')) {
  button.addEventListener('click', () => {
    const scope = button.closest('[data-cat-panel]');
    if (!scope) return;
    const id = button.dataset.treatmentToggle;
    const point = button.closest('.quad__point');
    const wasOpen = point?.classList.contains('is-open');

    for (const p of scope.querySelectorAll('.quad__point')) p.classList.remove('is-open');
    for (const dot of scope.querySelectorAll('.quad__dot')) dot.setAttribute('aria-expanded', 'false');
    for (const panel of scope.querySelectorAll('[data-treatment-panel]')) panel.hidden = true;

    if (wasOpen) return;
    point?.classList.add('is-open');
    point?.querySelector('.quad__dot')?.setAttribute('aria-expanded', 'true');
    const panel = scope.querySelector(`[data-treatment-panel="${id}"]`);
    if (panel) panel.hidden = false;
  });
}

/* ------------------------------------------------------ staging accordion --- */

const stageToggles = Array.from(document.querySelectorAll('[data-stage-toggle]'));
const stagePanels = Array.from(document.querySelectorAll('[data-stage-panel]'));

for (const button of stageToggles) {
  button.addEventListener('click', () => {
    const wasOpen = button.classList.contains('is-open');
    for (const b of stageToggles) {
      b.classList.remove('is-open');
      b.setAttribute('aria-expanded', 'false');
    }
    for (const panel of stagePanels) panel.hidden = true;
    if (wasOpen) return;
    button.classList.add('is-open');
    button.setAttribute('aria-expanded', 'true');
    const panel = stagePanels.find((p) => p.dataset.stagePanel === button.dataset.stageToggle);
    if (panel) panel.hidden = false;
  });
}

/* ------------------------------------------------------------------- FAQ --- */

for (const button of document.querySelectorAll('[data-faq-toggle]')) {
  button.addEventListener('click', () => {
    const answer = document.getElementById(button.getAttribute('aria-controls'));
    if (!answer) return;
    const open = answer.hidden;
    answer.hidden = !open;
    button.setAttribute('aria-expanded', String(open));
  });
}

/* -------------------------------------------------------------- lightbox --- */

const lightbox = document.getElementById('lightbox');

if (lightbox) {
  const panel = lightbox.querySelector('.lightbox__panel');
  const contents = Array.from(lightbox.querySelectorAll('[data-lightbox-content]'));
  let lastFocused = null;

  function showBrand(content, index) {
    for (const tab of content.querySelectorAll('[data-brand-tab]')) {
      const active = tab.dataset.brandTab === String(index);
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-pressed', String(active));
    }
    for (const box of content.querySelectorAll('[data-brand-box]')) {
      box.hidden = box.dataset.brandBox !== String(index);
    }
  }

  function openLightbox(id) {
    const target = contents.find((c) => c.dataset.lightboxContent === id);
    if (!target) return;
    for (const content of contents) content.hidden = content !== target;
    showBrand(target, 0);
    lastFocused = document.activeElement;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    panel?.focus();
  }

  function closeLightbox() {
    if (lightbox.hidden) return;
    lightbox.hidden = true;
    document.body.style.overflow = '';
    if (lastFocused instanceof HTMLElement) lastFocused.focus();
  }

  for (const button of document.querySelectorAll('[data-lightbox-open]')) {
    button.addEventListener('click', () => openLightbox(button.dataset.lightboxOpen));
  }

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  lightbox.querySelector('[data-lightbox-close]')?.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', (event) => {
    const tab = event.target instanceof Element ? event.target.closest('[data-brand-tab]') : null;
    if (!tab) return;
    const content = tab.closest('[data-lightbox-content]');
    if (content) showBrand(content, Number(tab.dataset.brandTab));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeLightbox();
  });
}
