'use client';

import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import { useCountUp } from 'react-use-count-up';

const duration = 2_000; // 2 seconds

export const StatsSection: FC = () => {
  const [ started, setStarted ] = useState(false);
  const students = useCountUp({ start: 0, end: 40_000, duration, started, easingFunction: 'easeOutCubic' });
  const foo = useCountUp({ start: 0, end: 20, duration, started, easingFunction: 'easeOutCubic' });
  const bar = useCountUp({ start: 0, end: 2310, duration, started, easingFunction: 'easeOutCubic' });

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const currentRef = ref.current;

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setStarted(true);
      }
    });

    observer.observe(currentRef);

    return () => { observer.unobserve(currentRef); };
  }, []);

  return (
    <section className="bg-navy text-white">
      <div className="container" ref={ref}>
        <div className="row text-center">
          <div className="col-12 col-lg-4">
            {students}
          </div>
          <div className="col-12 col-lg-4">
            {foo}
          </div>
          <div className="col-12 col-lg-4">
            {bar}
          </div>
        </div>
      </div>
    </section>
  );
};
