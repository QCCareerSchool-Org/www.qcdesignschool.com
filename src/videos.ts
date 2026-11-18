/* eslint-disable camelcase */

export interface Video {
  /** unique identifier */
  slug: string;
  title: string;
  thumbnail_loc: string;
  description: string;
  /** Direct URL to the video file */
  content_loc: string;
  /** URL to an embeddable player, if there is one (must not be the watch page) */
  player_loc?: string;
  /** URL to the watch page (generated from the slug) */
  watch_loc: string;
  /** Duration in seconds */
  duration: number;
  expiration_date?: string | Date;
  rating?: number;
  view_count?: number;
  publication_date: string | Date;
  family_friendly: 'yes' | 'no';
  restriction?: {
    relationship: 'allow' | 'deny';
    content: string;
  };
  requires_subscription: 'yes' | 'no';
  uploader?: {
    info?: string | undefined;
    content?: string | undefined;
  };
  live?: 'yes' | 'no';
  tag?: string;
  vtt?: string;
  transcript?: string[];
}

import InteriorDecoratingPreviewPoster from '@/app/(blank)/previews/interior-decorating/_sections/platform/poster.jpg';
import { siteUrl } from '@/lib/siteUrl';

export const siteVideos: Video[] = ([
  {
    slug: 'your-journey-starts-here',
    title: 'Your Journey Starts Here',
    thumbnail_loc: `${siteUrl}${InteriorDecoratingPreviewPoster.src}`,
    description: 'Unleash your creativity and shape the future of design with QC Design School. Together we can tranform your passion into a dynamic, thriving career.',
    content_loc: 'https://cdn.qccareerschool.com/design/design-marketing-video.mp4',
    duration: 111,
    publication_date: new Date(2025, 7, 1, 15, 37).toISOString(),
    family_friendly: 'yes',
    requires_subscription: 'no',
  },
  {
    slug: 'master-modern-design-styles',
    title: 'Master Modern Design Styles',
    thumbnail_loc: `${siteUrl}/videos/master-modern-design-styles.png`,
    description: 'Discover how lighting, window treatments, and accessories can completely transform the look and feel of a space. With guidance from industry-leading designer and HGTV star Jane Lockhart, you\'ll learn through engaging instructional videos how to choose and style these finishing touches like a pro.',
    content_loc: 'https://cdn.qccareerschool.com/design/part%203-clip.mp4',
    duration: 66,
    publication_date: new Date(2025, 7, 1, 15, 37).toISOString(),
    family_friendly: 'yes',
    requires_subscription: 'no',
  },
  {
    slug: 'bring-your-designs-to-life',
    title: 'Bring Your Designs to Life',
    thumbnail_loc: `${siteUrl}/videos/bring-your-designs-to-life.png`,
    description: 'Learn one of the most essential skills in interior decorating: bringing your ideas to life through professional drawings. In this unit, you\'ll discover how to create accurate, scaled floor plans and other key visuals using the tools and techniques decorators use every day.',
    content_loc: 'https://cdn.qccareerschool.com/design/part-4-clip.mp4',
    duration: 133,
    publication_date: new Date(2025, 7, 1, 15, 37).toISOString(),
    family_friendly: 'yes',
    requires_subscription: 'no',
  },
  {
    slug: 'shaping-the-future-of-design',
    title: 'Shaping the Future of Design',
    thumbnail_loc: `${siteUrl}/videos/testimonial-thumb.png`,
    description: 'With over 45,000 students & graduates and 40 years in distance education, QC Design School empowers your passion for design and transforms it into a successful career. Learn from the best and join a community that\'s redefining the industry.',
    content_loc: 'https://cdn.qccareerschool.com/design/no-cta-testimonial-ad-montage.mp4',
    duration: 136,
    publication_date: new Date(2025, 7, 1, 15, 37).toISOString(),
    family_friendly: 'yes',
    requires_subscription: 'no',
    vtt: '/vtt/shaping-the-future-of-design.vtt',
    transcript: [
      '[On-screen text: Why did you choose QC?]',
      'It allows me to work virtually from home while I get to do other things. So, it was able to fit within my schedule.',
      'I could work at the coursework when it was convenient for me.',
      'I really liked the organized and structured course outline.',
      'I like the fact that QC provides the opportunity for us to do the work at our own pace, so we don\'t feel like we\'re rushing to get assignments done or to get quizzes done.',
      'I chose QC because I wanted something that was flexible and allowed me to work at my own pace.',
      'Now that I\'m building my business and I have clients and I still have a life. I have friends and family and all that stuff. I\'m still able to sit down and say, "Okay, I have 2 hours. I can pick away at it for two hours and then I can leave it for a week and I can come back to it," and that has just been amazing.',
      'Actually, I really like the flexibility of being able to complete the courses and the assignments really at your own pace.',
      'They were more than helpful. I mean, they guided me in the right direction. They were telling me exactly what I had to do to answer the question on a particular assignment. And I was also able to reach out to some of the students within the virtual community groups and they were also helpful.',
      'Everybody is so nice and so helpful. And I\'m so grateful for QC Design School.',
      'I\'m part of the virtual community now, which is so fun to meet people from all over the world, surrounding myself with people who are like-minded and in the same kind of industry.',
      'Enrolling in those courses ultimately gave me the sound knowledge base and the foundation I needed for interior decorating, but it also really gave me the confidence I needed to launch my own business.',
      'QC has helped get me where I am today in owning three businesses, a calligraphy business, an interior decor business, and The Friendly Market, which is something I started with a fellow QC graduate.',
      'The most rewarding part has been giving me the confidence to say I can totally do this. I never thought that I could do it professionally and make a job out of it. And I think having the support of the staff and having the course material was like my stepping stone to being like, okay, I really could make something out of this.',
      'I am so grateful for my experience and everything I\'ve learned at QC Design School because I am applying everything to my current job today.',
    ],
  },
] as Omit<Video, 'watch_loc'>[]).map(v => ({
  ...v,
  watch_loc: `${siteUrl}/videos/${v.slug}`,
}));

// check for duplicate slugs
const slugs: string[] = [];

for (const v of siteVideos) {
  if (slugs.includes(v.slug)) {
    throw Error(`duplicate slug ${v.slug}`);
  }
  slugs.push(v.slug);
}
