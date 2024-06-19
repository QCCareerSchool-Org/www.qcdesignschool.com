import type { Metadata } from 'next';

import type { PageComponent } from '@/app/serverComponent';

export const metadata: Metadata = {
  title: 'Interior Decorating Course',
};

const InteriorDecoratingPage: PageComponent = () => (
  <>
    <section>
      <div className="container">
        <h1>Interior Decorating Course</h1>
      </div>
    </section>
  </>
);

export default InteriorDecoratingPage;
