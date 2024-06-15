// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function setSwiperYachts() {
  const swiperYachts = new Swiper('.swiper', {

    breakpoints: {
      1280: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      360: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
    },

    modules: [Navigation],

    // pagination: {
    //   el: ".swiper-pagination",
    // },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    mousewheel: {
      invert: true,
    },

    simulateTouch: true,
  });
}
