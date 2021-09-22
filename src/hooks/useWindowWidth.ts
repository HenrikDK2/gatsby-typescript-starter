import { useLayoutEffect, useState } from "react";

type UpdatePoint = Number;
const isBrowser = typeof window !== "undefined";

//Update only on specific point for performance reasons
export function useWindowWidth(updatePoint: UpdatePoint) {
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 500);

  const updateWidth = () => {
    if (window.innerWidth === width) return;
    if (window.innerWidth < updatePoint || width > updatePoint) setWidth(window.innerWidth);
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return width;
}
