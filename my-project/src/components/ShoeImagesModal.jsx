/* import React, { useState } from "react";
import { allImages, shoeItems } from "../constants/shoeItems";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import SliderButton from "../constants/SliderButton";
import { modalSliderSettings } from "../constants/SliderSettings";

const ShoeImagesModal = ({ setOpenModal }) => {
  const [sliderRef, setSliderRef] = useState(null);
  const [hovered, setHovered] = useState("");

  return (
    <div className="absolute w-full h-screen bg-black bg-opacity-40 top-0 left-0 flex justify-center items-center z-[999] xs:hidden lg:flex">
      <div className="lg:w-2/5 relative 2xl:w-[30%]">
        <Slider
          ref={setSliderRef}
          {...modalSliderSettings}
          className="w-full lg:mt-0 2xl:mt-6"
        >
          {shoeItems.map((image) => (
            <div
              key={image.id}
              className="flex flex-col items-center w-[30%] justify-center group-in-range:"
            >
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="outline-none rounded-2xl  inset-0"
                />
              </div>
            </div>
          ))}
        </Slider>
        <div className="z-[9999]">
          <button
            className="absolute right-0 lg:-top-14 2xl:-top-5 active:scale-75 transition-transform duration-300 ease-in"
            onClick={() => setOpenModal(false)}
          >
            <img
              src={
                hovered === "close"
                  ? allImages.IconCloseHover
                  : allImages.IconClose
              }
              alt="IconClose"
              className="w-6"
              onMouseOver={() => setHovered("close")}
              onMouseOut={() => setHovered("")}
            />
          </button>
          <SliderButton
            direction="prev"
            onClick={sliderRef?.slickPrev}
            className="-translate-x-1/2 bottom-1/2"
          />
          <SliderButton
            direction="next"
            onClick={sliderRef?.slickNext}
            className="translate-x-1/2 bottom-1/2 right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default ShoeImagesModal; */
import React, { useState } from "react";
import { allImages, shoeItems } from "../constants/shoeItems";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import SliderButton from "../constants/SliderButton";
import { modalSliderSettings } from "../constants/SliderSettings";
import { motion } from "framer-motion";

const ShoeImagesModal = ({ setOpenModal }) => {
  const [sliderRef, setSliderRef] = useState(null);
  const [hovered, setHovered] = useState("");

  return (
    <motion.div
      className="absolute w-full h-screen bg-black bg-opacity-40 top-0 left-0 flex justify-center items-center z-[999] xs:hidden lg:flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="lg:w-2/5 relative 2xl:w-[30%]">
        <Slider
          ref={setSliderRef}
          {...modalSliderSettings}
          className="w-full lg:mt-0 2xl:mt-6"
        >
          {shoeItems.map((image) => (
            <div
              key={image.id}
              className="flex flex-col items-center w-[30%] justify-center group-in-range:"
            >
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="outline-none rounded-2xl  inset-0"
                />
              </div>
            </div>
          ))}
        </Slider>
        <div className="z-[9999]">
          <button
            className="absolute right-0 lg:-top-14 2xl:-top-5 active:scale-75 transition-transform duration-300 ease-in"
            onClick={() => setOpenModal(false)}
          >
            <img
              src={
                hovered === "close"
                  ? allImages.IconCloseHover
                  : allImages.IconClose
              }
              alt="IconClose"
              className="w-6"
              onMouseOver={() => setHovered("close")}
              onMouseOut={() => setHovered("")}
            />
          </button>
          <SliderButton
            direction="prev"
            onClick={sliderRef?.slickPrev}
            className="-translate-x-1/2 bottom-1/2"
          />
          <SliderButton
            direction="next"
            onClick={sliderRef?.slickNext}
            className="translate-x-1/2 bottom-1/2 right-0"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ShoeImagesModal;
