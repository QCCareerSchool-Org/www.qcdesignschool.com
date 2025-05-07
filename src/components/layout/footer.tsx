import Link from 'next/link';
import type { FC } from 'react';

import { Address } from './address';
import styles from './footer.module.scss';
import { FooterColumn1 } from './footerColumn1';
import { FooterColumn2 } from './footerColumn2';
import { FooterColumn3 } from './footerColumn3';
import BookReader from './icons/book-reader.svg';
import FacebookIcon from './icons/facebook.svg';
import InstagramIcon from './icons/instagram.svg';
import LinkedinIcon from './icons/linkedin.svg';
import PinterestIcon from './icons/pinterest.svg';
import TiktokIcon from './icons/tiktok.svg';
import YoutubeIcon from './icons/youtube.svg';
import BBBIcon from '@/components/bbb.svg';
import FortyYearsIcon from '@/components/icons/40-years.svg';
import { Logo } from '@/components/logo';

export const Footer: FC = () => (
  <footer className={`${styles.footer} mt-auto`}>
    <div className="container">
      <div className="row">
        <div className={styles.column0}>
          <div className="d-flex h-100 flex-column justify-content-between">
            <div className="mb-5">
              <div className="mb-4"><Logo height={22} /></div>
              <h2 className="h6 mb-4">Get Started with a Free Course Catalog</h2>
              <Link href="/free-course-catalog" className="btn btn-outline-secondary">Get the Catalog <BookReader height="20" style={{ position: 'relative', top: -2 }} /></Link>
            </div>
            <div className="d-flex">
              <div className="d-flex flex-column align-items-center text-center" style={{ width: 75, marginRight: '1.25rem' }}>
                <div className="mb-2"><a href="http://www.bbb.org/ottawa/business-reviews/correspondence-schools/qc-quality-of-course-in-ottawa-on-4175" target="_blank" rel="noreferrer"><BBBIcon /></a></div>
                <a href="http://www.bbb.org/ottawa/business-reviews/correspondence-schools/qc-quality-of-course-in-ottawa-on-4175" target="_blank" rel="noreferrer" className="small" style={{ color: 'inherit', lineHeight: '1rem' }}>A+ Rated by the BBB</a>
              </div>
              <div className="d-flex flex-column align-items-center text-center" style={{ width: 100 }}>
                <div className="mb-2"><FortyYearsIcon height="68" /></div>
                <span className="small" style={{ lineHeight: '1rem' }}>40+ Years of Innovation</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.column1}>
          <h3 className={`h6 ${styles.columnHeader}`}><Link href="/online-courses">Popular Courses</Link></h3>
          <ul className={styles.linkList}>
            <FooterColumn1 />
          </ul>
        </div>
        <div className={styles.column2}>
          <h3 className={`h6 ${styles.columnHeader}`}>Resources</h3>
          <ul className={styles.linkList}>
            <FooterColumn2 />
          </ul>
        </div>
        <div className={styles.column3}>
          <h3 className={`h6 ${styles.columnHeader}`}><Link href="/contact-us">Contact Us</Link></h3>
          <ul className={styles.linkList}>
            <FooterColumn3 />
          </ul>
        </div>
      </div>
      <hr />
      <div className={`${styles.bottom} d-flex flex-column flex-lg-row justify-content-lg-between`}>
        <div>
          <div className="d-flex flex-column flex-md-row mb-1">
            <div className="me-md-3 mb-1 mb-md-0">&copy; {new Date().getFullYear()} QC Design School</div>
            <div className="d-flex flex-column flex-sm-row">
              <div className="me-sm-3"><Link href="/terms">Privacy Policy</Link></div>
              <a href="https://www.qccareerschool.com" target="_blank" rel="noreferrer">QC Career School</a>
            </div>
          </div>
          <div className="mb-2 mb-lg-0">
            <Address />
          </div>
        </div>
        <div className="d-flex">
          <div className="me-3"><a href="https://www.tiktok.com/@qcdesignschool" target="_blank" rel="noreferrer" aria-label="Tiktok"><TiktokIcon alt="Tiktok" /></a></div>
          <div className="me-3"><a href="https://www.instagram.com/qcdesignschool" target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon alt="Instagram" /></a></div>
          <div className="me-3"><a href="https://www.facebook.com/QCDesign" target="_blank" rel="noreferrer" aria-label="Facebook"><FacebookIcon alt="Facebook" /></a></div>
          <div className="me-3"><a href="https://www.youtube.com/channel/UCFaqUFtx_3E-lUdbDLZCPCA" target="_blank" rel="noreferrer" aria-label="Youtube"><YoutubeIcon alt="Youtube" /></a></div>
          <div className="me-3"><a href="https://www.linkedin.com/company/qc-career-school" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon alt="LinkedIn" /></a></div>
          <div><a href="https://www.pinterest.com/qccareerschool" target="_blank" rel="noreferrer" aria-label="Pinterest"><PinterestIcon alt="Pinterest" /></a></div>
        </div>
      </div>
    </div>
  </footer>
);
