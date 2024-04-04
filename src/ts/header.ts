export function handleScrollHeader() {
  const header = document.querySelector(".header") as HTMLElement;

  if (!header) return;

  let lastScrollPosition = 0;

  function handleScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
      header.classList.add("fixedHeader");
    } else {
      header.classList.remove("fixedHeader");
    }

    if (scrollPosition > 500) {
      if (lastScrollPosition >= scrollPosition) {
        header.classList.remove("headerHidden");
      } else {
        header.classList.add("headerHidden");
      }
      lastScrollPosition = scrollPosition; // Update last scroll position
    } else {
      header.classList.remove("hidden");
    }
  }

  window.addEventListener("scroll", handleScroll);

  handleScroll();
}
