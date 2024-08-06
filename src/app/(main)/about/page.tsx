import Image from 'next/image';

import type { PageComponent } from '@/app/serverComponent';
import HowYoullLearnImage from '@/images/how-youll-learn.jpg';

const AboutPage: PageComponent = () => (
  <>
    <section>
      <div className="container">
        <Image src={HowYoullLearnImage} alt="" />
      </div>
    </section>
  </>
);

export default AboutPage;
