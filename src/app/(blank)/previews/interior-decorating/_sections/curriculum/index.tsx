'use client';

import Image from 'next/image';
import type { FC, MouseEventHandler } from 'react';
import { useRef, useState } from 'react';
import { Accordion, Modal } from 'react-bootstrap';

import Part1Image from './part-1.jpg';
import Part2Image from './part-2.jpg';
import Part5Image from './part-5.jpg';
import Part7Image from './part-7.jpg';

const part3Src = 'https://51d9ccad7be11d8ada71-aeafba698c87c1173d616904e85b2e3e.ssl.cf1.rackcdn.com/part%203-clip.mp4';
const part4Src = 'https://51d9ccad7be11d8ada71-aeafba698c87c1173d616904e85b2e3e.ssl.cf1.rackcdn.com/part-4-clip.mp4';

type Props = {
  designRestricted: boolean;
};

export const Curriculum: FC<Props> = ({ designRestricted }) => {
  const [ popup, setPopup ] = useState<1 | 2 | 3 | 4 | 5 | 6 | 7 | undefined>();
  const part3Ref = useRef<HTMLVideoElement>(null);
  const part4Ref = useRef<HTMLVideoElement>(null);

  const handleClick1: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    setPopup(1);
  };

  const handleClick2: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    setPopup(2);
  };

  const handleClick3: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    setPopup(3);
    setTimeout(() => {
      void part3Ref.current?.play();
    }, 300);
  };

  const handleClick4: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    setPopup(4);
    setTimeout(() => {
      void part4Ref.current?.play();
    }, 300);
  };

  const handleClick5: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    setPopup(5);
  };

  const handleClick7: MouseEventHandler<HTMLAnchorElement> = e => {
    e.preventDefault();
    setPopup(7);
  };

  const handleClose = (): void => {
    setPopup(undefined);
    void part3Ref.current?.pause();
    void part4Ref.current?.pause();
  };

  return (
    <section id="curriculum">
      <div className="container text-center">
        <p className="lead mb-3">Step Inside Your Course</p>
        <h2 className="mb-5">An Interactive Preview of What You'll Learn</h2>
        <Accordion defaultActiveKey="0" className="text-start">
          <Accordion.Item eventKey="0">
            <Accordion.Header><span className="lead">Part 1: Discover the World of Interior {designRestricted ? 'Decorating' : 'Design'}</span></Accordion.Header>
            <Accordion.Body>
              <p>4 lessons | 6 assignments</p>
              <p>Step into the world of interior design and decorating and discover what a professional designer really does—from meeting with clients to creating complete, polished design plans. You'll explore the many exciting career paths available to you and start imagining your own future in this dynamic, growing industry.</p>
              <p>To begin, you'll learn about color theory, get to know the most popular design styles, and build a solid foundation in design basics. Then, you'll jump into your first hands-on activity: analyzing real room photos to identify current design styles in action.</p>
              <a href="#" onClick={handleClick1}>Check out this Infographic from Working with Color</a>
              <Modal show={popup === 1} onHide={handleClose}>
                <Modal.Header closeButton><h4 className="h6 mb-0">Infographic</h4></Modal.Header>
                <Modal.Body>
                  <Image src={Part1Image} alt="" className="img-fluid" />
                </Modal.Body>
              </Modal>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header><span className="lead">Part 2: Work with Materials, Textiles, and Timeless Styles</span></Accordion.Header>
            <Accordion.Body>
              <p>7 lessons | 4 assignments</p>
              <p>Discover how the right materials can elevate a space from simple to truly stunning. In this unit, you'll get to know the most commonly used natural and synthetic materials in interior {designRestricted ? 'decorating' : 'design'}—like wood, stone, glass, metal, and more—and learn how to pair them with textiles and wall treatments to create rich, personalized interiors. You'll dive into classic, early American, and global design styles, and explore how these timeless influences can be reimagined for today's clients.</p>
              <p>In your assignments, you'll have the chance to showcase your creativity by adapting a historical style for a modern home, blending tradition with current trends to design a space that feels both timeless and fresh.</p>
              <a href="#" onClick={handleClick2}>Start thinking about what you would do with this assignment</a>
              <Modal show={popup === 2} onHide={handleClose}>
                <Modal.Header closeButton><h4 className="h6 mb-0">Assignment</h4></Modal.Header>
                <Modal.Body>
                  <Image src={Part2Image} alt="" className="img-fluid" />
                </Modal.Body>
              </Modal>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header><span className="lead">Part 3: Master Modern Design Styles and the Art of Decor</span></Accordion.Header>
            <Accordion.Body>
              <p>5 lessons | 4 assignments</p>
              <p>Discover how lighting, window treatments, and accessories can completely transform the look and feel of a space. With guidance from industry-leading designer and HGTV star Jane Lockhart, you'll learn through engaging instructional videos how to choose and style these finishing touches like a pro. Then, explore iconic design eras—from the bold looks of the early 20th century to the sleek styles of the early 2000s—and use what you've learned to create your own retro or vintage-inspired design.</p>
              <a href="#" onClick={handleClick3}>Learn from HGTV's Jane Lockhart in this video tutorial!</a>
              <Modal show={popup === 3} onHide={handleClose}>
                <Modal.Header closeButton><h4 className="h6 mb-0">Assignment</h4></Modal.Header>
                <Modal.Body>
                  <div className="ratio ratio-16x9">
                    <video ref={part3Ref} src={part3Src} controls preload="metadata" />
                  </div>
                </Modal.Body>
              </Modal>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header><span className="lead">Part 4: Bring Your Designs to Life with Professional Drawings</span></Accordion.Header>
            <Accordion.Body>
              <p>2 lessons | 4 assignments</p>
              <p>Learn one of the most essential skills in interior {designRestricted ? 'decorating' : 'design'}: bringing your ideas to life through professional drawings. In this unit, you'll discover how to create accurate, scaled floor plans and other key visuals using the tools and techniques decorators use every day. You'll also learn how to plan room layouts around focal points to create flow, balance, and visual impact.  Through hands-on assignments, you'll practice mapping out real spaces and creating layouts that are both beautiful and functional.</p>
              <a href="#" onClick={handleClick4}>Follow along with step-by-step video tutorials with expert designer, Angie Chapman.</a>
              <Modal show={popup === 4} onHide={handleClose}>
                <Modal.Header closeButton><h4 className="h6 mb-0">Assignment</h4></Modal.Header>
                <Modal.Body>
                  <div className="ratio ratio-16x9">
                    <video ref={part4Ref} src={part4Src} controls preload="metadata" />
                  </div>
                </Modal.Body>
              </Modal>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header><span className="lead">Part 5: Design Solutions for Everyday Spaces</span></Accordion.Header>
            <Accordion.Body>
              <p>4 lessons | 4 assignments</p>
              <p>Bedrooms, kitchens, and bathrooms each come with their own unique design challenges, and in this unit, you'll learn how to handle them with confidence. Discover how to balance layout, color, and style to create spaces that are not only beautiful but also comfortable and practical for everyday life.</p>
              <p>You'll work through real-world client scenarios that ask you to design thoughtful solutions tailored to each client's lifestyle and needs. From optimizing storage in a small bathroom to creating a relaxing bedroom retreat, you'll gain hands-on experience designing the rooms people use most.</p>
              <a href="#" onClick={handleClick5}>Take a look at this bedroom and think about what you would do to refresh your client's space!</a>
              <Modal show={popup === 5} onHide={handleClose}>
                <Modal.Header closeButton><h4 className="h6 mb-0">Assignment</h4></Modal.Header>
                <Modal.Body>
                  <Image src={Part5Image} alt="" className="img-fluid" />
                </Modal.Body>
              </Modal>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header><span className="lead">Part 6: Showcase Your Skills in a Client-Ready Project</span></Accordion.Header>
            <Accordion.Body>
              <p>8-Part Final Project</p>
              <p>Now's your chance to shine—with personalized guidance from your design mentor every step of the way. In your final project, you'll apply everything you've learned to create a complete, client-ready design presentation. From drafting a floor plan to choosing colors, textiles, furniture, finishes, and accessories, you'll bring your vision to life in a polished package.</p>
              <p>Your final project will be portfolio-worthy and professional—something you can proudly present to real clients.</p>
              <a target="_blank" rel="noreferrer" href="https://www.canva.com/design/DAGqPwg4C2k/ASWxFadLuMGQg78zOBT2zA/view">Put your skills to the test with a final project that's every bit as professional as what real clients expect.</a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header><span className="lead">Part 7: Launch Your Design Career with Confidence</span></Accordion.Header>
            <Accordion.Body>
              <p>5 lessons | 5 assignments</p>
              <p>This optional business unit provides essential, practical knowledge for those ready to transform their passion into a professional design career. You'll learn how to register your business, effectively market your services, collaborate with clients, and deliver polished, professional designs that stand out. Additionally, you'll gain insight into building a strong portfolio and networking with industry professionals—key steps for establishing yourself in the field.</p>
              <p>If you're here for personal enrichment, feel free to skip this section and focus on honing your creative design skills.</p>
              <a href="#" onClick={handleClick7}>Access invaluable resources and business templates to kickstart your career!</a>
              <Modal show={popup === 7} onHide={handleClose}>
                <Modal.Header closeButton><h4 className="h6 mb-0">Templates</h4></Modal.Header>
                <Modal.Body>
                  <Image src={Part7Image} alt="" className="img-fluid" />
                </Modal.Body>
              </Modal>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};
