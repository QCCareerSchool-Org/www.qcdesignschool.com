import type { StaticImageData } from 'next/image';
import type { CSSProperties, FC, PropsWithChildren } from 'react';

import { CardBody } from './body';
import { CardImage } from './image';
import styles from './index.module.css';

interface Props {
  background?: CSSProperties['background'];
  className?: string;
  src?: StaticImageData;
}

export const Card: FC<PropsWithChildren<Props>> = ({ background, className, src, children }) => (
  <div className={`${styles.card} ${className}`} style={{ background }}>
    {src && <CardImage src={src} />}
    <CardBody>
      {children}
    </CardBody>
  </div>
);
