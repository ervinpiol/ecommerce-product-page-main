/* import IconNext from "../assets/icon-next.svg";
import IconPrevious from "../assets/icon-previous.svg";
import IconNextHover from "../assets/icon-next-hover.svg";
import IconPreviousHover from "../assets/icon-previous-hover.svg";

import React, { useState } from "react";

const SliderButton = ({ direction, onClick, className }) => {
  const [hovered, setHovered] = useState("");
  const icon =
    direction === "prev"
      ? hovered === "prev"
        ? IconPreviousHover
        : IconPrevious
      : hovered === "next"
      ? IconNextHover
      : IconNext;
  return (
    <button
      className={`bg-white rounded-full absolute -translate-y-1/2 flex items-center justify-center xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 active:scale-75 ${className}`}
      onClick={onClick}
      onMouseOver={() => setHovered(direction)}
      onMouseOut={() => setHovered("")}
    >
      <img src={icon} alt={`Icon${direction}`} className="w-2.5 md:w-3.5" />
    </button>
  );
};

export default SliderButton; */
import IconNext from "../assets/icon-next.svg";
import IconPrevious from "../assets/icon-previous.svg";
import IconNextHover from "../assets/icon-next-hover.svg";
import IconPreviousHover from "../assets/icon-previous-hover.svg";

import React, { useState } from "react";

const SliderButton = ({ direction, onClick, className }) => {
  const [hovered, setHovered] = useState("");
  const icon =
    direction === "prev"
      ? hovered === "prev"
        ? IconPreviousHover
        : IconPrevious
      : hovered === "next"
      ? IconNextHover
      : IconNext;
  return (
    <button
      className={`bg-white rounded-full absolute -translate-y-1/2 flex items-center justify-center xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 active:scale-75 transition-transform duration-100 ease-in  ${className}`}
      onClick={onClick}
      onMouseOver={() => setHovered(direction)}
      onMouseOut={() => setHovered("")}
    >
      <img src={icon} alt={`Icon${direction}`} className="w-2.5 md:w-3.5" />
    </button>
  );
};

export default SliderButton;
