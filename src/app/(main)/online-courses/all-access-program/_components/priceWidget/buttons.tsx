'use client';

import type { FC, MouseEventHandler } from 'react';

import type { Plan } from './client';
import styles from './buttons.module.scss';

interface Props {
  plan: Plan;
  onFullClick: MouseEventHandler;
  onPartClick: MouseEventHandler;
  inverse?: boolean;
}

const VIBRATE_MS = 50;

export const Buttons: FC<Props> = props => {
  const handleFullClick: MouseEventHandler = e => {
    if ('vibrate' in navigator) {
      navigator.vibrate(VIBRATE_MS);
    }
    props.onFullClick(e);
  };

  const handlePartClick: MouseEventHandler = e => {
    if ('vibrate' in navigator) {
      navigator.vibrate(VIBRATE_MS);
    }
    props.onPartClick(e);
  };

  return (
    <div className={`${styles.wrapper} ${props.inverse ? styles.inverse : ''}`}>
      <div className={styles.glass}>
        <div className={`${styles.slide} ${props.plan === 'full' ? styles.right : styles.left}`} />
        <button onClick={handleFullClick} className={`${styles.button} ${props.plan === 'full' ? styles.selected : styles.deselected}`}>One-Time</button>
        <button onClick={handlePartClick} className={`${styles.button} ${props.plan === 'part' ? styles.selected : styles.deselected}`}>Monthly</button>
      </div>
    </div>
  );
};
