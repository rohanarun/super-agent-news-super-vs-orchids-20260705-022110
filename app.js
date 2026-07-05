(function () {
  try {
    if (!window.gsap) return;
    if (window.ScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);

    gsap.from('.hero h1', { y: 24, opacity: 0, duration: 0.8, ease: 'power3.out' });
    gsap.from('.hero-sub', { y: 24, opacity: 0, duration: 0.8, delay: 0.1, ease: 'power3.out' });
    gsap.from('.media-frame', { y: 36, opacity: 0, duration: 0.9, delay: 0.2, ease: 'power3.out' });

    gsap.utils.toArray('.compare-card').forEach(function (card) {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: 'top 80%' },
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out'
      });
    });
  } catch (e) {
    // animations optional
  }
})();