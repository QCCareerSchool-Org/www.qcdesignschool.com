import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import styles from './index.module.scss';
import Part1Image from './roadmap-step-1.jpg';
import Part2Image from './roadmap-step-2.jpg';
import Part3Image from './roadmap-step-3.jpg';
import Part4Image from './roadmap-step-4.jpg';
import Part5Image from './roadmap-step-5.jpg';

interface Props {
  designRestricted: boolean;
}

export const RoadmapSection: FC<Props> = ({ designRestricted }) => {
  const courseTypeLower = designRestricted ? 'decorating' : 'design';

  return (
    <section className="bg-light">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 col-lg-10 col-xl-8">
            <h2>Your Roadmap to a Profitable Design Career</h2>
            <p className="lead fw-semibold mb-3">How QC Takes You From a Design Enthusiast to a Client-Ready Professional</p>
            <p className="mb-3">This isn't just a course&mdash;it's a step-by-step career accelerator designed to take you from learning design fundamentals to working with real clients. Through interactive lessons, video tutorials, hands-on assignments, and client-ready tools, you'll build real skills, create professional work, and confidently launch your interior {courseTypeLower} business.</p>
            <p className="fw-semibold mb-0">Every phase builds toward one goal: helping you confidently launch and grow your interior {courseTypeLower} business.</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-xl-11">
            {roadmapSteps.map((step, index) => (
              <div className={styles.step} key={step.title}>
                <div className={styles.node}>{index + 1}</div>
                <div className="overflow-hidden border rounded-3 bg-white shadow-sm">
                  <div className="row g-0">
                    <div className="col-12 col-md-5">
                      <div className={`h-100 ${styles.imageWrap}`}>
                        <Image src={step.image} alt="" fill sizes="(min-width: 1200px) 430px, (min-width: 768px) 40vw, 100vw" className={styles.image} />
                      </div>
                    </div>
                    <div className="col-12 col-md-7">
                      <div className="d-flex h-100 flex-column p-4 p-lg-5">
                        <p className={`${styles.stepLabel} mb-2`}>{step.step}</p>
                        <h3 className="h4 mb-2">{step.title}</h3>
                        <p className="fw-semibold mb-3">{step.subtitle}</p>
                        <p>{step.description}</p>
                        <div className="mb-4">
                          <p className="small fw-bold text-uppercase mb-3">{step.guidanceLabel}</p>
                          <ul className={`${styles.bulletList} mb-0`}>
                            {step.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}
                          </ul>
                        </div>
                        <div className={`${styles.outcome} mt-auto p-4`}>
                          <p className="small fw-bold text-primary text-uppercase mb-2">Outcome</p>
                          {step.outcome.length === 1 ? (
                            <p className="fw-semibold mb-0">{formatRoadmapText(step.outcome[0], courseTypeLower)}</p>
                          ) : (
                            <ul className={`${styles.bulletList} mb-0`}>
                              {step.outcome.map(outcome => <li key={outcome}>{formatRoadmapText(outcome, courseTypeLower)}</li>)}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {index < roadmapSteps.length - 1 && <div className={styles.connector} aria-hidden="true" />}
              </div>
            ))}
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-lg-8">
            <div className="border rounded-3 bg-white p-4 p-md-5 text-center shadow-sm">
              <h3 className="h4 mb-3">Have Questions? Speak with a Career Advisor.</h3>
              <p className="mb-4">Our dedicated team is here to provide the guidance you need to launch your firm. Your professional success is our priority&mdash;reach out today.</p>
              <Link href="/contact-us" className="btn btn-primary btn-lg rounded-pill px-4">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface RoadmapStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  guidanceLabel: string;
  bullets: string[];
  outcome: string[];
  image: StaticImageData;
}

const roadmapSteps: RoadmapStep[] = [
  {
    step: 'Step 1',
    title: 'Build a Strong Foundation for Your Design Career',
    subtitle: 'Start thinking and working like a professional.',
    description: 'Through interactive lessons and practical exercises, you\'ll master design principles, color and style while learning how to manage a project from consultation to final reveal.',
    guidanceLabel: 'With comprehensive lessons and 1-on-1 mentor feedback, you\'ll:',
    bullets: [
      'Refine your design concepts with professional critique',
      'Learn to present and justify your decisions with confidence',
    ],
    outcome: [
      'A strong design foundation and the ability to guide clients through a professional [courseType] project.',
    ],
    image: Part1Image,
  },
  {
    step: 'Step 2',
    title: 'Master Space Planning & Layouts with Confidence',
    subtitle: 'Turn your ideas into functional, client-ready plans.',
    description: 'Follow step-by-step tutorials, complete hands-on assignments, and apply expert feedback to measure, draft, and plan spaces with precision, laying the foundation to confidently use design software and AI tools.',
    guidanceLabel: 'Through mentor-reviewed projects, you\'ll:',
    bullets: [
      'Create scaled floor plans and furniture layouts',
      'Translate concepts into polished visual presentations',
    ],
    outcome: [
      'The ability to produce professional layouts that clients and contractors can confidently execute.',
    ],
    image: Part2Image,
  },
  {
    step: 'Step 3',
    title: 'Curate Professional Materials, Finishes & Styling',
    subtitle: 'Design elevated spaces your clients will love and pay for.',
    description: 'Through interactive training and real-world assignments, you\'ll develop your eye for sourcing, finishes, and lighting.',
    guidanceLabel: 'With expert guidance, you\'ll:',
    bullets: [
      'Select materials, textiles, and lighting with purpose',
      'Build sourcing plans that balance style, function, and budget',
    ],
    outcome: [
      'The confidence to make professional design decisions that elevate your work beyond DIY.',
    ],
    image: Part3Image,
  },
  {
    step: 'Step 4',
    title: 'Launch Your Design Business',
    subtitle: 'Build a successful design business that generates real income.',
    description: 'Follow a step-by-step roadmap to position your brand, attract clients, and start booking paid projects.',
    guidanceLabel: 'You\'ll get:',
    bullets: [
      'Complimentary business training, marketing strategies, and pricing guidance',
      'Ready-to-use templates and tools to streamline your workflow',
      'Access to professional design software to level-up your client workflow',
    ],
    outcome: [
      'A clear, actionable plan and the infrastructure to launch your interior [courseType] business.',
    ],
    image: Part4Image,
  },
  {
    step: 'Step 5',
    title: 'Create Your Portfolio & Earn Your Professional Designation',
    subtitle: 'Graduate with proof of your skills and the confidence to sell them.',
    description: 'Complete a final project that showcases your expertise through a fully developed design concept.',
    guidanceLabel: 'With final mentor review, you\'ll:',
    bullets: [
      'Refine your work to meet professional standards',
      'Build a portfolio piece you can use to attract clients',
    ],
    outcome: [
      'A polished, portfolio-ready project',
      'Your International Design and Decorating Professional (IDDP) certification',
      'The confidence to start working with clients immediately',
    ],
    image: Part5Image,
  },
];

const formatRoadmapText = (text: string, courseTypeLower: string): string => text.replaceAll('[courseType]', courseTypeLower);
