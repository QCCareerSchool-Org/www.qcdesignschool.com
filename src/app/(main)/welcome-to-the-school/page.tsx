import Image from 'next/image';
import { default as AboutImage } from './about-qc.png';
import AlexSignatureImage from './alex-myers.png';
import type { PageComponent } from '@/app/serverComponent';
import { TelephoneLink } from '@/components/telephoneLink';
import { getData } from '@/lib/getData';

const WelcomeToTheSchoolPage: PageComponent = () => {

  const { countryCode } = getData();

  return (
    <>
      <section>
        <div className="container">
          <div className="row justify-content-center align-items-center g-5">
            <div className="col-12 col-lg-6">
              <h1 className="mb-3">Welcome to QC Design School!</h1>
              <p className="my-4"><strong>Thank you for enrolling with QC Design School! We're thrilled to have you join our community.</strong></p>
              <p>We have safely received your online enrollment application, and it will be processed on the next business day. Once your registration is complete, you'll receive an email with your login information for the online student center.</p>
              <p>If you have any questions about your course or want to discuss your goals, our friendly and knowledgeable student support specialists are here to help. You can reach us by email at <a href="mailto:info@qceventplanning.com">info@qceventplanning.com</a> or by phone at <span style={{ whiteSpace: 'nowrap' }}><TelephoneLink countryCode={countryCode} /></span> seven days a week. We'd love to hear from you and assist you in any way we can.</p>
              <p>We're committed to developing a personal relationship with you and being readily available whenever you need us.</p>
              <p><strong>Best of luck with your studies!</strong></p>
              <p><strong>Sincerely,</strong></p>
              <Image
                src={AlexSignatureImage}
                alt="Alex Myers"
                style={{ maxWidth: '100%', height: 'auto', marginBottom: '0.5rem' }}
              /><br /><div className="text-dark"><strong>Director, QC Career School</strong></div>
            </div>
            <div className="col-12 col-lg-6">
              <Image src={AboutImage} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomeToTheSchoolPage;
