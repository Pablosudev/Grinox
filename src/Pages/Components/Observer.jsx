export function initFadeObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;

          if (el.hasAttribute("data-fade-left")) {
            el.classList.add("fade-visible-left");
          } else if (el.hasAttribute("data-fade-right")) {
            el.classList.add("fade-visible-right");
          } else if (el.hasAttribute("data-fade")) {
            el.classList.add("fade-visible");
          }
        }
      });
    },
    { threshold: 0.2 }
  );

  document
    .querySelectorAll("[data-fade], [data-fade-left], [data-fade-right]")
    .forEach((el) => observer.observe(el));
}
