'use client';

import type { FC, MouseEventHandler } from 'react';
import { useState } from 'react';

import AngieChapmanImage from './angie-chapman.webp';
import DeborahSoulierImage from './deborah-soulier.jpg';
import { ExpertCard } from './expertCard';
import styles from './index.module.scss';
import JaneLockhartImage from './jane-lockhart.jpg';
import { ImageCircle } from '@/components/imageCircle';

export const PlatformExperts: FC = () => {
  const [ expert, setExpert ] = useState<1 | 2 | 3>(1);

  const handleJaneClick: MouseEventHandler<HTMLLIElement> = e => {
    e.preventDefault();
    setExpert(1);
  };

  const handleDeborahClick: MouseEventHandler<HTMLLIElement> = e => {
    e.preventDefault();
    setExpert(2);
  };

  const handleAngieClick: MouseEventHandler<HTMLLIElement> = e => {
    e.preventDefault();
    setExpert(3);
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <h3 className="mb-3">Meet Your Experts</h3>
          <p className="mb-4">Learn at your own pace on our intuitive, interactive platform with expert-led instructional videos, and get personalized audio feedback from seasoned design professionals on every assignment you submit.</p>
        </div>
      </div>

      <nav className={styles.expertsNav}>
        <ul>
          <li role="button" onClick={handleJaneClick} className="d-flex align-items-center"><div className="d-none d-lg-inline-block me-3"><ImageCircle src={JaneLockhartImage} alt="" size={48} /></div>Jane<span className="d-none d-sm-inline">&nbsp;Lockhart</span></li>
          <li role="button" onClick={handleDeborahClick} className="d-flex align-items-center"><div className="d-none d-lg-inline-block me-3"><ImageCircle src={DeborahSoulierImage} alt="" size={48} /></div>Deborah<span className="d-none d-sm-inline">&nbsp;Soulier</span></li>
          <li role="button" onClick={handleAngieClick} className="d-flex align-items-center"><div className="d-none d-lg-inline-block me-3"><ImageCircle src={AngieChapmanImage} alt="" size={48} /></div>Angie<span className="d-none d-sm-inline">&nbsp;Chapman</span></li>
        </ul>
      </nav>
      <ExpertCard show={expert === 1} src={JaneLockhartImage} name="Jane Lockhart, BAAID" title="Featured Course Expert">
        <ul>
          <li className="mb-2">Principal Designer & Founder of Jane Lockhart Design, acclaimed for award-winning residential and commercial transformations.</li>
          <li className="mb-2">Two-time NKBA Pinnacle Award winner and HGTV/CTV colour specialist.</li>
          <li>Author of Room Recipes and Paint: A Great Impression.</li>
        </ul>
      </ExpertCard>
      <ExpertCard show={expert === 2} src={DeborahSoulierImage} name="Deborah Soulier" title="Course Expert & Mentor">
        <ul>
          <li className="mb-2">Award-winning Principal Designer & Owner of Soulier Design Studio, renowned for blending interior design with wellness to deliver stunning, transformative spaces.</li>
          <li className="mb-2">A four-time published designer featured in Home Trends magazine.</li>
          <li>Proud to serve on the Board of Directors of the DDA and elevate the design industry as Chair of Regions.</li>
        </ul>
      </ExpertCard>
      <ExpertCard show={expert === 3} src={AngieChapmanImage} name="Angie Chapman" title="Course Expert & Mentor">
        <ul>
          <li className="mb-2">Award-winning design consultant and founder of Interiors Just for You.</li>
          <li className="mb-2">Celebrated for creating spaces that perfectly reflect each client's unique needs, with over 20 years of success in the design industry.</li>
          <li>Passionate about design education and advancing professional standards in interior design and decorating.</li>
        </ul>
      </ExpertCard>
    </div>
  );
};
