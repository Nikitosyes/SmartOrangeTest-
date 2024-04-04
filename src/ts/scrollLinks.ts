import { closeBurgerMenu } from "./burgerMenu";

export function handleLinkScroll() {
  const links = document.querySelectorAll("a[data-goto]");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const sectionId = (link as HTMLAnchorElement).dataset.goto;

      console.log(sectionId);

      if (sectionId) {
        const section = document.querySelector(`${sectionId}`) as HTMLElement;
        closeBurgerMenu();
        window.scrollTo({
          top: section!.offsetTop - 200,
          behavior: "smooth",
        });
      }
    });
  });
}
