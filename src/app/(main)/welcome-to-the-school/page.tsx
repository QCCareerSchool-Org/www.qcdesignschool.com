import type { Metadata } from 'next';
import { cookies, headers } from 'next/headers';
import Image from 'next/image';
import { redirect } from 'next/navigation';

import AboutImage from './about-qc.png';
import AlexSignatureImage from './alex-myers.png';
import { Processing } from './processing';
import type { PageComponent } from '@/app/serverComponent';
import { EnrollmentDetails } from '@/components/enrollmentDetails';
import { TelephoneLink } from '@/components/telephoneLink';
import { addToIDevAffiliate } from '@/lib/addToIDevAffiliate';
import { createBrevoContact } from '@/lib/brevoAPI';
import { fbPostPurchase } from '@/lib/facebookConversionAPI';
import { getEnrollment } from '@/lib/fetch';
import { getParam } from '@/lib/getParam';
import { sendEnrollmentEmail } from '@/lib/sendEnrollmentEmail';
import { trustPulseEnrollment } from '@/lib/trustpulse';

const brevoStudentListId = 15;

export const metadata: Metadata = {
  title: 'Welcome to the School',
  description: 'Welcome to the School',
  alternates: { canonical: '/welcome-to-the-school' },
};

const WelcomeToTheSchoolPage: PageComponent = async ({ searchParams }) => {
  const enrollmentIdParam = getParam(searchParams.enrollmentId);
  const codeParam = getParam(searchParams.code);

  if (typeof enrollmentIdParam === 'undefined' || typeof codeParam === 'undefined') {
    redirect('/');
  }

  const enrollmentId = parseInt(enrollmentIdParam, 10);
  if (isNaN(enrollmentId)) {
    redirect('/');
  }

  const enrollment = await getEnrollment(enrollmentId, codeParam);

  if (!enrollment.success) {
    redirect('/');
  }

  if (!enrollment.emailed) {
    const headerList = headers();
    const ipAddress = headerList.get('x-real-ip');
    const userAgent = headerList.get('user-agent');

    const cookieStore = cookies();
    const fbc = cookieStore.get('_fbc')?.value;
    const fbp = cookieStore.get('_fbp')?.value;

    // send email
    try {
      await sendEnrollmentEmail(enrollmentId, codeParam);
    } catch (err) {
      console.error(err);
    }

    // create Brevo contact
    try {
      await createBrevoContact(enrollment.emailAddress, enrollment.firstName, enrollment.lastName, enrollment.countryCode, enrollment.provinceCode, { STATUS_DESIGN_STUDENT: true }, [ brevoStudentListId ]);
    } catch (err) {
      console.error(err);
    }

    // TrustPulse
    try {
      await trustPulseEnrollment(enrollment, ipAddress);
    } catch (err) {
      console.error(err);
    }

    // iDevAffiliate
    try {
      await addToIDevAffiliate(enrollment, ipAddress);
    } catch (err) {
      console.error(err);
    }

    // Facebook
    if (enrollment.transactionTime === null || new Date().getTime() - enrollment.transactionTime.getTime() < 7 * 24 * 60 * 60 * 1000) {
      try {
        const source = 'https://www.qceventplanning.com/welcome-to-the-school';
        await fbPostPurchase(enrollment, source, ipAddress, userAgent, fbc, fbp);
      } catch (err) {
        console.error(err);
      }
    }
  }

  return (
    <>
      <section>
        <div className="container">
          <div className="row justify-content-center align-items-center g-5">
            <div className="col-12 col-lg-6">
              <h1 className="mb-3">Welcome to QC Design School!</h1>
              <p className="my-4"><strong>Thank you for enrolling with QC Design School! We're thrilled to have you join our community.</strong></p>
              <p>We have safely received your online enrollment application, and it will be processed on the next business day. Once your registration is complete, you'll receive an email with your login information for the online student center.</p>
              <p>If you have any questions about your course or want to discuss your goals, our friendly and knowledgeable student support specialists are here to help. You can reach us by email at <a href="mailto:info@qcdesignschool.com">info@qcdesignschool.com</a> or by phone at <span style={{ whiteSpace: 'nowrap' }}><TelephoneLink countryCode={enrollment.countryCode} /></span> seven days a week. We'd love to hear from you and assist you in any way we can.</p>
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
      <EnrollmentDetails enrollment={enrollment} />
      <Processing enrollment={enrollment} />
    </>
  );
};

export default WelcomeToTheSchoolPage;
