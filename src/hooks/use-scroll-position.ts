import { useEffect, useState } from "react";
import { constants } from "../utils/constants";

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState({
    x: constants.IS_CLIENT ? document.body.getBoundingClientRect().left : 0,
    y: constants.IS_CLIENT ? document.body.getBoundingClientRect().top : 0
  });

  useEffect(() => {
    if (!constants.IS_CLIENT) return;

    const listener = () => {
      setScrollPosition({
        x: Math.abs(document.body.getBoundingClientRect().left),
        y: Math.abs(document.body.getBoundingClientRect().top)
      });
    };

    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, []);

  return scrollPosition;
};
