export type CourseCode = 'i2' | 'st' | 'ms' | 'fs' | 'po' | 'ld' | 'ed' | 'cc' | 'fd' | 'ap' | 'db' | 'vd';

export const courseCodes = [ 'i2', 'st', 'ms', 'fs', 'po', 'ld', 'ed', 'cc', 'fd', 'ap', 'db', 'vd' ] as const;

export const isCourseCode = (obj: unknown): obj is CourseCode => {
  return typeof obj === 'string' && [ 'i2', 'st', 'ms', 'fs', 'po', 'ld', 'ed', 'cc', 'fd', 'ap', 'db', 'vd' ].includes(obj);
};

const descriptions: Record<CourseCode, string> = {
  i2: 'Covers design fundamentals, styles, lighting, floorplans, a final project and business strategies to launch your career.',
  st: 'Learn home staging and transform client spaces into buyer-ready showcases.',
  ms: 'Expand your interior design skills by learning to stage homes for sale and offer professional home staging services.',
  fs: 'Learn to design harmonious spaces using feng shui principles and build a successful feng shui design business.',
  po: 'Learn to organize homes and offices, create functional layouts, and build a successful professional organizing business.',
  ld: 'Learn how to create stunning garden designs and outdoor design concepts.',
  ed: 'Learn to design cohesive event layouts with themes, color schemes, and decor elements.',
  cc: 'Learn to design custom interiors, master color theory, and build a successful color consulting business.',
  fd: 'Learn to create stunning floral arrangements, master plant care and flower selection.',
  ap: 'Learn to design safe, functional spaces for aging clients and address mobility and lifestyle needs.',
  db: 'Learn to build your brand, attract clients, manage design projects effectively, and create a professional portfolio to grow your business.',
  vd: 'Learn to offer professional online design services, connect with clients worldwide, and build a thriving virtual design business.',
};

const certifications: Partial<Record<CourseCode, string>> = {
  i2: 'International Design and Decorating Professional™',
  st: 'International Staging and Redesign Professional™',
  fs: 'Advanced Feng Shui Design Professional™',
  po: 'Advanced International Organizing Professional™',
  ld: 'International Landscape Design Professional™',
  ed: 'International Event Decorating Professional™',
  cc: 'International Color Consulting Professional™',
  fd: 'International Floral Design Professional™',
  ap: 'Aging in Place Professional™',
};

const subjects: Partial<Record<CourseCode, string[]>> = {
  i2: [
    'The Fundamentals of Design',
    'Popular Design Styles and Materials',
    'Lighting and Accessories',
    'Floorplans and Layouts',
    'Designing Room by Room',
    'Your Final Project',
    'The Business of Design',
  ],
  st: [
    'The Fundamentals of Home Staging',
    'The Arts of Depersonalizing and Decluttering',
    'Features to Attract Buyers',
    'Floorplans and Layouts',
    'Your Final Project',
    'The Business of Staging',
  ],
  ms: [
    'The Fundamentals of Home Staging',
    'The Arts of Depersonalizing and Decluttering',
    'Curb Appeal',
    'Your Final Project',
    'The Business of Staging',
  ],
  fs: [
    'The Fundamentals Concepts of Feng Shui',
    'The Bagua Map and Floor Plans',
    'Feng Shui Cures and Symbols',
    'Applying Design Theory to Feng Shui',
    'Feng Shui in Private and Public Spaces',
    'The Business of Feng Shui',
  ],
  po: [
    'Introduction to Professional Organizing',
    'Floorplans and Layouts',
    'Essential Storage Solutions and Decluttering',
    'Working with Clients',
    'The Business of Professional Organizing',
  ],
  ld: [
    'Introduction to Landscape Design',
    'Functional Landscape Design',
    'Plants and Garden Design',
    'The Principles and Elements of Design',
    'The Business of Landscape Design',
  ],
  ed: [
    'Introduction to Event Decor',
    'Components of Event Decor',
    'Build Your Career in Event Decor',
  ],
  cc: [
    'Becoming a Color Consultant',
    'Creating a Color Palette',
    'Color Consulting Services',
  ],
  fd: [
    'The Floral Design Industry',
    'The Fundamentals of Floral Design',
    'Decorative Arrangements',
    'Flowers to Wear & Carry',
    'Advanced Floral Designs',
    'Running Your Floral Design Business',
  ],
  ap: [
    'Introduction to Aging in Place Design',
    'Applying Universal Design Principles',
    'Final Project',
  ],
  db: [
    'Establish Your Brand and Business Goals',
    'Build an Online Presence',
    'Showcase Your Business to Prospective Clients',
    'Successful Project Management',
  ],
};

const workloads: Record<CourseCode, string> = {
  i2: 'PT30H',
  st: 'PT30H',
  ms: 'PT30H',
  fs: 'PT30H',
  po: 'PT30H',
  ld: 'PT30H',
  ed: 'PT30H',
  cc: 'PT30H',
  fd: 'PT30H',
  ap: 'PT30H',
  db: 'PT30H',
  vd: 'PT30H',
};

export const getCourseDescription = (courseCode: CourseCode): string => {
  return descriptions[courseCode];
};

export const getCourseSubjects = (courseCode: CourseCode): string[] | null => {
  return subjects[courseCode] ?? null;
};

export const getCourseWorkload = (courseCode: CourseCode): string => {
  return workloads[courseCode];
};

export const getCourseCertificate = (courseCode: CourseCode): string | null => {
  return certifications[courseCode] ?? null;
};

export const getCourseName = (courseCode: CourseCode): string => {
  switch (courseCode) {
    case 'i2':
      return 'Interior Design & Decorating';
    case 'st':
      return 'Home Staging';
    case 'ms':
      return 'Staging for Designers';
    case 'fs':
      return 'Feng Shui Design';
    case 'po':
      return 'Professional Organizing';
    case 'ed':
      return 'Event Decor';
    case 'ld':
      return 'Landscape Design';
    case 'cc':
      return 'Color Consultant';
    case 'fd':
      return 'Floral Design';
    case 'ap':
      return 'Aging in Place';
    case 'db':
      return 'Accelerate Your Design Business';
    case 'vd':
      return 'Virtual Design';
  }
};

export const getCourseUrl = (courseCode: CourseCode): string => {
  const baseUrl = 'https://www.qcdesignschool.com';
  switch (courseCode) {
    case 'i2':
      return `${baseUrl}/online-courses/interior-decorating`;
    case 'st':
      return `${baseUrl}/online-courses/home-staging`;
    case 'ms':
      return `${baseUrl}/online-courses/staging-for-designers`;
    case 'fs':
      return `${baseUrl}/online-courses/feng-shui-design`;
    case 'po':
      return `${baseUrl}/online-courses/professional-organizing`;
    case 'ed':
      return `${baseUrl}/online-courses/event-decor`;
    case 'ld':
      return `${baseUrl}/online-courses/landscape-design`;
    case 'cc':
      return `${baseUrl}/online-courses/color-consultant`;
    case 'fd':
      return `${baseUrl}/online-courses/floral-design`;
    case 'ap':
      return `${baseUrl}/online-courses/aging-in-place`;
    case 'db':
      return `${baseUrl}/online-courses/accelerate-your-design-business`;
    case 'vd':
      return `${baseUrl}/online-courses/virtual-design`;
  }
};
