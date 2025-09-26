'use client';

import Link from 'next/link';
import { type FC, useState } from 'react';

import type { studentTeamMember } from './data';
import { StudentSuccessTeam } from './data';
import SuccessTeamBackground from './student-support-bg.jpg';
import { SuccessTeamModal } from './success-team-modal';
import { BackgroundImage } from '@/components/backgroundImage';
import CalIcon from '@/components/icons/calendar-check.svg';
import ChatIcon from '@/components/icons/chat-white.svg';
import { ImageCircle } from '@/components/imageCircle';

type Props = {
  className: string;
};

export const SuccessTeamModalSection: FC<Props> = ({ className }) => {
  const [ showPopup, togglePopup ] = useState(false);
  const [ selectedMember, setSelectedMember ] = useState<studentTeamMember | null>(null);

  const handlePopup = (memberKey: string): void => {
    const memberData = StudentSuccessTeam[memberKey];
    setSelectedMember(memberData);
    togglePopup(true);
  };

  return (
    <>
      <section className={className} style={{ backgroundColor: '#02013f' }}>
        <div className="d-none d-lg-block"><BackgroundImage src={SuccessTeamBackground} objectPosition={'100% 50%'} /></div>
        <div className="container">
          <div className="row justify-content-center align-items-center g-lg-s">

            <div className="col-12 col-lg-7 col-xxl-6 ms-auto">
              <h3 className="mb-4">Your Success Team:<br />Experts Behind Every Graduate</h3>
              <div className="d-flex gap-4 flex-wrap mb-4">
                <div onClick={() => handlePopup('lucie-demers')} style={{ cursor: 'pointer' }}>
                  <ImageCircle size={80} src={StudentSuccessTeam['lucie-demers'].image} alt="Lucie Demers" />
                </div>
                <div onClick={() => handlePopup('emily-sprague')} style={{ cursor: 'pointer' }}>
                  <ImageCircle size={80} src={StudentSuccessTeam['emily-sprague'].image} alt="Emily Sprague" />
                </div>
                <div onClick={() => handlePopup('shannon-cooper')} style={{ cursor: 'pointer' }}>
                  <ImageCircle size={80} src={StudentSuccessTeam['shannon-cooper'].image} alt="Shannon Cooper" />
                </div>
              </div>
              {showPopup && selectedMember && (
                <SuccessTeamModal show={showPopup} handleHide={() => { togglePopup(false); setSelectedMember(null); }} name={selectedMember.name} title={selectedMember.title} description={selectedMember.description} />
              )}
              <p className="lead mb-4" style={{ marginRight: '60px' }}>Our expert team is here to help you select the right course, navigate your materials, and stay on track to reach your career goals. Available 7 days a week by phone, email, or live chat, we ensure you get the support you need—whether it&apos;s advice, troubleshooting, or planning your next step.</p>
              <div className="d-flex gap-3 flex-wrap mt-3">
                <Link href="/contact-us">
                  <button className="btn btn-primary btn-lg flex items-center mb-lg-5"><ChatIcon height="22" className="me-2" style={{ position: 'relative', top: -1 }} />Talk to Us Today</button>
                </Link>
                <Link href="https://calendly.com/qccareerschool/design">
                  <button className="btn btn-outline-white btn-lg flex items-center mb-lg-5" style={{ borderWidth: '2px' }}><CalIcon height="22" className="me-2" style={{ position: 'relative', top: -1 }} />Book A Call</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
