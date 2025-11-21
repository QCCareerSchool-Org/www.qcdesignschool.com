/* eslint-disable camelcase */

export type Video = {
  /** unique identifier */
  slug: string;
  /** the pages this video appears on */
  pages: string[];
  title: string;
  thumbnail_loc: string;
  description: string;
  /** Direct URL to the video file */
  content_loc: string;
  /** URL to the player page (leave undefined for default) */
  player_loc: string;
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
};

import InteriorDecoratingPreviewPoster from '@/app/(blank)/previews/interior-decorating/_sections/platform/poster.jpg';

const baseUrl = 'https://www.qcdesignschool.com';

export const siteVideos: Video[] = ([
  {
    slug: 'your-journey-starts-here',
    pages: [
      `${baseUrl}`,
      `${baseUrl}/previews/interior-decorating`,
      `${baseUrl}/online-courses/interior-decorating`,
    ],
    title: 'Your Journey Starts Here',
    thumbnail_loc: `${baseUrl}${InteriorDecoratingPreviewPoster.src}`,
    description: 'Unleash your creativity and shape the future of design with QC Design School. Together we can tranform your passion into a dynamic, thriving career.',
    content_loc: 'https://51d9ccad7be11d8ada71-aeafba698c87c1173d616904e85b2e3e.ssl.cf1.rackcdn.com/design-marketing-video.mp4',
    duration: 111,
    publication_date: new Date(2025, 7, 1, 15, 37).toISOString(),
    family_friendly: 'yes',
    requires_subscription: 'no',
  },
  {
    slug: 'master-modern-design-styles',
    pages: [
      `${baseUrl}/previews/interior-decorating`,
    ],
    title: 'Master Modern Design Styles',
    thumbnail_loc: `${baseUrl}/videos/master-modern-design-styles.png`,
    description: 'Discover how lighting, window treatments, and accessories can completely transform the look and feel of a space. With guidance from industry-leading designer and HGTV star Jane Lockhart, you\'ll learn through engaging instructional videos how to choose and style these finishing touches like a pro.',
    content_loc: 'https://51d9ccad7be11d8ada71-aeafba698c87c1173d616904e85b2e3e.ssl.cf1.rackcdn.com/part%203-clip.mp4',
    duration: 66,
    publication_date: new Date(2025, 7, 1, 15, 37).toISOString(),
    family_friendly: 'yes',
    requires_subscription: 'no',
  },
  {
    slug: 'bring-your-designs-to-life',
    pages: [
      `${baseUrl}/previews/interior-decorating`,
    ],
    title: 'Bring Your Designs to Life',
    thumbnail_loc: `${baseUrl}/videos/bring-your-designs-to-life.png`,
    description: 'Learn one of the most essential skills in interior decorating: bringing your ideas to life through professional drawings. In this unit, you\'ll discover how to create accurate, scaled floor plans and other key visuals using the tools and techniques decorators use every day.',
    content_loc: 'https://51d9ccad7be11d8ada71-aeafba698c87c1173d616904e85b2e3e.ssl.cf1.rackcdn.com/part-4-clip.mp4',
    duration: 133,
    publication_date: new Date(2025, 7, 1, 15, 37).toISOString(),
    family_friendly: 'yes',
    requires_subscription: 'no',
  },
  {
    slug: 'shaping-the-future-of-design',
    pages: [
      `${baseUrl}/student-success`,
    ],
    title: 'Shaping the Future of Design',
    thumbnail_loc: `${baseUrl}/videos/testimonial-thumb.png`,
    description: 'With over 45,000 students &amp; graduates and 40 years in distance education, QC Design School empowers your passion for design and transforms it into a successful career. Learn from the best and join a community that\'s redefining the industry.',
    content_loc: 'https://51d9ccad7be11d8ada71-aeafba698c87c1173d616904e85b2e3e.ssl.cf1.rackcdn.com/no-cta-testimonial-ad-montage.mp4',
    duration: 136,
    publication_date: new Date(2025, 7, 1, 15, 37).toISOString(),
    family_friendly: 'yes',
    requires_subscription: 'no',
  },
] as Video[]).map(v => ({
  ...v,
  player_loc: 'player_loc' in v && v.player_loc ? v.player_loc : `${baseUrl}/videos/${v.slug}`,
}));

// check for duplicate slugs
const slugs: string[] = [];

for (const v of siteVideos) {
  if (slugs.includes(v.slug)) {
    throw Error(`duplicate slug ${v.slug}`);
  }
  slugs.push(v.slug);
}
