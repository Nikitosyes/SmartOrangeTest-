import { handleArrowUpLogic } from "./arrowUp";
import { closeBurgerMenu, openBurgerMenu } from "./burgerMenu";
import { handleScrollHeader } from "./header";
import { handleLinkScroll } from "./scrollLinks";
import { setUpSwiper } from "./swiper";
import AOS from "aos";

document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.querySelector(".burger-icon");
  burgerIcon?.addEventListener("click", () => {
    openBurgerMenu();
  });

  const closeBurgerIcon = document.querySelector(".burger__close");
  closeBurgerIcon?.addEventListener("click", () => {
    closeBurgerMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.keyCode === 27) {
      closeBurgerMenu();
    }
  });

  const mySwiper = document.querySelector(".swiper");
  if (mySwiper) {
    setUpSwiper();
  }

  AOS.init({
    easing: "ease",
    duration: 900,
    once: true,
  });

  handleScrollHeader();
  handleLinkScroll();
  handleArrowUpLogic();
});
