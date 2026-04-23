import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

import styles from './image.module.css';

interface Props {
  src: StaticImageData;
}

export const CardImage: FC<Props> = ({ src }) => (
  <Image className={styles.cardImage} src={src} alt="" />
);
