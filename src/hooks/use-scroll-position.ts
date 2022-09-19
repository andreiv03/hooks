import React from "react";

export const useScrollPosition = () => {
  const isSSR = typeof document === "undefined";

  const [scrollPosition, setScrollPosition] = React.useState({
    x: isSSR ? 0 : document.body.getBoundingClientRect().left,
    y: isSSR ? 0 : document.body.getBoundingClientRect().top
  });

  React.useEffect(() => {
    const listener = () => {
      setScrollPosition({
        x: Math.abs(document.body.getBoundingClientRect().left),
        y: Math.abs(document.body.getBoundingClientRect().top)
      });
    }

    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, []);

  return scrollPosition;
}