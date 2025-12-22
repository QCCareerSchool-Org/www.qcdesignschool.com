import type { Metadata } from 'next';

import styles from './page.module.scss';
import type { PageComponent } from '@/app/serverComponent';
import { ChatLink } from '@/components/chatLink';
import { GetStartedSection } from '@/components/getStartedSection';
import EnvelopeIcon from '@/components/icons/envelope.svg';
import MapIcon from '@/components/icons/map.svg';
import PhoneIcon from '@/components/icons/phone.svg';
import { TelephoneLink } from '@/components/telephoneLink';
import { getSeverData } from '@/lib/getData';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact QC at any time! You can give us a call at 1-833-600-3751, talk to us on live chat, or send an email to info@qcdesignschool.com.',
  alternates: { canonical: '/contact-us' },
};

const iconHeight = 32;

const ContactPage: PageComponent = async () => {
  const { countryCode } = await getSeverData();

  return(
    <div>
      <section>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-12 col-md-10 col-lg-7 text-center">
              <p className="text-primary fw-bold">We want to hear from you!</p>
              <h1>Contact Us</h1>
              <p className="mb-0">Whether you're a prospective student curious about QC's courses or tuition, or a current student with questions about an assignment, we're here to assist you in any way possible.</p>
            </div>
          </div>
          <div className="row justify-content-center g-4 g-lg-s">
            <div className="col-12 col-md-8 col-lg-4 text-center">
              <EnvelopeIcon height={iconHeight} className={`mb-3 ${styles.contactIcon}`} />
              <h2 className="h4">Email</h2>
              <p>Feel free to email us anytime, day or night, and we'll respond promptly.</p>
              <a href="mailto:info@qcdesignschool.com" className={styles.blackLink}>info@qcdesignschool.com</a>
            </div>
            <div className="col-12 col-md-8 col-lg-4 text-center">
              <PhoneIcon height={iconHeight} className={`mb-3 ${styles.contactIcon}`} />
              <h2 className="h4">Phone</h2>
              <p>Connect with a student advisor for guidance on enrolling with QC or assistance with your courses and assignments.</p>
              <TelephoneLink countryCode={countryCode} className={styles.blackLink} />
            </div>
            <div className="col-12 col-md-8 col-lg-4 text-center">
              <MapIcon height={iconHeight} className={`mb-3 ${styles.contactIcon}`} />
              <h2 className="h4">Chat</h2>
              <p>Have an urgent question? Our Student Support Specialists are standing by for a quick chat!</p>
              <ChatLink className={styles.blackLink}>Chat with Support</ChatLink>
            </div>
          </div>
        </div>
      </section>
      <GetStartedSection
        title="Ready to Enroll?"
        text="You can get started with QC Design School whenever you like! When you enroll, you'll receive a login to the Online Student Center where you can access your course online."
        buttonText="Enroll Online"
      />
    </div>
  );
};

export default ContactPage;
