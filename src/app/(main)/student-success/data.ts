import type { StaticImageData } from 'next/image';

import EmilySpragueImage from '@/components/employees/emily-sprague.jpg';
import LucieDemersImage from '@/components/employees/lucie-demers.jpg';
import ShannonCooperImage from '@/components/employees/shannon-cooper.jpg';

export type studentTeamMember = {
  name: string;
  title?: string;
  description: string;
  image: StaticImageData;
};

export const StudentSuccessTeam: Record<string, studentTeamMember> = {
  'lucie-demers': {
    name: 'Lucie Demers',
    title: 'Student Coordinator',
    description: "I'm here to support you from the moment you begin your journey with QC through to graduation. I oversee the enrollment process and personally welcome you to the school to ensure you get off to a great start. If you have any questions along the way, I'm just a phone call away! When you complete your course, I'll proudly send your professional certification to celebrate your achievement.",
    image: LucieDemersImage,
  },
  'emily-sprague': {
    name: 'Emily Sprague',
    title: 'Head of Student Services',
    description: 'My job is to support your education. My team and I are here to help you every step of the way. We can help you choose the best course to meet your needs, develop a plan to achieve your career goals, walkthrough your course materials and celebrate your graduation! You can reach us 7 days a week by phone, email and livechat.',
    image: EmilySpragueImage,
  },
  'shannon-cooper': {
    name: 'Shannon Cooper',
    title: 'Teaching Assistant',
    description: "I'm here to support you from the moment you begin your journey with QC through to graduation. I oversee the enrollment process and personally welcome you to the school to ensure you get off to a great start. If you have any questions along the way, I'm just a phone call away! When you complete your course, I'll proudly send your professional certification to celebrate your achievement.",
    image: ShannonCooperImage,
  },
};
