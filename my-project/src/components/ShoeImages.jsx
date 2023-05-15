import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { shoeItems } from "../constants/shoeItems";
import SliderButton from "../constants/SliderButton";
import { mainSliderSettings } from "../constants/SliderSettings";

const ShoeImages = ({ setOpenModal }) => {
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <div className="relative xs:w-full lg:w-1/2 2xl:w-[43%]">
      <Slider ref={setSliderRef} {...mainSliderSettings}>
        {shoeItems.map((image) => (
          <div
            key={image.id}
            onClick={() => setOpenModal(true)}
            className="relative"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="outline-none  xs:rounded-none xs:h-[350px] xs:w-full sm:h-[600px] md:h-full lg:rounded-2xl"
            />
          </div>
        ))}
      </Slider>
      <div className="lg:hidden z-[99]">
        <SliderButton
          direction="prev"
          onClick={sliderRef?.slickPrev}
          className="top-1/2 left-5"
        />
        <SliderButton
          direction="next"
          onClick={sliderRef?.slickNext}
          className="top-1/2 right-5"
        />
      </div>
    </div>
  );
};

export default ShoeImages;
