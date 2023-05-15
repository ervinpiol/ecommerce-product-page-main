import { useState, useEffect } from "react";

export const useSmallScreen = (width) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < width);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < width);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return isSmallScreen;
};
