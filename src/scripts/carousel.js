// Home page topic carousel: the arrows scroll the track one card at a time.
const track = document.querySelector('[data-carousel]');
const nav = document.querySelector('[data-carousel-nav]');

if (track && nav) {
  const prev = nav.querySelector('[data-carousel-prev]');
  const next = nav.querySelector('[data-carousel-next]');

  const step = () => {
    const card = track.querySelector('.feature-card');
    if (!card) return track.clientWidth;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return card.getBoundingClientRect().width + gap;
  };

  // The arrows stay in place as the section's affordance; they simply grey
  // out until there are enough topics to scroll through.
  const sync = () => {
    const max = track.scrollWidth - track.clientWidth;
    prev.disabled = track.scrollLeft <= 4;
    next.disabled = track.scrollLeft >= max - 4;
  };

  prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
  track.addEventListener('scroll', sync, { passive: true });
  window.addEventListener('resize', sync);
  sync();
}
