import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { CSSProperties, FC } from 'react';

import styles from './index.module.css';

interface Props {
  src: StaticImageData;
  alt: string;
  size?: CSSProperties['width'];
}

export const ImageCircle: FC<Props> = ({ src, alt, size = 96 }) => (
  <div className={styles.imageCircle} style={{ maxWidth: size, aspectRatio: 1 }}>
    <Image src={src} alt={alt} sizes={typeof size === 'number' ? size.toString() : size} />
  </div>
);
