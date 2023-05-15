import React from "react";
import ShoeImages from "./ShoeImages";
import ShoeDetails from "./ShoeDetails";

const Main = ({ itemCount, setItemCount, addToCart, setOpenModal }) => {
  return (
    <div className="flex items-center xs:flex-col xs:p-0 xs:pb-16 xs:gap-0 lg:flex-row lg:p-16 lg:gap-20 lg:pb-32 xl:gap-16 2xl:py-20 2xl:px-28 2xl:gap-40">
      <ShoeImages setOpenModal={setOpenModal} />
      <ShoeDetails
        setItemCount={setItemCount}
        itemCount={itemCount}
        addToCart={addToCart}
      />
    </div>
  );
};

export default Main;
