import type { StaticImageData } from 'next/image';

import * as Images from './images';
import type { CourseCode } from '@/domain/courseCode';

export type Testimonial = {
  id?: string;
  name: string;
  title?: string;
  business?: string;
  courses?: CourseCode[];
  description: string;
  image: StaticImageData;
  galleryImages?: StaticImageData[];
  imagePositionX?: number;
  imagePositionY?: number;
};

export const students: Record<string, Testimonial> = {
  'chantal-marion': {
    name: 'Chantal Marion',
    business: 'ALOMA Home Staging & Design',
    description: 'Chantal Marion leads ALOMA Home Staging & Design with a clear mission: to create spaces that feel grounded, joyful, and truly livable. A former go-to designer for friends and family, Chantal turned years of informal experience into a full-fledged business after completing QC Design School’s Interior Decorating and Home Staging courses. Her standout specialty—residential and commercial staging with a warm, personalized touch—has led to high-impact projects, including a 70,000-square-foot luxury retirement residence where she served as lead designer. The project’s success reinforced her belief in design as a powerful emotional connector. Juggling a busy family life with two kids in competitive sports, Chantal appreciated the flexible pacing of QC’s online platform and the support of expert tutors who offered personalized insights. Since launching ALOMA, she’s staged hundreds of properties, led complex renovations, and transformed everything from medical clinics to wedding venues. Her portfolio includes work with optometrists, lawyers, architects, and everyday homeowners—all seeking her ability to blend form, function, and feeling. QC helped Chantal build not just technical skills but business confidence, enabling her to grow ALOMA into a multi-service design studio. Her next goal is to continue expanding her reach while mentoring emerging designers through community projects and partnerships.',
    image: Images.ChantalMarion,
    galleryImages: [ Images.chantal1, Images.chantal2, Images.chantal3, Images.chantal4 ],
  },
  'rachael-stafford': {
    name: 'Rachael Stafford',
    business: 'Order in the House',
    description: 'Rachael Stafford is the founder of Order in the House, a design and home staging business that evolved from her successful organizing and moving services. Rachael brings a sense of calm and balance to clients navigating stressful transitions. After researching online programs, she chose QC Design School for its flexibility, affordability, and strong reputation. The self-paced format fit seamlessly into her full-time work schedule, while the course content and tutor feedback helped her refine her style and expand her service offerings. Graduating with top marks gave her the confidence to add staging and redesign to her business—backed by certification and industry-specific training. Rachael’s approach blends empathy with efficiency: she transforms cluttered or impersonal spaces into inviting, market-ready homes that appeal to buyers and boost listing success. She’s proud of the role her team plays in helping families settle into new homes or move on with ease. QC helped her sharpen her design instincts and elevate her services to a new professional level. Now, she’s focused on growing her business’s reach and creating a full-service experience that supports clients from the first consultation to the final showing.',
    image: Images.RachaelStafford,
    galleryImages: [ Images.rachael1, Images.rachael2, Images.rachael3 ],
  },
  'jamie-cromar': {
    name: 'Jamie Cromar',
    business: 'Leigh Allan Design',
    description: 'Jamie Cromar, founder of Leigh Allan Design, is quickly earning recognition for her ability to blend Scandinavian minimalism with Bohemian warmth. A mom of two with a lifelong love for home styling, Jamie chose QC Design School to gain professional credibility and launch her dream business. The name Leigh Allan pays tribute to her sons and reflects her belief in personal, family-centered spaces. QC’s flexible online format allowed Jamie to balance her coursework with parenting and client work, while the program&apos;s structured assignments helped her refine her style and gain hands-on practice. Currently enrolled in both the Interior Decorating and Staging for Designers courses, Jamie is applying her growing skill set to real-world projects and building a loyal base of local clients. From cozy living rooms to full-home makeovers, her work is marked by thoughtful planning and client-focused design. Jamie credits QC with giving her the confidence and clarity to transition from hobbyist to professional. Her next step is to complete her certification, grow Leigh Allan Design into a full-time studio, and continue helping families fall in love with their homes—one serene space at a time.',
    image: Images.JamieCromar,
    galleryImages: [ Images.jamie1, Images.jamie2, Images.jamie3, Images.jamie4, Images.jamie5, Images.jamie6 ],
  },
  'curstyn-carter': {
    name: 'Curstyn Carter',
    business: 'Interior Aesthetics by Curstyn',
    description: 'Curstyn Carter is the founder of Interior Aesthetics by Curstyn, a new design studio that blends creativity with hands-on versatility. Known for her approachable style and all-around portfolio, Curstyn brings clarity and energy to every project she takes on. She graduated from QC Design School’s Interior Decorating program and launched her business within weeks. The self-paced structure allowed her to stay focused and consistent, while the real-world client scenarios built into the course helped her practice floor planning, budgeting, and design communication. Already, she has completed several projects for friends, family, and new clients—delivering everything from space planning to wallpaper installation. Curstyn credits QC with giving her not just knowledge, but confidence: the tutor feedback and industry-relevant coursework helped her develop a sharp design eye and the ability to manage a range of client needs. She now creates and shares moodboards, behind-the-scenes videos, and décor tips on Facebook, TikTok, and Instagram, steadily building her brand. Curstyn’s service offerings include color consulting, furniture selection, organizing, and DIY transformations, making her a valuable partner for clients seeking function and flair on any budget. Looking ahead, she plans to grow her online presence and offer virtual services to reach clients beyond her local area.',
    image: Images.CurstynCarter,
    galleryImages: [ Images.curstyn1, Images.curstyn2, Images.curstyn3 ],
  },
};
