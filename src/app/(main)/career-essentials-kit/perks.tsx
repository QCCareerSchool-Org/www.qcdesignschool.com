import type { ReactNode } from 'react';

import BarChartIcon from './perkIcons/bar-chart-alt.svg';
import BookIcon from './perkIcons/book-bookmark.svg';
import CertificationIcon from './perkIcons/certification.svg';
import ChatIcon from './perkIcons/chat.svg';
import CoinIcon from './perkIcons/coin-stack.svg';
import LoopIcon from './perkIcons/loop.svg';

type Perk = {
  title: string;
  text: string;
  icon: ReactNode;
};

const iconSize = 48;

export const perks: Perk[] = [
  {
    title: 'Personalized Feedback',
    text: 'Personalized 1-on-1 feedback from a tutor invested in your success',
    icon: <ChatIcon height={iconSize} width={iconSize} />,
  },
  {
    title: 'Low Tuition Cost',
    text: 'Get practical design knowledge and more—all the training you need without the high tuition',
    icon: <BookIcon height={iconSize} width={iconSize} />,
  },
  {
    title: 'Business Training',
    text: 'The training and tools you need to launch your own business as soon as you graduate',
    icon: <BarChartIcon height={iconSize} width={iconSize} />,
  },
  {
    title: 'Professional Certification',
    text: 'Graduate and receive a professional certification and the designation.',
    icon: <CertificationIcon height={iconSize} width={iconSize} />,
  },
  {
    title: 'Lifetime Access',
    text: 'Gain access to your professional certification and the designation for life.',
    icon: <LoopIcon height={iconSize} width={iconSize} />,
  },
  {
    title: 'Flexible Payment Options',
    text: 'Flexible tuition payment options with no hidden fees or additional costs',
    icon: <CoinIcon height={iconSize} width={iconSize} />,
  },
];
