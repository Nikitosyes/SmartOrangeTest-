export function handleArrowUpLogic() {
  const arrowUp = document.querySelector(".arrow-up");

  function updateArrowVisibility() {
    if (window.scrollY > 1100) {
      arrowUp?.classList.add("active");
    } else {
      arrowUp?.classList.remove("active");
    }
  }

  function arrowUpClicked() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  document.addEventListener("scroll", updateArrowVisibility);
  arrowUp?.addEventListener("click", arrowUpClicked);
}
