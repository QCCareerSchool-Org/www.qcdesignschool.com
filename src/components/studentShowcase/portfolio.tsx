import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';

import NavArrowIcon from './nav-arrow.svg';

type Props = {
  name: string;
  show: boolean;
  onHide: () => void;
  initialIndex?: number;
  images: Array<{
    src: StaticImageData;
    description?: string;
  }>;
};

export const Portfolio: FC<Props> = props => {
  const [ index, setIndex ] = useState(props.initialIndex ?? 0);

  const handleNextClick = (): void => {
    setIndex(i => (i === props.images.length - 1 ? 0 : i + 1));
  };

  const handlePrevClick = (): void => {
    setIndex(i => (i === 0 ? props.images.length - 1 : i - 1));
  };

  useEffect(() => {
    if(props.show) {
      setIndex(props.initialIndex ?? 0);
    }
  }, [ props.show, props.initialIndex ]);

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>{props.name}'s Work</Modal.Header>
      <Modal.Body>
        <Image src={props.images[index].src} alt={`Image ${index + 1} of ${props.images.length}`} width={70} height={70} className="img-fluid w-100" />
      </Modal.Body>
      {(props.images.length > 1 || typeof props.images[index].description !== 'undefined') && (
        <Modal.Footer>
          <div className="d-flex align-items-center w-100">
            {props.images.length > 1 && (
              <div className="flex-shrink-1">
                <NavArrowIcon onClick={handlePrevClick} alt="Prev" className="me-3" />
              </div>
            )}
            <div className="flex-grow-1">
              {typeof props.images[index].description !== 'undefined' && <>{props.images[index].description}</>}
            </div>
            {props.images.length > 1 && (
              <div className="flex-shrink-1">
                <NavArrowIcon onClick={handleNextClick} alt="Next" className="ms-3" style={{ transform: 'scaleX(-1)' }} />
              </div>
            )}
          </div>
        </Modal.Footer>
      )}
    </Modal>
  );
};
