'use client';

import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';
import { useCallback, useState } from 'react';

import styles from './index.module.scss';
import { Portfolio } from './portfolio';

interface ShowcaseProps {
  name: string;
  title?: string;
  business?: string;
  description: string;
  image: StaticImageData;
  galleryImages?: StaticImageData[];
}

export const StudentShowcaseSection: FC<{ student: ShowcaseProps }> = ({ student }) => {

  const [ showPortfolio, setShowPortfolio ] = useState(false);
  const [ initialImageIndex, setInitialImageIndex ] = useState(0);

  const handleShow = useCallback((index: number) => {
    setInitialImageIndex(index);
    setShowPortfolio(true);
  }, []);

  const handleHide = useCallback(() => { setShowPortfolio(false); }, []);

  const thumbnails = student.galleryImages?.slice(0, 4) ?? [];

  return (
    <div className="container">
      <div className="row justify-content-center g-s mb-5 mt-4">
        <div className="col-12 col-lg-6">
          <Image src={student.image} alt="" style={{ borderRadius: '15px' }} className="img-fluid rounded-lg" />
        </div>
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 mb-2">
          <h3 className="mb-1">{student.name}</h3>
          <h5 className="mb-4">{student.business}</h5>
          <p className="lead mb-4">{student.description}</p>
          <div className="d-flex">
            {thumbnails.map((image, index) => (<div key={index} className={styles['thumbnail-w-control']} style={{ cursor: 'pointer' }} onClick={() => handleShow(index)}>
              <div className={styles['thumbnail-aspect-ratio']}>
                <Image src={image.src} alt={`Gallery image ${index + 1} for ${student.name}`} className={`${styles['thumbnail-image']} img-fluid`} width={90} height={90} style={{ borderRadius: '5px', objectFit: 'cover' }} />
              </div>
            </div>
            ))}
          </div>
        </div>
        {/* key causes component to unmount and remount on change */}
        <Portfolio key={initialImageIndex} name={student.name} show={showPortfolio} onHide={handleHide} images={(student.galleryImages ?? []).map(image => ({ src: image }))} initialIndex={initialImageIndex} />
      </div>
    </div>
  );
};
