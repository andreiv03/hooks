import { useEffect, useState } from "react";
import { constants } from "../utils/constants";

export const useKeyPress = (targetKey: string) => {
  const [isKeyPressed, setIsKeyPressed] = useState(false);

  useEffect(() => {
    if (!constants.IS_CLIENT) return;

    const onKeyDownListener = ({ key }: KeyboardEvent) =>
      key === targetKey ? setIsKeyPressed(true) : undefined;

    const onKeyUpListener = ({ key }: KeyboardEvent) =>
      key === targetKey ? setIsKeyPressed(false) : undefined;

    window.addEventListener("keydown", onKeyDownListener);
    window.addEventListener("keyup", onKeyUpListener);

    return () => {
      window.removeEventListener("keydown", onKeyDownListener);
      window.removeEventListener("keyup", onKeyUpListener);
    };
  }, []);

  return isKeyPressed;
};
