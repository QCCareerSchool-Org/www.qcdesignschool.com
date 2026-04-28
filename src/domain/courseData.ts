import type { CourseCode } from './courseCode';

interface CourseData {
  name: string;
  url: string;
  description: string;
  certification: string | undefined;
  subjects: string[] | undefined;
  workload: string | undefined;
}

const baseUrl = 'https://www.qcdesignschool.com';

export const dataMap: Readonly<Record<CourseCode, CourseData>> = {
  i2: {
    name: 'Interior Design Career Accelerator',
    url: `${baseUrl}/online-courses/interior-decorating`,
    description: 'Covers design fundamentals, styles, lighting, floorplans, a final project and business strategies to launch your career.',
    certification: 'International Design and Decorating Professional™',
    subjects: [
      'The Fundamentals of Design',
      'Popular Design Styles and Materials',
      'Lighting and Accessories',
      'Floorplans and Layouts',
      'Designing Room by Room',
      'Your Final Project',
      'The Business of Design',
    ],
    workload: '28 hours of assignments and 78 minutes of video, ususally completed over 4 to 6 months',
  },
  st: {
    name: 'Home Staging',
    url: `${baseUrl}/online-courses/home-staging`,
    description: 'Learn home staging and transform client spaces into buyer-ready showcases.',
    certification: 'International Staging and Redesign Professional™',
    subjects: [
      'The Fundamentals of Home Staging',
      'The Arts of Depersonalizing and Decluttering',
      'Features to Attract Buyers',
      'Floorplans and Layouts',
      'Your Final Project',
      'The Business of Staging',
    ],
    workload: '4 hours of assignments, 3 hours of reading, and 30 minutes of quizzes, ususally completed over 4 to 6 months',
  },
  ms: {
    name: 'Staging for Designers',
    url: `${baseUrl}/online-courses/staging-for-designers`,
    description: 'Expand your interior design skills by learning to stage homes for sale and offer professional home staging services.',
    certification: 'International Staging and Redesign Professional™',
    subjects: [
      'The Fundamentals of Home Staging',
      'The Arts of Depersonalizing and Decluttering',
      'Curb Appeal',
      'Your Final Project',
      'The Business of Staging',
    ],
    workload: '9 hours of reading and assignments, ususally completed over 4 to 6 months',
  },
  fs: {
    name: 'Feng Shui Design',
    url: `${baseUrl}/online-courses/feng-shui-design`,
    description: 'Learn to design harmonious spaces using feng shui principles and build a successful feng shui design business.',
    certification: 'Advanced Feng Shui Design Professional™',
    subjects: [
      'The Fundamentals Concepts of Feng Shui',
      'The Bagua Map and Floor Plans',
      'Feng Shui Cures and Symbols',
      'Applying Design Theory to Feng Shui',
      'Feng Shui in Private and Public Spaces',
      'The Business of Feng Shui',
    ],
    workload: '11 hours of assignments, 4 hours of reading, and 4 hours of video, ususally completed over 4 to 6 months',
  },
  po: {
    name: 'Professional Organizing',
    url: `${baseUrl}/online-courses/professional-organizing`,
    description: 'Learn to organize homes and offices, create functional layouts, and build a successful professional organizing business.',
    certification: 'International Landscape Design Professional™',
    subjects: [
      'Introduction to Professional Organizing',
      'Floorplans and Layouts',
      'Essential Storage Solutions and Decluttering',
      'Working with Clients',
      'The Business of Professional Organizing',
    ],
    workload: '10 hours of reading and assignments, ususally completed over 4 to 6 months',
  },
  ed: {
    name: 'Event Decor',
    url: `${baseUrl}/online-courses/event-decor`,
    description: 'Learn to design cohesive event layouts with themes, color schemes, and decor elements.',
    certification: 'International Event Decorating Professional™',
    subjects: [
      'Introduction to Event Decor',
      'Components of Event Decor',
      'Build Your Career in Event Decor',
    ],
    workload: 'usually completed over 4 to 6 months',
  },
  ld: {
    name: 'Landscape Design',
    url: `${baseUrl}/online-courses/landscape-design`,
    description: 'Learn how to create stunning garden designs and outdoor design concepts.',
    certification: 'International Landscape Design Professional™',
    subjects: [
      'Introduction to Landscape Design',
      'Functional Landscape Design',
      'Plants and Garden Design',
      'The Principles and Elements of Design',
      'The Business of Landscape Design',
    ],
    workload: '5 hours of assignments, 6 hours of reading, 3 hours of video, and 72 minutes of quizzes, ususally completed over 4 to 6 months',
  },
  cc: {
    name: 'Color Consultant',
    url: `${baseUrl}/online-courses/color-consultant`,
    description: 'Learn to design custom interiors, master color theory, and build a successful color consulting business.',
    certification: 'International Color Consulting Professional™',
    subjects: [
      'Becoming a Color Consultant',
      'Creating a Color Palette',
      'Color Consulting Services',
    ],
    workload: 'usually completed over 4 to 6 months',

  },
  fd: {
    name: 'Floral Design',
    url: `${baseUrl}/online-courses/floral-design`,
    description: 'Learn to create stunning floral arrangements, master plant care and flower selection.',
    certification: 'International Floral Design Professional™',
    subjects: [
      'The Floral Design Industry',
      'The Fundamentals of Floral Design',
      'Decorative Arrangements',
      'Flowers to Wear & Carry',
      'Advanced Floral Designs',
      'Running Your Floral Design Business',
    ],
    workload: 'usually completed over 4 to 6 months',
  },
  ap: {
    name: 'Aging in Place',
    url: `${baseUrl}/online-courses/aging-in-place`,
    description: 'Learn to design safe, functional spaces for aging clients and address mobility and lifestyle needs.',
    certification: 'Aging in Place Professional™',
    subjects: [
      'Introduction to Aging in Place Design',
      'Applying Universal Design Principles',
      'Final Project',
    ],
    workload: 'usually completed over 4 to 6 months',
  },
  db: {
    name: 'Accelerate Your Design Business',
    url: `${baseUrl}/online-courses/accelerate-your-design-business`,
    description: 'Learn to build your brand, attract clients, manage design projects effectively, and create a professional portfolio to grow your business.',
    certification: undefined,
    subjects: [
      'Establish Your Brand and Business Goals',
      'Build an Online Presence',
      'Showcase Your Business to Prospective Clients',
      'Successful Project Management',
    ],
    workload: '4 hours of assignments, 3 hours of reading, and 30 minutes of quizzes, ususally completed over 4 to 6 months',
  },
  vd: {
    name: 'Virtual Design',
    url: `${baseUrl}/online-courses/virtual-design`,
    description: 'Learn to offer professional online design services, connect with clients worldwide, and build a thriving virtual design business.',
    certification: undefined,
    subjects: undefined,
    workload: 'usually completed over 4 to 6 months',
  },
};
