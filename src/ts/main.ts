import { closeBurgerMenu, openBurgerMenu } from "./burgerMenu";
import { setUpSwiper } from "./swiper";

const burgerIcon = document.querySelector(".burger-icon");
burgerIcon?.addEventListener("click", () => {
  openBurgerMenu();
});

const closeBurgerIcon = document.querySelector(".burger__close");
closeBurgerIcon?.addEventListener("click", () => {
  console.log("Close burger icon clicked");
  closeBurgerMenu();
});

document.addEventListener("keydown", (e) => {
  if (e.keyCode === 27) {
    closeBurgerMenu();
  }
});

const mySwiper = document.querySelector(".swiper ");
if (mySwiper) {
  setUpSwiper();
}
