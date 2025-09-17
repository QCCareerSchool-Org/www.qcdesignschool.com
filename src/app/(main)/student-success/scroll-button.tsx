'use client';
import type { JSX } from '@emotion/react/jsx-runtime';
import React from 'react';

type Props = { targetSelector: string };

export default function ScrollButton({ targetSelector = 'section' }: Props): JSX.Element {
  const handleScroll = (): void => {
    const handleNextSection = (document.querySelector(targetSelector) as HTMLElement)?.nextElementSibling as HTMLElement;
    handleNextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button onClick={handleScroll} className="btn btn-primary btn-lg mb-5 mt-4">Explore the Student Experience</button>
  );
}
