import { useEffect, useState } from 'react';
import { debounce } from "../helpers";

export const useWindowWidth = (delay = 700) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth,
      );
    }

    const debouncedHandleResize = debounce(handleResize, delay);

    window.addEventListener('resize', debouncedHandleResize);
    debouncedHandleResize();

    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, []);

  return windowWidth;
};
