import React from "react";
import { allImages } from "../constants/shoeItems";

const ShoeDetails = ({ itemCount, setItemCount, addToCart }) => {
  const updateItemCount = (operation) => {
    if (operation === "add") {
      setItemCount(itemCount + 1);
    } else if (operation === "minus" && itemCount > 0) {
      setItemCount(itemCount - 1);
    }
  };

  return (
    <div className="xs:w-full xs:p-5 md:p-10 lg:p-0 2xl:w-1/2">
      <p className="text-Orange font-bold tracking-widest xs:text-xs md:text-sm">
        SNEAKER COMPANY
      </p>
      <h1 className="font-bold xs:text-3xl xs:pt-3 md:text-4xl md:pt-5 lg:pt-3 xl:text-5xl 2xl:pt-4">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-Darkgrayishblue xs:text-base xs:pt-6 md:text-lg md:pt-8 2xl:pt-10">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="flex xs:justify-between xs:pt-8 xs:items-center md:justify-start md:gap-5 md:pb-2 sm:pt-10 2xl:flex-col 2xl:items-start 2xl:gap-2 2xl:pt-6">
        <h2 className="font-bold flex items-center gap-4 xs:text-2xl md:text-3xl">
          $125.00{" "}
          <span className="bg-Paleorange text-Orange px-2 py-0.5 rounded-md xs:text-base md:text-xl">
            50%
          </span>
        </h2>
        <span className="text-Grayishblue font-semibold line-through xs:text-base md:text-xl 2xl:text-lg">
          $250.00
        </span>
      </div>
      <div className="flex items-center gap-6 xs:flex-col xs:pt-6 md:flex-row md:pt-6 lg:pt-4 xl:flex-row w-full lg:gap-4 2xl:pt-6">
        <div className="flex items-center w-44 justify-between bg-Lightgrayishblue h-14 rounded-xl shadow-md xs:w-full md:w-2/3 lg:w-2/4">
          <button
            className="hover:opacity-75 px-5 py-7 active:scale-75"
            onClick={() => updateItemCount("minus")}
          >
            <img src={allImages.IconMinus} alt="IconMinus" className="" />
          </button>
          <span className="font-bold text-lg flex-1 text-center">
            {itemCount}
          </span>
          <button
            className="hover:opacity-75 px-5 py-6 active:scale-75"
            onClick={() => updateItemCount("add")}
          >
            <img src={allImages.IconPlus} alt="IconPlus" />
          </button>
        </div>
        <button
          className="bg-Orange text-white font-bold flex items-center w-80 h-14 rounded-xl text-lg justify-center shadow-xl gap-5 hover:opacity-75 xs:w-full active:scale-95 transition-transform duration-100 ease-in "
          onClick={addToCart}
        >
          <img src={allImages.IconCartWhite} alt="IconCartWhite" /> Add to cart
        </button>
      </div>
    </div>
  );
};

export default ShoeDetails;
