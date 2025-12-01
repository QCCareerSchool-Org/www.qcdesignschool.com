'use client';

import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC, MouseEventHandler, PropsWithChildren } from 'react';
import { Modal } from 'react-bootstrap';

import styles from './testimonial.module.scss';
import { useToggle } from '@/hooks/useToggle';

interface Props {
  name: string;
  imageSrc: StaticImageData;
  quote: string;
}

export const Testimonial: FC<PropsWithChildren<Props>> = props => {
  const [ show, toggle ] = useToggle();

  const handleHide = toggle;

  const handleClick: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    toggle();
  };

  return (
    <>
      <div className="mb-3">
        <Image src={props.imageSrc} className="img-fluid" alt={props.name} />
      </div>
      <p>&ldquo;<span className="fst-italic">{props.quote}</span>&rdquo;&mdash;{props.name}</p>
      <a onClick={handleClick} href="#" className={styles.readMore}>Read Full Story</a>
      <Modal show={show} onHide={handleHide} size="lg">
        <Modal.Header closeButton>{props.name}</Modal.Header>
        <Modal.Body>
          {props.children}
        </Modal.Body>
      </Modal>
    </>
  );
};
