import type { FC, ReactNode } from 'react';

import BarChartIcon from './icons/bar-chart-alt.svg';
import BookIcon from './icons/book-bookmark.svg';
import CertificationIcon from './icons/certification.svg';
import ChatIcon from './icons/chat.svg';
import CoinIcon from './icons/coin-stack.svg';
import LoopIcon from './icons/loop.svg';

type Perk = {
  title: string;
  text: string;
  icon: ReactNode;
};

export const perks: Perk[] = [
  {
    title: 'Personalized Feedback',
    text: 'Personalized 1-on-1 feedback from a tutor invested in your success',
    icon: <ChatIcon />,
  },
  {
    title: 'Low Tuition Cost',
    text: 'Get practical design knowledge and more—all the training you need without the high tuition',
    icon: <BookIcon />,
  },
  {
    title: 'Business Training',
    text: 'The training and tools you need to launch your own business as soon as you graduate',
    icon: <BarChartIcon />,
  },
  {
    title: 'Professional Certification',
    text: 'Graduate and receive a professional certification and the designation.',
    icon: <CertificationIcon />,
  },
  {
    title: 'Lifetime Access',
    text: 'Gain access to your professional certification and the designation for life.',
    icon: <LoopIcon />,
  },
  {
    title: 'Flexible Payment Options',
    text: 'Flexible tuition payment options with no hidden fees or additional costs',
    icon: <CoinIcon />,
  },
];
