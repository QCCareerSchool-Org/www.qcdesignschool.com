import type { FC } from 'react';

import BelindaImage from './belinda.jpg';
import DoxceenImage from './doxceen.jpg';
import KaseyImage from './kasey.jpg';
import { Testimonial } from './testimonial';

export const Testimonials: FC = () => {
  return (
    <div className="row g-5">
      <div className="col-12 col-lg-4">
        <Testimonial name="Belinda T." imageSrc={BelindaImage} quote="The day I was notified that I received my certification, I contacted Pottery Barn and was hired on the spot to work as an interior design stylist.">
          <p>My choosing QC Design School was decided by the curriculum and level of depth that was covered in the time frame of my course. The day I was notified that I received my certification, I contacted Pottery Barn and was hired on the spot to work as an interior design stylist. I currently work there part-time, working from blueprints, helping customers with renovations, swatches and furnishing entire homes. I also worked with architects to renovate boutique hotels. Everything I learned at QC, I put to use every time I go to work. I am now a proud business owner of Wow the Stage Interiors, LLC! Thank you, QC Design School, for everything!</p>
          <p>My favorite part about learning with QC Design School is the study materials they provide. I would look forward to each time I moved on to a new unit because I would get to see new pictures and diagrams and it was all so exciting to me. I must also give kudos to Angie, my tutor, who very thoroughly guided me with review of what I could do to improve and gave me motivation when I did well.</p>
          <p>Everyone I made contact with at QC were very helpful and incredibly courteous. That meant a great deal to me. They were prompt to reply and really supported me through everything from registering to answering questions about the course curriculum. They were all GREAT!</p>
        </Testimonial>
      </div>
      <div className="col-12 col-lg-4">
        <Testimonial name="Doxceen M." imageSrc={DoxceenImage} quote="There was never a moment I felt alone, because I knew that help was always a phone call away.">
          <p>My journey with QC Design School began in 2019 after the birth of my first child. I enrolled in the Interior Decorating and Home Staging for Designers course and instantly began to benefit from the convenience of being able to study online and pursue my passion and joy.</p>
          <p>There was never a moment I felt alone because I knew that help was always a phone call away. The student support at QC Design School are professional in their interactions, friendly, helpful and proactive - always seeking ways to provide you with the support you need.</p>
          <p>Since I have graduated from the Interior Decorating course I have improved my skills immensely and I have QC Design School to thank.</p>
          <p>Personally, I really enjoyed getting feedback from my tutor on my assignments and knowing that if I had a query, help was just a phone call away. The student center was particularly helpful.</p>
        </Testimonial>
      </div>
      <div className="col-12 col-lg-4">
        <Testimonial name="Kasey M." imageSrc={KaseyImage} quote="I was able to learn new techniques and create a more open mind when it came to furthering my career! I will forever be grateful for QC design!">
          <p>Ever since I was in high school I was always told I had an eye for interior design but life always caught up to me. One day I decided to make the big step and get my foot in the door and I stumbled upon QC design school. It was the best option for me with such an easy payment plan and stress free with being able to be at my own pace.</p>
          <p>Everything was super easy being a step by step course and the teachers/tutors always reached back in such a timely manner! I was able to learn new techniques and create a more open mind when it came to furthering my career! I will forever be grateful for QC design!</p>
        </Testimonial>
      </div>
    </div>
  );
};
