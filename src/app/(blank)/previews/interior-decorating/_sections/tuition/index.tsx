import Image from 'next/image';
import type { FC } from 'react';

import KristianaImage from './kristiana.jpg';
import { PaymentPlanSection } from '@/components/paymentPlanSection';
import type { CourseCode } from '@/domain/courseCode';

const courseCodes: CourseCode[] = [ 'i2' ];

export const Tuition: FC = () => (
  <PaymentPlanSection
    id="tuition"
    courseCodes={courseCodes}
    className="bg-white"
    heading="Invest in Yourself"
    lead="Tuition & Payment Plans"
    sub="Investing in your education is a meaningful step toward building a rewarding career with strong earning potential. By developing valuable, in-demand skills today, you're opening doors to opportunities that will positively shape your future."
    blurb={(
      <div className="mt-5 text-center">
        <div className="mb-3">
          <Image src={KristianaImage} alt="Kristiana Stortenbecker" className="img-fluid" />
        </div>
        <p className="lead"><span className="fst-italic">&ldquo;I chose QC Design School because the program was affordable and allowed me to study at my own pace. I truly enjoyed learning the course material—it gave me a deeper understanding of what had already been a hobby of mine.&rdquo;</span>&mdash;Kristiana Stortenbecker, Interior Design & Staging for Designers</p>
      </div>
    )}
  />
);
