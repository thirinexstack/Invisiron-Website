const scrollDurationPerViewport = 950;
const maxScrollDuration = 3600;

function easeInOutQuad(progress: number) {
  return progress < 0.5
    ? 2 * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 2) / 2;
}

function scrollToY(targetY: number) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const root = document.documentElement;
  const previousScrollBehavior = root.style.scrollBehavior;
  const duration = Math.min(
    maxScrollDuration,
    Math.max(scrollDurationPerViewport, (Math.abs(distance) / window.innerHeight) * scrollDurationPerViewport),
  );

  if (Math.abs(distance) < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo(0, targetY);
    return;
  }

  const startTime = performance.now();
  root.style.scrollBehavior = "auto";

  function step(currentTime: number) {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutQuad(progress));

    if (progress < 1) {
      window.requestAnimationFrame(step);
      return;
    }

    window.scrollTo(0, targetY);
    root.style.scrollBehavior = previousScrollBehavior;
  }

  window.requestAnimationFrame(step);
}

function scrollToId(id: string) {
  const element = document.getElementById(id);
  if (!element) return;

  const scrollMarginTop = Number.parseFloat(window.getComputedStyle(element).scrollMarginTop) || 0;
  const targetY = element.getBoundingClientRect().top + window.scrollY - scrollMarginTop;

  scrollToY(targetY);
}

function scrollToPageTop() {
  scrollToY(0);
}

export { scrollToId, scrollToPageTop };
