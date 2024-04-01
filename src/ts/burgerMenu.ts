const burgerBackground = document.querySelector(".burger");
const burgerBody = document.querySelector(".burger__body");

export function openBurgerMenu() {
  document.body.classList.add("locked");
  burgerBackground!.classList.add("active");
  burgerBody!.classList.add("active");
}

export function closeBurgerMenu() {
  document.body.classList.remove("locked");
  burgerBackground!.classList.remove("active");
  burgerBody!.classList.remove("active");
}
