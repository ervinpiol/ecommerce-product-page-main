import { shoeItems } from "./shoeItems";

export const mainSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipe: false,
  arrows: false,
  customPaging: (i) => (
    <img src={shoeItems[i].thumbnail} alt={shoeItems[i].alt} />
  ),
  appendDots: (dots) => (
    <div>
      <ul className="flex gap-8 pt-6 xs:hidden lg:flex">{dots}</ul>
    </div>
  ),
};

export const modalSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipe: false,
  arrows: false,
  customPaging: (i) => (
    <img
      src={shoeItems[i].thumbnail}
      alt={shoeItems[i].alt}
      className="cursor-pointer"
    />
  ),
  appendDots: (dots) => (
    <div>
      <ul className="flex gap-8 pt-6 lg:px-10">{dots}</ul>
    </div>
  ),
};
