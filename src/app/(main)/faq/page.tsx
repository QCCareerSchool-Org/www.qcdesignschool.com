import type { Metadata } from 'next';
import Link from 'next/link';

import styles from './page.module.scss';
import { QuestionAndAnswer } from './questionAndAnswer';
import type { PageComponent } from '@/app/serverComponent';
import { GetStartedSection } from '@/components/getStartedSection';
import { getData } from '@/lib/getData';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: "Explore FAQs and discover how QC Design School's accredited online design courses equip you with the skills to become a certified design professional!",
  alternates: { canonical: '/faq' },
};

const FAQPage: PageComponent = () => {
  const { countryCode } = getData();

  return (
    <div itemScope itemType="https://schema.org/FAQPage">
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
              <h1 className="mb-2 text-center">FAQ</h1>
              <p className="mb-5 text-center col-lg-8 m-auto">
                Explore these frequently asked questions and learn how QC Design School equips you with the skills you need to launch your career!
              </p>
              <nav className="d-none d-md-flex flex-row text-center justify-content-between fw-bold">
                <a className="text-decoration-none" href="#beforeEnroll">Before You Enroll</a>
                <a className="text-decoration-none" href="#whileYouLearn">While You Learn</a>
                <a className="text-decoration-none" href="#afterYouGraduate">After You Graduate</a>
                <a className="text-decoration-none" href="#aboutQC">About QC Design School</a>
              </nav>
              <div className={styles.faqGroup} id="beforeEnroll">
                <h2 className="mb-3 h3">Before You Enroll</h2>
                <QuestionAndAnswer heading="Is QC an accredited online design school?">
                  <p>Yes! QC Design School is accredited by the Better Business Bureau (BBB), holding the highest possible consumer rating (A+) and a positive 100% consumer ranking. QC has been in business since 1984 and has a superb track record with students and customers. QC Design School is also recognized internationally by a wide variety of associations in the design industry.</p>
                </QuestionAndAnswer>
                <QuestionAndAnswer heading="Do I need prior training or experience before taking QC's online courses?">
                  <p>No, you do not need any previous experience in the design industry to succeed in QC's design courses! Whatever career path you choose, QC's courses will teach you everything you need to know, from the fundamentals to advanced techniques, in order to become a qualified design professional.</p>
                </QuestionAndAnswer>
                <QuestionAndAnswer heading="What if I decide QC's design course is not for me?">
                  <p>Once you enroll with QC, you have 21 days to decide if you would like to continue with your online design training. If, for any reason, you decide that the course isn't for you, simply contact QC Design School for a refund of your tuition.</p>
                </QuestionAndAnswer>
                <QuestionAndAnswer heading="Are flexible payment plans available with each course?">
                  <p>Yes! QC Design School offers flexible extended monthly installment plans that will suit most budgets. You can pay your tuition in monthly payments over one year. If you choose to pay your tuition on an installment plan, you'll have the option to choose the date your payments are processed, adding another level of convenience unique to QC.</p>
                </QuestionAndAnswer>
                {countryCode === 'CA' && (
                  <QuestionAndAnswer heading="Can I claim my course tuition on my taxes?">
                    <p>Yes, and you could qualify to have over 50% of your course fees covered! QC is a Certified Education Institution with Employment and Social Development Canada. <Link href="/canadian-tax-credits">Learn more about the Canadian tax credits here.</Link></p>
                  </QuestionAndAnswer>
                )}
              </div>

              <div className={styles.faqGroup} id="whileYouLearn">
                <h2 className="mb-3 h3">While You Learn</h2>
                <QuestionAndAnswer heading="Is it possible to learn about home design online?">
                  <p>Absolutely! As a QC student, you'll receive the tools you need to develop your skills and knowledge in the design industry. You'll succeed through hands-on assignments and learn professional skills for real-world scenarios.</p>
                </QuestionAndAnswer>
                <QuestionAndAnswer heading="How long will it take to complete my online design class?">
                  <p>With QC Design School's online courses, you work entirely at your own pace and decide how much time per week you want to spend developing your skills. Typically, students who work on their assignments for a short period each week will complete their design course within four to six months. You have two full years to complete your design course, so you can schedule your online design training around your lifestyle!</p>
                </QuestionAndAnswer>
                <QuestionAndAnswer heading="What do I do if I get stuck on a design assignment?">
                  <p>If you have questions about your QC design course, you can contact your Student Advisors by phone, email, or Live Chat. The team will always be happy to answer your design questions or get answers from your tutor. You can also get help and advice from your peers in the QC Design School Virtual Community.</p>
                </QuestionAndAnswer>
                <QuestionAndAnswer heading="Are there any technology requirements to complete my design training online?">
                  <p>Yes, you will need:</p>
                  <ul>
                    <li>A desktop computer, tablet, or laptop</li>
                    <li>A digital camera or smartphone/tablet that is capable of taking photos</li>
                    <li>An up-to-date Internet browser</li>
                  </ul>
                </QuestionAndAnswer>
                <QuestionAndAnswer heading="Are there any items required to complete my design training online?">
                  <p>Many of our courses include practical, hands-on assignments that require industry-standard tools and art supplies. Specific items needed include:</p>
                  <ul>
                    <li>Scale ruler/Architect's scale</li>
                    <li>T-Square</li>
                    <li>Set squares</li>
                    <li>Color wheel</li>
                    <li>Furniture template (¼&Prime; scale)</li>
                    <li>Colored pencils or watercolors</li>
                    <li>Grid paper</li>
                    <li>White paper</li>
                    <li>Black art pen</li>
                    <li>Pencil and eraser</li>
                    <li>Fan deck (not required)</li>
                  </ul>
                </QuestionAndAnswer>
              </div>

              <div className={styles.faqGroup} id="afterYouGraduate">
                <h2 className="mb-3 h3">After You Graduate</h2>
                <QuestionAndAnswer heading="Will I be eligible to join a professional association and/or organization upon graduation from QC Design School?">
                  <p>Yes! Each association usually has its own application process and fees, so it is recommended that you visit the specific association's website. QC Design School is recognized by several prominent associations.</p>
                </QuestionAndAnswer>
                <QuestionAndAnswer heading="Do I have to pay an annual fee to QC or join an organization in order to keep my online design certification?">
                  <p>No. Unlike other online design programs, QC Design School recognizes your right to use your professional design certificate and designation free of charge, for life.</p>
                </QuestionAndAnswer>
                <QuestionAndAnswer heading="How will QC help me start my design career once I've finished the courses?">
                  <p>QC Design School hosts a variety of free career resources for students and graduates in the Online Student Center, including free online business training which prepares students to run their own home design businesses. You'll also have access to QC's Virtual Community, where you can network with other design professionals and access free webinars. You can always reach out to the Student Support Team for ongoing support and guidance.</p>
                </QuestionAndAnswer>
                <QuestionAndAnswer heading="If I take a QC design course, will I be able to start my own business?">
                  <p>Yes—QC's online design classes include complete business training. You'll learn how to set up and promote your design services, and you'll receive professional advice during and after your design course.</p>
                </QuestionAndAnswer>
              </div>

              <div className={styles.faqGroup} id="aboutQC">
                <h2 className="mb-3 h3">About QC Design School</h2>
                <QuestionAndAnswer heading="Will QC's online design courses give you the training and certification you need to become a design professional?">
                  <p>Absolutely! QC Design School equips you with the skills you need to launch your career through comprehensive course lessons to develop your design skills, and free business training included in each course. You'll graduate with all the skills you need to create beautiful design plans, work successfully with clients and launch a thriving business. Plus, you'll have an internationally recognized certification that sets you apart from the competition.</p>
                </QuestionAndAnswer>
                <QuestionAndAnswer heading="Does the tuition cover all costs of QC's design courses?">
                  <p>Yes, your design school tuition covers the cost of your online course lessons, videos, assignments and access to the Online Student Center. You'll also receive personal advice from your tutor, a working professional in the design industry. There are no additional fees once you graduate, and your professional designation and certification are yours to use throughout your career—no membership fees.</p>
                </QuestionAndAnswer>
                <QuestionAndAnswer heading="Do I need a certification or license to work as an interior decorator?">
                  <p>No, a license, degree, or certification is NOT required to work as an interior decorator. QC's certification course provides you with the necessary skills to work on interior decorating projects successfully. Once you graduate, your professional certification will help you stand out in the design industry. Your certification is yours to use for the rest of your career with no additional fees.</p>
                </QuestionAndAnswer>
                <QuestionAndAnswer heading="What's the difference between interior decorating and interior design?">
                  <p>Interior design is a highly regulated field requiring a degree, apprenticeship, and licensing. It involves technical knowledge and architectural elements. Interior decorating, on the other hand, does not require a license. As an interior decorator, you work with the existing structure of a space and focus on decorative elements. A professional certificate allows you to work as a decorator or start your own decorating business.</p>
                </QuestionAndAnswer>
              </div>
            </div>
          </div>
        </div>
      </section>
      <GetStartedSection
        title="Have Another Question?"
        text="Feel free to contact the school anytime to learn more about payment plans, career options for home designers, and studying online!"
        buttonText="Contact Us"
        buttonHref="/contact-us"
      />
    </div>
  );
};

export default FAQPage;
