import { useEffect, useState } from "react";
import { constants } from "../utils/constants";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    height: constants.IS_CLIENT ? window.innerHeight : 0,
    width: constants.IS_CLIENT ? window.innerWidth : 0
  });

  useEffect(() => {
    if (!constants.IS_CLIENT) return;

    const listener = () => {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth
      });
    };

    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, []);

  return windowSize;
};
