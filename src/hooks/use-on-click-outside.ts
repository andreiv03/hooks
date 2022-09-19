import React from "react";

function assertEventTargetIsNode (eventTarget: EventTarget | null): asserts eventTarget is Node {
  if (!eventTarget || !("nodeType" in eventTarget))
    throw new Error("useOnClickOutside hook expects a valid node element!");
}

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  callback: (event: Event) => void,
  ref: React.MutableRefObject<T>
) => {
  React.useEffect(() => {
    const listener = (event: Event) => {
      assertEventTargetIsNode(event.target);
      if (!ref.current || ref.current.contains(event.target)) return;
      callback(event);
    }

    window.addEventListener("mousedown", listener);
    window.addEventListener("touchstart", listener);

    return () => {
      window.removeEventListener("mousedown", listener);
      window.removeEventListener("touchstart", listener);
    }
  }, [callback, ref]);
}