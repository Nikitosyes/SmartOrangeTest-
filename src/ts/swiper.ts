import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function setUpSwiper() {
  const mySwiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination, Autoplay],
    navigation: {
      nextEl: ".swiper-btnRight",
      prevEl: ".swiper-btnLeft",
    },
    pagination: {
      el: ".slider-pagination",
      type: "fraction",
      renderFraction: function (currentClass, totalClass) {
        return (
          `<span class ="` +
          currentClass +
          `"></span>` +
          `<span class="` +
          totalClass +
          `"></span>`
        );
      },
    },
    grabCursor: true,
    autoplay: {
      delay: 2500,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 2000,
  });

  mySwiper.init();
}
