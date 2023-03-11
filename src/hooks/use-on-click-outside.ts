import { type MutableRefObject, useEffect } from "react";

import { assertEventTargetIsNode } from "../utils/assertions";
import { constants } from "../utils/constants";

export const useOnClickOutside = <T extends HTMLElement>(
  callback: (event: Event) => void,
  ref: MutableRefObject<T>
) => {
  useEffect(() => {
    if (!constants.IS_CLIENT) return;

    const listener = (event: Event) => {
      assertEventTargetIsNode(event.target, "useOnClickOutside");
      if (!ref.current || ref.current.contains(event.target)) return;
      callback(event);
    };

    window.addEventListener("mousedown", listener);
    window.addEventListener("touchstart", listener);

    return () => {
      window.removeEventListener("mousedown", listener);
      window.removeEventListener("touchstart", listener);
    };
  }, [callback, ref]);
};
