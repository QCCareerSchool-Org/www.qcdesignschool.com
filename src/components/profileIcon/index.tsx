import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

import styles from './profileIcon.module.scss';

type Props = {
  image: StaticImageData;
  name: string;
  subtitle: string;
};

export const ProfileIcon: FC<Props> = ({ image, name, subtitle }) => {
  return(
    <div className={styles.profileIcon}>
      <div className={styles.profileImageContainer}>
        <Image src={image} alt="" className={styles.profileImage} />
      </div>
      <div className={styles.profileText}>
        <span className="fw-bold text-dark">{name}</span>
        <span>{subtitle}</span>
      </div>
    </div>
  );
};
