import type { Metadata } from 'next';
import type { PageComponent } from '@/app/serverComponent';
import { GetStartedSection } from '@/components/getStartedSection';

export const metadata: Metadata = {
  title: 'FAQ - QC Design School',
};

const FAQPage: PageComponent = () => (
  <div>
    <section>
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-md-10 col-lg-7 text-center">
            <h1>FAQ</h1>
          </div>
        </div>
        <div className="row justify-content-center mb-5 fw-bold text-dark text-center">
          <div className="col-12 col-sm-6 col-md-3 col-xl-2 mb-2"><a className="text-reset text-decoration-none" href="#beforeEnroll">Before You Enroll</a></div>
          <div className="col-12 col-sm-6 col-md-3 col-xl-2 mb-2"><a className="text-reset text-decoration-none" href="#whileYouLearn">While You Learn</a></div>
          <div className="col-12 col-sm-6 col-md-3 col-xl-2 mb-2"><a className="text-reset text-decoration-none" href="#afterYouGraduate">After You Graduate</a></div>
          <div className="col-12 col-sm-6 col-md-3 col-xl-2 mb-2"><a className="text-reset text-decoration-none" href="#aboutQC">About QC Design School</a></div>
        </div>
        <div className="row justify-content-center g-4 g-lg-s mb-4" id="beforeEnroll">
          <div className="col-12 col-md-10 col-xl-8">
            <h2 className="mb-3 h3">Before You Enroll</h2>
            <h3 className="h5">Can I claim my course tuition on my taxes?</h3>
            <p>Yes, and you can have more than 50% of your course fees covered! QC is a Certified Education Institution with Employment and Social Development Canada. At the end of the year, we'll send you a T2202 tax receipt for the course fees you paid during the year. You can use the receipt to get a tax refund. <a href="https://www.qceventplanning.com/canada-training-credit" className="text-body">Learn more here</a>.</p>
            <h3 className="h5">How do I know QC Event School is legitimate?</h3>
            <p>We have been specializing in distance education since 1984. We operate 7 faculties under the QC Career School banner. We are accredited by the Better Business Bureau and maintain an A+ rating with them year after year. If you are unsure about student satisfaction, we invite you to check out our Facebook page for student testimonials. We also feature current students and graduates from the event planning school on our Pointers for Planners blog.</p>
            <h3 className="h5">Can I claim my course tuition on my taxes?</h3>
            <p>Yes, and you can have more than 50% of your course fees covered! QC is a Certified Education Institution with Employment and Social Development Canada. At the end of the year, we'll send you a T2202 tax receipt for the course fees you paid during the year. You can use the receipt to get a tax refund. Learn more here.</p>
          </div>
        </div>
        <div className="row justify-content-center g-4 g-lg-s mb-4" id="whileYouLearn">
          <div className="col-12 col-md-10 col-xl-8">
            <h2 className="mb-3 h3">While You Learn</h2>
            <h3 className="h5">Can I claim my course tuition on my taxes?</h3>
            <p>Yes, and you can have more than 50% of your course fees covered! QC is a Certified Education Institution with Employment and Social Development Canada. At the end of the year, we'll send you a T2202 tax receipt for the course fees you paid during the year. You can use the receipt to get a tax refund. <a href="https://www.qceventplanning.com/canada-training-credit" className="text-body">Learn more here</a>.</p>
            <h3 className="h5">How do I know QC Event School is legitimate?</h3>
            <p>We have been specializing in distance education since 1984. We operate 7 faculties under the QC Career School banner. We are accredited by the Better Business Bureau and maintain an A+ rating with them year after year. If you are unsure about student satisfaction, we invite you to check out our Facebook page for student testimonials. We also feature current students and graduates from the event planning school on our Pointers for Planners blog.</p>
            <h3 className="h5">Can I claim my course tuition on my taxes?</h3>
            <p>Yes, and you can have more than 50% of your course fees covered! QC is a Certified Education Institution with Employment and Social Development Canada. At the end of the year, we'll send you a T2202 tax receipt for the course fees you paid during the year. You can use the receipt to get a tax refund. Learn more here.</p>
          </div>
        </div>
      </div>
    </section>
    <GetStartedSection
      title="Have Another Question?"
      text="Feel free to contact the school anytime to learn more about payment plans, career options for event planners, and studying online!"
      buttonText="Contact Us"
      buttonHref="/contact-us"
    />
  </div>
);

export default FAQPage;
