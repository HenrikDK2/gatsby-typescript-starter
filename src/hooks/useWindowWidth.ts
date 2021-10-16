import { useEffect, useState } from "react";

type UpdatePoint = number;
const isBrowser = typeof window !== "undefined";

//Update only on specific point for performance reasons
export function useWindowWidth(updatePoint: UpdatePoint): number {
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 500);

  useEffect(() => {
    const updateWidth = () => {
      const innerWidth = window.innerWidth;
      if (
        innerWidth === width ||
        (innerWidth > updatePoint && width > updatePoint) ||
        (innerWidth < updatePoint && width < updatePoint)
      ) {
        return;
      }

      setWidth(innerWidth);
    };

    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [width]);
  return width;
}
