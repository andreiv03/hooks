import React from "react";

export const useWindowSize = () => {
  const isSSR = typeof window === "undefined";

  const [windowSize, setWindowSize] = React.useState({
    height: isSSR ? 0 : window.innerHeight,
    width: isSSR ? 0 : window.innerWidth
  });

  React.useEffect(() => {
    const listener = () => {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }

    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, []);

  return windowSize;
}