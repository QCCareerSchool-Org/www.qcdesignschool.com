'use client';

import type { FC, PropsWithChildren, TouchEventHandler } from 'react';
import { useEffect, useRef } from 'react';

import styles from './index.module.scss';

type Props = {
  show: boolean;
  index: number;
  onHeightChange: (index: number, height: number) => void;
  onTouchStart: TouchEventHandler;
  onTouchMove: TouchEventHandler;
  onTouchEnd: TouchEventHandler;
};

export const SlideContainer: FC<PropsWithChildren<Props>> = props => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const element = ref.current;

      const handler = (): void => {
        props.onHeightChange(props.index, element.clientHeight);
        console.log('index ' + props.index + ' has height ' + element.clientHeight);
      };

      window.addEventListener('resize', handler);
      handler();

      return () => window.removeEventListener('resize', handler);
    }
  }, [ props ]);

  return (
    <div ref={ref} className={`${styles.slideContainer} ${props.show ? styles.show : undefined} d-flex align-items-center`} onTouchStart={props.onTouchStart} onTouchMove={props.onTouchMove} onTouchEnd={props.onTouchEnd}>
      {props.children}
    </div>
  );
};
