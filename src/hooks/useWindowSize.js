import { useEffect, useState } from "react";

export function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        setSize({ width: window.innerWidth, height: window.innerHeight });
      },
      [],
    );
  }, []);

  return size;
}
