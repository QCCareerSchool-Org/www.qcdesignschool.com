import type { FC } from 'react';

import { QuestionAndAnswer } from '@/app/(main)/faq/questionAndAnswer';

export const FAQ: FC = () => {
  return (
    <section id="faq" className="bg-light">
      <div className="container">
        <p className="lead mb-3 text-center">Common Questions</p>
        <h2 className="mb-5 text-center">Frequently Asked Questions</h2>
        <div className="row justify-content-center g-4">
          <div className="col-12 col-md-10 col-lg-8">
            <QuestionAndAnswer heading="How long will the course take?">
              Our courses are completely self-paced! Most students graduate in as little as 2 to 6 months, but you can take up to 2 years to complete your studies.
            </QuestionAndAnswer>
          </div>
          <div className="col-12 col-md-10 col-lg-8">
            <QuestionAndAnswer heading="Do I need design software?">
              No, you don't need to purchase any design software to complete the course. All assignments can be done by hand or with free software options. However, if you'd like to explore design software, the course includes bonus lessons to help you get started, along with exclusive discounts so you can learn and practice using professional tools at your own pace.
            </QuestionAndAnswer>
          </div>
          <div className="col-12 col-md-10 col-lg-8">
            <QuestionAndAnswer heading="Is the IDDP™ certification recognized?">
              Yes! The IDDP™ certification is respected by employers and clients worldwide. It's backed by leading industry organizations, including the Designer Society of America (DSA) and the Decorators & Designers Association of Canada (DDA), giving you credibility wherever your career takes you.
            </QuestionAndAnswer>
          </div>
          <div className="col-12 col-md-10 col-lg-8">
            <QuestionAndAnswer heading="What if the course isn't for me?">
              No problem! If the course isn't right for you, you're protected by our 21-day money-back guarantee.
            </QuestionAndAnswer>
          </div>
        </div>
      </div>
    </section>
  );
};
