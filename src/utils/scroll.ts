function scrollToId(id: string) {
  const element = document.getElementById(id);
  if (!element) return;

  element.scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollToPageTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export { scrollToId, scrollToPageTop };
