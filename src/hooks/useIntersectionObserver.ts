import type { RefObject } from 'react';
import { useEffect, useState } from 'react';

export const useIntersectionObserver = (ref: RefObject<HTMLElement>, options?: IntersectionObserverInit): boolean => {
  const [ intersected, setIntersected ] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const currentRef = ref.current;

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIntersected(true);
      }
    }, options);

    observer.observe(currentRef);

    return () => { observer.unobserve(currentRef); };
  }, [ ref, options ]);

  return intersected;
};