import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export const socialSwiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
});
