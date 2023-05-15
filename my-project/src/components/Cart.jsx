import React from "react";
import ImageProduct from "../assets/image-product-1-thumbnail.jpg";
import IconDelete from "../assets/icon-delete.svg";
import { motion } from "framer-motion";
import { useSmallScreen } from "../hooks/smallScreen";

const Cart = ({ cartItemCount, setCartItemCount }) => {
  const isSmallScreen = useSmallScreen(768);

  return (
    <motion.div
      className="absolute shadow-2xl h-60 top-[90px] rounded-lg bg-white xs:-translate-x-1/2 xs:left-1/2 xs:w-[95%] sm:left-auto sm:right-4 sm:top-[105px] sm:w-[45%] sm:translate-x-0 lg:w-1/3 xl:w-96 2xl:-right-20"
      initial={{
        opacity: 0,
        y: -100,
        x: isSmallScreen ? "-50%" : 0,
      }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.4 }}
    >
      <p className="font-bold border-b py-4 px-6 text-left flex items-center">
        Cart
      </p>
      {cartItemCount >= 1 ? (
        <div className="p-6 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <img
              src={ImageProduct}
              alt="ImageProduct"
              className="w-14 rounded-md"
            />
            <div className="flex items-start flex-col text-Darkgrayishblue">
              <p>Fall Limited Edition Sneakers</p>
              <p>
                $125.00 x {cartItemCount}{" "}
                <strong className="text-black">
                  ${`${cartItemCount * 125}.00`}
                </strong>
              </p>
            </div>
            <button onClick={() => setCartItemCount(0)}>
              <img src={IconDelete} alt="IconDelete" />
            </button>
          </div>
          <button className="bg-Orange text-white font-bold flex items-center w-full h-14 rounded-lg text-lg justify-center gap-5 hover:opacity-75">
            Checkout
          </button>
        </div>
      ) : (
        <div className="relative flex justify-center items-center">
          <p className="font-bold text-Darkgrayishblue absolute top-16">
            Your cart is empty.
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default Cart;
