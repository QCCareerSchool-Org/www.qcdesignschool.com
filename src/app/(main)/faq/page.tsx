import type { Metadata } from 'next';

import styles from './page.module.scss';
import type { PageComponent } from '@/app/serverComponent';
import { GetStartedSection } from '@/components/getStartedSection';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: "Explore FAQs and discover how QC Design School's accredited online design courses equip you with the skills to become a certified design professional!",
};

const FAQPage: PageComponent = () => (
  <>
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
              <h3 className="h5">Is QC an accredited online design school?</h3>
              <p>Yes! QC Design School is accredited by the Better Business Bureau (BBB), holding the highest possible consumer rating (A+) and a positive 100% consumer ranking. QC has been in business since 1984 and has a superb track record with students and customers. QC Design School is also recognized internationally by a wide variety of associations in the design industry.</p>
              <h3 className="h5">Do I need prior training or experience before taking QC's online courses?</h3>
              <p>No, you do not need any previous experience in the design industry to succeed in QC's design courses! Whatever career path you choose, QC's courses will teach you everything you need to know, from the fundamentals to advanced techniques, in order to become a qualified design professional.</p>
              <h3 className="h5">What if I decide QC's design course is not for me?</h3>
              <p>Once you enroll with QC, you have 21 days to decide if you would like to continue with your online design training. If, for any reason, you decide that the course isn't for you, simply contact QC Design School for a refund of your tuition.</p>
              <h3 className="h5">Are flexible payment plans available with each course?</h3>
              <p>Yes! QC Design School offers flexible extended monthly installment plans that will suit most budgets. You can pay your tuition in monthly payments over one year. If you choose to pay your tuition on an installment plan, you'll have the option to choose the date your payments are processed, adding another level of convenience unique to QC.</p>
              <h3 className="h5">Can I claim my course tuition on my taxes?</h3>
              <p>Yes, and you could qualify to have over 50% of your course fees covered! QC is a Certified Education Institution with Employment and Social Development Canada.</p>
            </div>

            <div className={styles.faqGroup} id="whileYouLearn">
              <h2 className="mb-3 h3">While You Learn</h2>
              <h3 className="h5">Is it possible to learn about home design online?</h3>
              <p>Absolutely! As a QC student, you'll receive the tools you need to develop your skills and knowledge in the design industry. You'll succeed through hands-on assignments and learn professional skills for real-world scenarios.</p>
              <h3 className="h5">How long will it take to complete my online design class?</h3>
              <p>With QC Design School's online courses, you work entirely at your own pace and decide how much time per week you want to spend developing your skills. Typically, students who work on their assignments for a short period each week will complete their design course within four to six months. You have two full years to complete your design course, so you can schedule your online design training around your lifestyle!</p>
              <h3 className="h5">What do I do if I get stuck on a design assignment?</h3>
              <p>If you have questions about your QC design course, you can contact your Student Advisors by phone, email, or Live Chat. The team will always be happy to answer your design questions or get answers from your tutor. You can also get help and advice from your peers in the QC Design School Virtual Community.</p>
              <h3 className="h5">Are there any technology requirements to complete my design training online?</h3>
              <p>Yes, you will need:</p>
              <ul>
                <li>A desktop computer, tablet, or laptop</li>
                <li>A digital camera or smartphone/tablet that is capable of taking photos</li>
                <li>An up-to-date Internet browser</li>
              </ul>
              <h3 className="h5">Are there any items required to complete my design training online?</h3>
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
            </div>

            <div className={styles.faqGroup} id="afterYouGraduate">
              <h2 className="mb-3 h3">After You Graduate</h2>
              <h3 className="h5">Will I be eligible to join a professional association and/or organization upon graduation from QC Design School?</h3>
              <p>Yes! Each association usually has its own application process and fees, so it is recommended that you visit the specific association's website. QC Design School is recognized by several prominent associations.</p>
              <h3 className="h5">Do I have to pay an annual fee to QC or join an organization in order to keep my online design certification?</h3>
              <p>No. Unlike other online design programs, QC Design School recognizes your right to use your professional design certificate and designation free of charge, for life.</p>
              <h3 className="h5">How will QC help me start my design career once I've finished the courses?</h3>
              <p>QC Design School hosts a variety of free career resources for students and graduates in the Online Student Center, including free online business training which prepares students to run their own home design businesses. You'll also have access to QC's Virtual Community, where you can network with other design professionals and access free webinars. You can always reach out to the Student Support Team for ongoing support and guidance.</p>
              <h3 className="h5">If I take a QC design course, will I be able to start my own business?</h3>
              <p>Yes—QC's online design classes include complete business training. You'll learn how to set up and promote your design services, and you'll receive professional advice during and after your design course.</p>
            </div>

            <div className={styles.faqGroup} id="aboutQC">
              <h2 className="mb-3 h3">About QC Design School</h2>
              <h3 className="h5">Will QC's online design courses give you the training and certification you need to become a design professional?</h3>
              <p>Absolutely! QC Design School equips you with the skills you need to launch your career through comprehensive course lessons to develop your design skills, and free business training included in each course. You'll graduate with all the skills you need to create beautiful design plans, work successfully with clients and launch a thriving business. Plus, you'll have an internationally recognized certification that sets you apart from the competition.</p>
              <h3 className="h5">Does the tuition cover all costs of QC's design courses?</h3>
              <p>Yes, your design school tuition covers the cost of your online course lessons, videos, assignments and access to the Online Student Center. You'll also receive personal advice from your tutor, a working professional in the design industry. There are no additional fees once you graduate, and your professional designation and certification are yours to use throughout your career—no membership fees.</p>
              <h3 className="h5">Do I need a certification or license to work as an interior decorator?</h3>
              <p>No, a license, degree, or certification is NOT required to work as an interior decorator. QC's certification course provides you with the necessary skills to work on interior decorating projects successfully. Once you graduate, your professional certification will help you stand out in the design industry. Your certification is yours to use for the rest of your career with no additional fees.</p>
              <h3 className="h5">What's the difference between interior decorating and interior design?</h3>
              <p>Interior design is a highly regulated field requiring a degree, apprenticeship, and licensing. It involves technical knowledge and architectural elements. Interior decorating, on the other hand, does not require a license. As an interior decorator, you work with the existing structure of a space and focus on decorative elements. A professional certificate allows you to work as a decorator or start your own decorating business.</p>
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
  </>
);

export default FAQPage;
