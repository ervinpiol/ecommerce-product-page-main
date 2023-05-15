import { useEffect, useState } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import ShoeImagesModal from "./components/ShoeImagesModal";
import { AnimatePresence } from "framer-motion";

function App() {
  const [itemCount, setItemCount] = useState(0);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const addToCart = () => {
    if (itemCount === 0) {
      return;
    }
    setCartItemCount((prevCartItemCount) => prevCartItemCount + itemCount);
    setItemCount(0);
  };

  useEffect(() => {
    if (openModal) {
      document.body.classList.add("overflow-hidden");
      window.scrollTo(0, 0);
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [openModal]);

  return (
    <div className="relative">
      <div className="mx-auto xs:w-full 2xl:w-[1440px]">
        <Navbar
          cartItemCount={cartItemCount}
          setCartItemCount={setCartItemCount}
        />
        <Main
          setItemCount={setItemCount}
          itemCount={itemCount}
          addToCart={addToCart}
          setOpenModal={setOpenModal}
        />
      </div>
      <AnimatePresence>
        {openModal && <ShoeImagesModal setOpenModal={setOpenModal} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
