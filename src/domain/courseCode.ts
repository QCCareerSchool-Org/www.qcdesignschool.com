export const courseCodes = [ 'i2', 'st', 'ms', 'fs', 'po', 'ld', 'ed', 'cc', 'fd', 'ap', 'db', 'vd' ] as const;

export type CourseCode = typeof courseCodes[number];

const courseCodeSet = new Set<CourseCode>(courseCodes);

export const isCourseCode = (obj: unknown): obj is CourseCode => {
  return typeof obj === 'string' && courseCodeSet.has(obj as CourseCode);
};

const names = {
  i2: 'Interior Design & Decorating',
  st: 'Home Staging',
  ms: 'Staging for Designers',
  fs: 'Feng Shui Design',
  po: 'Professional Organizing',
  ed: 'Event Decor',
  ld: 'Landscape Design',
  cc: 'Color Consultant',
  fd: 'Floral Design',
  ap: 'Aging in Place',
  db: 'Accelerate Your Design Business',
  vd: 'Virtual Design',
} as const satisfies Readonly<Record<CourseCode, string>>;

const baseUrl = 'https://www.qcdesignschool.com';

const urls = {
  i2: `${baseUrl}/online-courses/interior-decorating`,
  st: `${baseUrl}/online-courses/home-staging`,
  ms: `${baseUrl}/online-courses/staging-for-designers`,
  fs: `${baseUrl}/online-courses/feng-shui-design`,
  po: `${baseUrl}/online-courses/professional-organizing`,
  ed: `${baseUrl}/online-courses/event-decor`,
  ld: `${baseUrl}/online-courses/landscape-design`,
  cc: `${baseUrl}/online-courses/color-consultant`,
  fd: `${baseUrl}/online-courses/floral-design`,
  ap: `${baseUrl}/online-courses/aging-in-place`,
  db: `${baseUrl}/online-courses/accelerate-your-design-business`,
  vd: `${baseUrl}/online-courses/virtual-design`,
} as const satisfies Readonly<Record<CourseCode, string>>;

const descriptions = {
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
} as const satisfies Readonly<Record<CourseCode, string>>;

const certifications = {
  i2: 'International Design and Decorating Professional™',
  st: 'International Staging and Redesign Professional™',
  ms: 'International Staging and Redesign Professional™',
  fs: 'Advanced Feng Shui Design Professional™',
  po: 'Advanced International Organizing Professional™',
  ld: 'International Landscape Design Professional™',
  ed: 'International Event Decorating Professional™',
  cc: 'International Color Consulting Professional™',
  fd: 'International Floral Design Professional™',
  ap: 'Aging in Place Professional™',
  db: undefined,
  vd: undefined,
} as const satisfies Readonly<Record<CourseCode, string | undefined>>;

const subjects = {
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
  vd: undefined,
} as const satisfies Readonly<Record<CourseCode, readonly string[] | undefined>>;

const workloads = {
  i2: '28 hours of assignments and 78 minutes of video, ususally completed over 4 to 6 months',
  st: '4 hours of assignments, 3 hours of reading, and 30 minutes of quizzes, ususally completed over 4 to 6 months',
  ms: '9 hours of reading and assignments, ususally completed over 4 to 6 months',
  fs: '11 hours of assignments, 4 hours of reading, and 4 hours of video, ususally completed over 4 to 6 months',
  po: '10 hours of reading and assignments, ususally completed over 4 to 6 months',
  ld: '5 hours of assignments, 6 hours of reading, 3 hours of video, and 72 minutes of quizzes, ususally completed over 4 to 6 months',
  ed: 'usually completed over 4 to 6 months',
  cc: 'usually completed over 4 to 6 months',
  fd: 'usually completed over 4 to 6 months',
  ap: 'usually completed over 4 to 6 months',
  db: '4 hours of assignments, 3 hours of reading, and 30 minutes of quizzes, ususally completed over 4 to 6 months',
  vd: 'usually completed over 4 to 6 months',
} as const satisfies Readonly<Record<CourseCode, string | undefined>>;

export const getCourseName = (c: CourseCode): string => {
  return names[c];
};

export const getCourseUrl = (c: CourseCode): string => {
  return urls[c];
};

export const getCourseDescription = (c: CourseCode): string | undefined => {
  return descriptions[c];
};

export const getCourseCertification = (c: CourseCode): string | undefined => {
  return certifications[c];
};

export const getCourseSubjects = (c: CourseCode): readonly string[] | undefined => {
  return subjects[c];
};

export const getCourseWorkload = (c: CourseCode): string | undefined => {
  return workloads[c];
};
