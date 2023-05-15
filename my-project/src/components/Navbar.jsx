import React, { useState } from "react";
import Cart from "./Cart";
import { AnimatePresence, motion } from "framer-motion";
import { useSmallScreen } from "../hooks/smallScreen";
import { allImages } from "../constants/shoeItems";

const Navbar = ({ cartItemCount, setCartItemCount }) => {
  const [openCart, setOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenCart = () => {
    setOpenCart((openCart) => !openCart);
  };

  const isSmallScreen = useSmallScreen(992);

  return (
    <nav className="flex justify-between items-center gap-16 border-b z-[-1] xs:p-6 relative xs:z-[999] md:px-10 lg:pt-8 lg:pb-12 lg:px-16 2xl:px-0">
      <div className="z-[999] flex items-center xs:gap-6 md:gap-8">
        <img
          src={`${openMenu ? allImages.CloseIcon : allImages.MenuIcon}`}
          alt={`${openMenu ? "CloseIcon" : "MenuIcon"}`}
          onClick={() => setOpenMenu(openMenu ? false : true)}
          className={`md:w-6 lg:hidden ${openMenu ? "z-[9999]" : ""}`}
        />
        <img
          src={allImages.Logo}
          alt="Logo"
          className={openMenu ? "hidden" : ""}
        />
      </div>
      <AnimatePresence>
        <motion.ul
          className={`lg:flex lg:gap-12  ${
            openMenu
              ? "flex flex-col text-xl gap-6 px-6 py-24 bg-white absolute top-0 left-0 h-screen w-2/3 md:px-20 md:py-32 md:gap-12"
              : "xs:hidden"
          }`}
          initial={isSmallScreen ? "hidden" : "visible"}
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          exit={{ opacity: 0, y: -100 }}
        >
          {["Collections", "Men", "Women", "About", "Contact"].map(
            (list, i) => (
              <li
                key={i}
                className="relative hover:text-black xs:text-black xs:font-bold md:text-xl lg:text-base lg:text-Darkgrayishblue lg:font-normal"
              >
                {list}
              </li>
            )
          )}
        </motion.ul>
      </AnimatePresence>
      <div className="flex justify-between items-center xs:gap-5 sm:gap-7 md:gap-10 lg:gap-12 ml-auto">
        <div className="relative">
          <button onClick={handleOpenCart}>
            <img src={allImages.CartIcon} alt="CartIcon" />
            {cartItemCount >= 1 && (
              <span className="absolute text-[10px] font-bold bg-Orange text-white px-2 rounded-lg top-0 -translate-y-1/2 left-1/2">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
        <img
          src={allImages.Avatar}
          alt="Avatar"
          className="xs:w-8 sm:w-11 border-2 rounded-full border-transparent hover:border-Orange"
        />
      </div>
      <AnimatePresence>
        {openCart && (
          <Cart
            cartItemCount={cartItemCount}
            setCartItemCount={setCartItemCount}
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
