'use client';

import Link from 'next/link';
import type { FC } from 'react';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import styles from './mainNav.module.css';
import Toggle from './toggle.svg';
import { Logo } from '@/components/logo';
import { useScrollPosition } from '@/hooks/useScrollPosition';

export const MainNav: FC = () => {
  const scrollPosition = useScrollPosition();
  const [ key, setKey ] = useState(0);

  const handleClick = (): void => {
    setTimeout(() => {
      setKey(k => (k < Number.MAX_SAFE_INTEGER ? k + 1 : 0));
    }, 0);
  };

  return (
    <Navbar key={key} expand="lg" collapseOnSelect={true} fixed="top" className={`${styles.mainNav} ${scrollPosition > 1 ? styles.scrolled : undefined} bg-white`}>
      <div className="container">
        <Link className="navbar-brand" href="/" aria-label="Go back to the home page">
          <div id="navLogo" className="d-none d-sm-block">
            <Logo height={22} />
          </div>
          <div className="d-sm-none">
            <Logo height={17} />
          </div>
        </Link>
        <div className="d-flex">
          <div className="d-none d-sm-block d-lg-none me-3"><Link href="https://enroll.qceventplanning.com" className="btn btn-navy">Enroll Now</Link></div>
          <div className="d-sm-none me-3"><Link href="https://enroll.qceventplanning.com" className="btn btn-sm btn-navy">Enroll Now</Link></div>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <Toggle />
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Courses" id="courses-nav-dropdown">
              {/* <li style={{ padding: '0 1rem', fontWeight: 'bold', margin: '0.5rem 0 0.5rem 0', whiteSpace: 'nowrap' }}>Foundation Courses</li> */}
              <Link href="/online-courses/interior-decorating" className="dropdown-item" onClick={handleClick}>Interior Decorating</Link>
              <Link href="/online-courses/home-staging" className="dropdown-item" onClick={handleClick}>Home Staging</Link>
              <Link href="/online-courses/landscape-design" className="dropdown-item" onClick={handleClick}>Landscape Design</Link>
              {/* <li><hr className="dropdown-divider" /></li> */}
              {/* <li style={{ padding: '0 1rem', fontWeight: 'bold', margin: '1rem 0 0.5rem 0', whiteSpace: 'nowrap' }}>Specialty Courses</li> */}
              <Link href="/online-courses/feng-shui-design" className="dropdown-item" onClick={handleClick}>Feng Shui Design</Link>
              <Link href="/online-courses/professional-organizing" className="dropdown-item" onClick={handleClick}>Professional Organizing</Link>
              <Link href="/online-courses/event-decor" className="dropdown-item" onClick={handleClick}>Event Decor</Link>
              <Link href="/online-courses/color-consultant" className="dropdown-item" onClick={handleClick}>Color Consultant</Link>
              <Link href="/online-courses/floral-design" className="dropdown-item" onClick={handleClick}>Floral Design</Link>
              <Link href="/online-courses/staging-for-designers" className="dropdown-item" onClick={handleClick}>Staging For Designers</Link>
              <Link href="/online-courses/aging-in-place" className="dropdown-item" onClick={handleClick}>Aging in Place</Link>
              <Link href="/online-courses/virtual-design" className="dropdown-item" onClick={handleClick}>Virtual Design</Link>
              <Link href="/online-courses/accelerate-your-design-business" className="dropdown-item" onClick={handleClick}>Accelerate Your Business</Link>
              <li><hr className="dropdown-divider" /></li>
              <Link href="/online-courses" className="dropdown-item" onClick={handleClick}>View All Courses</Link>
            </NavDropdown>
            <Link href="/free-course-catalog" className="nav-link" onClick={handleClick}>Free Catalog</Link>
            <Link href="/student-success" className="nav-link" onClick={handleClick}>Student Success</Link>
            <Link href="/tutors" className="nav-link d-lg-none d-xl-block" onClick={handleClick}>Tutors</Link>
            <Link href="/about-qc" className="nav-link" onClick={handleClick}>About QC</Link>
            <div className="d-none d-lg-block ms-3"><Link href="https://enroll.qcdesignschool.com" className="btn btn-navy">Enroll Now</Link></div>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
