import type { Metadata } from 'next';
import Image from 'next/image';

import ChrisCircle from './images/chris_circle.png';
import DaveCircle from './images/dave_circle.png';
import FoundersImage from './images/founders.png';
import JoanneCircle from './images/joanne_circle.png';
import KaylaCircle from './images/kayla_circle.jpg';
import StudentSupportImage from './images/student_support.png';
import styles from './page.module.scss';
import type { PageComponent } from '@/app/serverComponent';
import ChatIcon from '@/components/icons/chat.svg';
import { ImageCircle } from '@/components/imageCircle';

const imageSize = 200;

export const metadata: Metadata = {
  title: 'Meet The Team - QC Design School',
};

const AboutPage: PageComponent = () => (
  <div className={styles.aboutPage}>
    <section>
      <div className="container">
        <h1 className="text-center mb-5">Meet The Team</h1>
        <div className="row align-items-center g-4 g-xl-s">
          <div className="col-12 col-lg-6">
            <h2 className="mb-3 h4">Visionaries Behind QC Career School's Legacy of Excellence</h2>
            <p>Our shared passion for empowering others through knowledge inspired us to start QC Career School in 1984. As trailblazers in distance education, we embarked on a journey to revolutionize traditional courses and shape the future of learning, one student at a time. Guided by an unwavering commitment to excellence, QC has now transformed the digital learning landscape through expertise in education, technology and business.</p>
            <strong className="text-black">David & Alex, Founders</strong>
          </div>
          <div className="col-12 col-lg-6">
            <Image src={FoundersImage} alt="" className={`${styles.foundersImage} img-fluid`} />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-md-10 col-lg-7">
            <h2>Meet Our Leaders</h2>
            <p className="lead mb-0">Our expert leadership team drives innovation, creating world-class online programs that empower students to excel globally.</p>
          </div>
        </div>
        <div className="row g-5 g-lg-s">
          <div className="col-12 col-lg-6">
            <div className="mb-3">
              <ImageCircle src={JoanneCircle} alt="Joanne, CEO" size={imageSize} imagePositionX={40} />
            </div>
            <h3 className="h4">Joanne, CEO</h3>
            <p className="mb-0">At QC, my team develops the systems that make your learning experience run seamlessly. We have created a custom online learning portal designed specifically to meet your needs as a QC student. When you log in to your course, you'll find everything you need right at your fingertips. You'll have access to interactive course lessons and videos, assignments, feedback from expert tutors, special discounts, and important account details. My job is to make sure your online experience is straightforward and enjoyable so that you can focus on your studies.</p>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mb-3">
              <ImageCircle src={KaylaCircle} alt="Kayla, COO" size={imageSize} imagePositionX={40} />
            </div>
            <h3 className="h4">Kayla, COO</h3>
            <p className="mb-0">I am dedicated to crafting an unparalleled online learning environment where every student can flourish. In my role as COO of QC Career School, my goal is to cultivate innovation and empower our team to provide a top-notch educational experience. Our team is committed to elevating the standard of online education across the industry, spanning from the quality of our course content to the effectiveness of our student support systems.</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-md-10 col-lg-7">
            <h2>Meet Our Course Development Team</h2>
            <p className="lead mb-0">Our dedicated course development team ensures QC's online learning experiences are engaging, innovative, and tailored to meet students' needs. With a focus on practical skills and cutting-edge trends, they design courses that empower learners to succeed in today's dynamic landscape.</p>
          </div>
        </div>
        <div className="row g-5 g-lg-s">
          <div className="col-12 col-lg-6">
            <div className="mb-3">
              <ImageCircle src={DaveCircle} alt="Dave, Director of IT and Development" size={imageSize} imagePositionX={40} />
            </div>
            <h3 className="h4">Dave, Director of IT and Development</h3>
            <p className="mb-0">At QC, my team develops the systems that make your learning experience run seamlessly. We have created a custom online learning portal designed specifically to meet your needs as a QC student. When you log in to your course, you'll find everything you need right at your fingertips. You'll have access to interactive course lessons and videos, assignments, feedback from expert tutors, special discounts, and important account details. My job is to make sure your online experience is straightforward and enjoyable so that you can focus on your studies.</p>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mb-3">
              <ImageCircle src={ChrisCircle} alt="Chris, Head of Course Design" size={imageSize} imagePositionX={40} />
            </div>
            <h3 className="h4">Chris, Head of Course Design</h3>
            <p className="mb-0">My #1 goal is to design a learning experience that works for you. Whether youre studying on a computer, tablet or smartphone, I want to ensure your experience is the best that it can be. My team continuously updates course materials to keep up with the latest technologies and trends. We design interactive course lessons complete with instructional videos and activities to create an engaging learning environment, as well as practical assignments aimed at developing your skills. I know Ive done my job well when youve completed your course, and had fun doing it!</p>
          </div>
        </div>
      </div>
    </section>
    <section className={`${styles.studentSupportSection} pb-lg-0 pt-0`}>
      <div className="container text-white">
        <div className="row align-items-center g-4 g-xl-s">
          <div className="col-12 col-lg-7">
            <Image src={StudentSupportImage} alt="" className={`img-fluid`} />
          </div>
          <div className="col-12 col-lg-5">
            <h2 className="mb-3 h4">Real Support. Real Answers. Every Step Forward.</h2>
            <p>Our expert team is here to help you select the right course, navigate your materials, and stay on track to reach your career goals. Available 7 days a week by phone, email, or live chat, we ensure you get the support you need—whether it's advice, troubleshooting, or planning your next step.</p>
            <button className="btn btn-primary">
              <span className="text-light">
                <ChatIcon height="16" className="me-3" style={{ position: 'relative', top: -1 }} />
              </span>
              <span className="d-none d-sm-inline">Talk to Us Today</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
