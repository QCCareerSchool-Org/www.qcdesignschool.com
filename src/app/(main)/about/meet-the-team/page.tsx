import type { Metadata } from 'next';

import { employees } from './data';
import { EmployeeColumn } from './employeeColumn';
import type { PageComponent } from '@/app/serverComponent';
import { GetStartedSection } from '@/components/getStartedSection';
import { GoogleReviewSection } from '@/components/googleReviewSection';

export const metadata: Metadata = {
  title: 'Meet the Team - QC Design School',
};

const MeetTheTeamPage: PageComponent = () => {
  const employeePairs = employees.flatMap(mapToPairs);

  return (
    <>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xxl-9 text-center">
              <h1 className="mb-4">Meet the Team<br />Behind Your Success</h1>
              <p className="mb-0">Our dedicated team at QC Career School is here to guide you every step of the way. From our innovative executive team to our supportive student services and teaching assistants, we are committed to making your learning experience seamless and effective. Discover the leaders who bring expertise and passion to your education.</p>
            </div>
          </div>
        </div>
      </section>
      {employeePairs.map(([ employee1, employee2 ], i) => (
        <section key={i} className={i % 2 === 0 ? 'bg-light' : undefined}>
          <div className="container">
            <div className="row g-s">
              <EmployeeColumn {...employee1} />
              {employee2 && <EmployeeColumn {...employee2} />}
            </div>
          </div>
        </section>
      ))}
      <GoogleReviewSection className={employeePairs.length % 2 === 0 ? 'bg-light' : undefined} />
      <GetStartedSection title="Get Started Today" text="Unlock your potential and the step towards a rewarding career. Enroll now and join thousands of students who\'ve turned their passion into success." />
    </>
  );
};

/**
 * A flatMap callback function that turns an array [ a, b, c, d, e ] into an array of pairs of elements [ [ a, b ], [ c, d ], [ e ] ]
 * @param value the current element
 * @param index the index
 * @param array the entire array
 * @returns the next pair
 */
// eslint-disable-next-line @typescript-eslint/comma-dangle
const mapToPairs = <T,>(value: T, index: number, array: T[]): T[][] => {
  // skip odd elements
  if (index % 2 !== 0) {
    return [];
  }
  // include this element in the pair
  const nextElement = [ value ];
  // include the next element if it exists
  if (typeof array[index + 1] !== 'undefined') {
    nextElement.push(array[index + 1]);
  }
  return [ nextElement ];
};

export default MeetTheTeamPage;
