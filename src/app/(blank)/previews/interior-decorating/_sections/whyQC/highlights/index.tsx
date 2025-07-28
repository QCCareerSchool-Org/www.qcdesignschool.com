'use client';

import type { FC, MouseEventHandler } from 'react';
import { useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';

export const Highlights: FC = () => {
  const [ popup, setPopup ] = useState<1 | 2 | 3 | undefined>(undefined);

  const handleClick1: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    setPopup(1);
  };

  const handleClick2: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    setPopup(2);
  };

  const handleClick3: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    setPopup(3);
  };

  const handleClose = (): void => {
    setPopup(undefined);
  };

  return (
    <div className="row">
      <div className="col-12 col-lg-4">
        <h3 className="h6 mb-3">Expert Mentorship</h3>
        <p>Get personalized feedback from industry-leading professionals and build real-world design skills through insights you won't find in textbooks.</p>
        <a onClick={handleClick1} href="#" className="fw-bold">View More</a>
        <Modal show={popup === 1} onHide={handleClose}>
          <ModalHeader closeButton><h4 className="h6 mb-0">Expert Mentorship</h4></ModalHeader>
          <ModalBody>
            Our mentors are more than instructors—they're seasoned professionals and entrepreneurs with real-world experience in the design industry. They offer the kind of personalized guidance, honest critique, and insider knowledge that can only come from years in the industry.  You'll receive personalized feedback on every assignment you submit, helping you grow with each step. With their support, you'll build the skills and confidence to excel in today's design world.
          </ModalBody>
        </Modal>
      </div>
      <div className="col-12 col-lg-4">
        <h3 className="h6 mb-3">Unmatched Student Support</h3>
        <p>Our dedicated team of expert advisors and teaching assistants is here 7 days a week to keep you motivated, on track, and confident every step of the way.</p>
        <a onClick={handleClick2} href="#" className="fw-bold">View More</a>
        <Modal show={popup === 2} onHide={handleClose}>
          <ModalHeader closeButton><h4 className="h6 mb-0">Student Support</h4></ModalHeader>
          <ModalBody>
            With QC Design School, you'll never feel stuck or alone in your studies. Whether you have a question about your course or need help troubleshooting a tech issue, our Student Support Team is just a message or phone call away. With availability via phone, email, or live chat 7 days a week, we're here to cheer you on, talk you through challenges, and celebrate every win along the way.
          </ModalBody>
        </Modal>
      </div>
      <div className="col-12 col-lg-4">
        <h3 className="h6 mb-3">Vibrant Virtual Community</h3>
        <p>Join a thriving network of QC students and graduates where you'll get feedback on your work, make connections, and grow your confidence.</p>
        <a onClick={handleClick3} href="#" className="fw-bold">View More</a>
        <Modal show={popup === 3} onHide={handleClose}>
          <ModalHeader closeButton><h4 className="h6 mb-0">Vibrant Community</h4></ModalHeader>
          <ModalBody>
            Be part of a dynamic, supportive network of QC students and graduates from around the world. Inside our private virtual community, you can share your work, exchange ideas, and get real feedback from your peers. You'll also gain exclusive access to live webinars and events led by industry professionals. It's more than a community—it's a launchpad for creativity, collaboration, and lifelong connections in the design world.
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};
