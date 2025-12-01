import type { StaticImageData } from 'next/image';

import * as Images from './images';
import type { CourseCode } from '@/domain/courseCode';

export interface Testimonial {
  name: string;
  courses: CourseCode[];
  provinceCode?: string;
  short: string[];
  long: string[];
  image: StaticImageData;
  imagePositionX?: number;
  imagePositionY?: number;
  stars: 0 | 1 | 2 | 3 | 4 | 5;
}

export const testimonials: Record<string, Testimonial | undefined> = {
  'TD-0001': {
    name: 'Natalie Mireault',
    courses: [ 'st' ],
    provinceCode: 'ON',
    short: [ 'I would absolutely recommend QC\'s Home Staging Course to anyone who\'s looking to become a home stager, or wants to expand their knowledge in the home decor field.' ],
    long: [ 'My experience overall was a very positive one! For starters, the tutors are amazing. My tutor provided great feedback and always corrected my assignments in a timely manner. I would absolutely recommend QC\'s Home Staging Course to anyone who\'s looking to become a home stager, or wants to expand their knowledge in the home decor field.' ],
    image: Images.NatalieMireault,
    stars: 5,
  },
  'TD-0002': {
    name: 'Sara Jones',
    courses: [ 'po', 'ap' ],
    provinceCode: 'BC',
    short: [ 'I learned a lot of great information, and was given tools I can use over and over again in my future career. I loved being able to work on the course in my own time and not feel pressured with deadlines.' ],
    long: [ 'Professional training makes you work through hypothetical scenarios before you encounter them with real clients, allowing you to be prepared. Plus, it shows potential clients that you’re serious about what you do because you have been investing in both your education and your business.' ],
    image: Images.SaraJones,
    stars: 5,
  },
  'TD-0003': {
    name: 'Paola Fasca',
    courses: [ 'st', 'cc', 'vd' ],
    provinceCode: 'ON',
    short: [ 'QC Design School immediately caught my attention! The program was very straightforward and the staff were very kind and helpful!' ],
    long: [ 'My experience during the process of these courses was amazing! My favorite part was that I had time to finish the courses at my own pace. Support was always available and the Student Support Team was always very quick to reply to any questions that I may have had.' ],
    image: Images.PaolaFasca,
    stars: 5,
  },
  'TD-0004': {
    name: 'Rachael Stafford',
    courses: [ 'st' ],
    provinceCode: 'ON',
    short: [ 'The course outline was clearly laid out on the website, the materials were efficient and easy to follow, I could complete the units at my own pace, and it was reasonably priced.' ],
    long: [ 'My experience was great. I very much enjoyed completing each unit. While I could do it at my own pace, I looked forward to the next assignment and so I completed the course very quickly. I would highly recommend it to others, as it gave me the confidence I needed to proceed in adding home staging and redesign to my service offerings.' ],
    image: Images.RachealStafford,
    stars: 5,
  },
  'TD-0005': {
    name: 'Alicia Osenenko',
    courses: [ 'cc', 'fs' ],
    short: [ 'QC Design School seemed to be the best program for me, both in terms of quality and flexibility. I was pleased with how well this program was put together and how user friendly it was!' ],
    long: [ 'I was pleased with how well this program was put together and how user friendly it was! The study materials were thorough and the assignments required good effort. My tutor was there whenever I needed any help. I appreciated all the comments and feedback she left after reviewing and grading each of my units.' ],
    image: Images.AlciaOsenenko,
    stars: 5,
  },
  'TD-0006': {
    name: 'Jamie Cromar',
    courses: [ 'i2', 'ms' ],
    provinceCode: 'QC',
    short: [ 'Being able to learn the business and how to work with clients is so amazing! QC Design School has been a fun and very positive experience for me.' ],
    long: [ 'I looked for the right online school for a long time, and always came back to QC Design School. I loved the course outline and how I could choose multiple courses to take. I was also drawn to the fact that the School has a full business unit included in their courses.' ],
    image: Images.JamieCromar,
    stars: 5,
  },
  'TD-0007': {
    name: 'Deborah Soulier',
    courses: [ 'i2' ],
    short: [ 'The invaluable training I received from QC Design School has no doubt been paramount to the success of my business!' ],
    long: [ 'QC had—by far—the absolute best syllabus. Plus, QC is recognized by many reputable design associations and has a stellar reputation! Through my interior decorator certification training, I truly learned how to walk in the shoes of a designer. By the time I graduated, I could create a home for my clients from the floorplan up!' ],
    image: Images.DeborahSoulier,
    stars: 5,
  },
  'TD-0008': {
    name: 'Sarah Kirkpatrick',
    courses: [ 'i2', 'ms' ],
    provinceCode: 'AB',
    short: [ 'The value of the course was the feedback I received from my tutor. You can get professional feedback and advice on real situations which is invaluable!' ],
    long: [ 'The value of the course was the feedback I received from my tutor. You can get professional feedback and advice on real situations, as well as on your own style and process. This is invaluable! Students and grads from QC also have access to reputable design associations, such as the DDA, RESA, CARAHS, and POC.' ],
    image: Images.SarahKirkpatrick,
    stars: 5,
  },
  'TD-0009': {
    name: 'Marianna Zimmerman',
    courses: [ 'i2' ],
    short: [ 'QC Design School\'s Interior Design & Decorating course definitely prepared me for working in this field and starting my own business!' ],
    long: [ 'QC Design School\'s Interior Design & Decorating course definitely prepared me for working in this field and starting my own business! Although I’ve always felt I had a natural eye or gift for decorating, I had no knowledge on the business side to it all.' ],
    image: Images.MariannaZimmerman,
    stars: 5,
  },
  'TD-0010': {
    name: 'Dawn Marie Clunas',
    courses: [ 'i2' ],
    provinceCode: 'ON',
    short: [ 'With QC I could live out my dream with an online course and expand my knowledge of the field while being able to continue professional working in it at the same time.' ],
    long: [],
    image: Images.DawnMarieClunas,
    stars: 5,
  },
  'TD-0011': {
    name: 'Chantal Marion',
    courses: [ 'i2', 'st' ],
    provinceCode: 'ON',
    short: [ 'The courses were very well organized, and I had amazing support from QC as well as my tutor throughout the process. I totally recommend it!' ],
    long: [ 'I completed both the ISRP (International Staging & Redesign Professional) and IDDP (International Design & Decorating Professional) programs online. The courses were very well organized, and I had amazing support from QC as well as my tutor throughout the process. I totally recommend it!' ],
    image: Images.ChantalMarion,
    stars: 5,
  },
  'TD-0012': {
    name: 'Bradley Ryan Schlagheck',
    courses: [ 'po' ],
    short: [ 'QC\'s course taught me the fundamental skills and principles of organizing as a profession. It gave me the first steps in starting my organizing business. The course was so well rounded and put together!' ],
    long: [ 'QC\'s course taught me the fundamental skills and principles of organizing as a profession. I know that each assignment will be relevant to something that I may encounter in the field when working on my own. Learning about all the different types of organizing clients was a plus, as this is a very important aspect of the business. The course gave me the first steps in starting my organizing business. The course was so well rounded and put together!' ],
    image: Images.BradleyRyanSchlagheck,
    stars: 5,
  },
  'TD-0013': {
    name: 'Katherine Snow',
    courses: [ 'ed' ],
    short: [ 'I chose QC for its stellar reviews and professional website. The reputable tutors allowed me to enhance my skills. The option for easy payments made continuing my education hassle-free, enabling me to keep moving forward. The tutors were not only great but also helpful and knowledgeable, making my time truly enjoyable.' ],
    long: [ 'I chose QC for its stellar reviews and professional website. The reputable tutors allowed me to enhance my skills. The option for easy payments made continuing my education hassle-free, enabling me to keep moving forward. The tutors were not only great but also helpful and knowledgeable, making my time truly enjoyable.' ],
    image: Images.KatherineSnow,
    stars: 5,
  },
  'TD-0014': {
    name: 'Tadem Daniels',
    courses: [ 'st', 'po' ],
    short: [ 'Attending QC Design was the best decision that I have made. They gave me the tools needed to turn my passion into a career!' ],
    long: [ 'The tutor really pushed my thinking throughout this course and I was able to grow personally and professionally from her feedback. Attending QC Design was the best decision that I have made. They gave me the tools needed to turn my passion into a career!' ],
    image: Images.TademDaniels,
    stars: 5,
  },
  'TD-0015': {
    name: 'Tylar Fertuck',
    courses: [ 'i2' ],
    provinceCode: 'SK',
    short: [ 'I had an amazing time! My favourite part about the course was the relaxed structure. As a stay-at-home mom of two kids, that made the whole process a lot easier for me.' ],
    long: [ 'I had an amazing time! I was able to get help and clarification easily when needed, and I completed my course in less than a year. My favourite part about the course was the relaxed structure—no strict deadlines or anything! As a stay-at-home mom of two kids, that made the whole process a lot easier for me.' ],
    image: Images.TylarFertuck,
    stars: 5,
  },
  'TD-0016': {
    name: 'Doxceen Malcolm',
    courses: [ 'i2', 'ms' ],
    provinceCode: 'QC',
    short: [ 'There was never a moment I felt alone because I knew that help was always a phone call away. I have improved my skills immensely, and I have QC Design School to thank.' ],
    long: [ 'There was never a moment I felt alone because I knew that help was always a phone call away. The staff are professional in their interactions, friendly, helpful, and proactive - always seeking ways to provide you with the support you need. Since graduating from the Interior Decorating course I have improved my skills immensely, and I have QC Design School to thank.' ],
    image: Images.DoxceenMalcolm,
    stars: 5,
  },
  'TD-0017': {
    name: 'Bradley Ryan Schlagheck',
    courses: [ 'i2' ],
    short: [ 'The course was so well-rounded and put together! I know that each assignment will be relevant to something that I may encounter in the field when working on my own.' ],
    long: [ 'The course was so well-rounded and put together! I know that each assignment will be relevant to something that I may encounter in the field when working on my own.' ],
    image: Images.BradleyRyanSchlagheck,
    stars: 5,
  },
  'TD-0018': {
    name: 'Erin St-Aubin',
    courses: [ 'ld', 'po', 'vd' ],
    provinceCode: 'QC',
    short: [ 'With the flexible online format the school offers, working on schoolwork on my own time was less stressful. Help from the student centre was always there when I needed it.' ],
    long: [ 'I have recently completed Landscape Design, my first of three courses with QC Design School. Working full time I never thought I\'d be able to go back to school. With the flexible online format the school offers, working on schoolwork on my own time was less stressful. Help from the student centre was always there when I needed it and the tutor\'s feedback was very thorough. I look forward to finishing my next two courses in the near future.' ],
    image: Images.ErinStAubin,
    stars: 5,
  },
  'TD-0019': {
    name: 'Caitlyn Baldini',
    courses: [ 'ld' ],
    short: [ 'The courses were easy to follow while also being challenging. My tutor Ivy was very helpful and I enjoyed her feedback.' ],
    long: [ 'The courses were easy to follow while also being challenging. My tutor Ivy was very helpful and I enjoyed her feedback.' ],
    image: Images.CaitlynBaldini,
    stars: 5,
  },
  'TD-0020': {
    name: 'Terry Russell',
    courses: [ 'ld' ],
    short: [ 'Some schools focus purely on books and theory. QC combines theory with hands-on learning. At the end of the day, it’s all about learning design, improving, and finding creative ways to solve real-world challenges—and QC does an amazing job teaching that.' ],
    long: [ 'Some schools focus purely on books and theory. QC combines theory with hands-on learning. At the end of the day, it’s all about learning design, improving, and finding creative ways to solve real-world challenges—and QC does an amazing job teaching that.' ],
    image: Images.TerryRussell,
    stars: 5,
  },
  'TD-0021': {
    name: 'Jocelyn Lukac',
    courses: [ 'ld' ],
    short: [ 'I saw it online, liked the reviews and the presentation. The price is reasonable. The class is complete, I learned CODE and client types identification.' ],
    long: [ 'I saw it online, liked the reviews and the presentation. The price is reasonable. The class is complete, I learned CODE and client types identification.' ],
    image: Images.JocelynLukac,
    stars: 5,
  },
  'TD-0022': {
    name: 'Katie Cole',
    courses: [ 'ld' ],
    short: [ 'I loved that I could work at my own pace. I also found the feedback from my tutor very helpful and she made a point to explain in detail on things that I may have misunderstood and how to improve or correct it. Getting the feedback from my tutor was my favorite part.' ],
    long: [ 'I loved that I could work at my own pace. I also found the feedback from my tutor very helpful and she made a point to explain in detail on things that I may have misunderstood and how to improve or correct it. Getting the feedback from my tutor was my favorite part.' ],
    image: Images.KatieCole,
    stars: 5,
  },
  'TD-0023': {
    name: 'Kizzy Malini',
    courses: [ 'st' ],
    short: [ 'From start to finish, the course was thoughtfully structured and packed with valuable information that has truly prepared me for a career in home staging. My tutor provided constructive, encouraging insights that helped me grow with every module.' ],
    long: [ 'I recently completed the Home Staging course with QC Design School, and I couldn\'t be more pleased with the experience. From start to finish, the course was thoughtfully structured, easy to follow, and packed with valuable information that has truly prepared me for a career in home staging. \nThe materials were comprehensive and practical, covering everything from design principles and color theory to client communication and staging for real estate. The assignments were hands-on and challenged me to apply what I learned in real-world scenarios. I especially appreciated the personalized feedback from my tutor, who provided constructive, encouraging insights that helped me grow with every module. \nWhat really stood out was the flexibility of the program. Being able to study at my own pace made it easy to balance my education with a busy schedule. Plus, the support from the QC community was fantastic—responsive, professional, and genuinely invested in my success. \nThanks to QC Design School, I feel confident to run my home staging business, helping Realtors sell homes faster. I would highly recommend this course to anyone looking to break into the design industry with a solid foundation and real-world skills.' ],
    image: Images.KizzyMalini,
    stars: 5,
  },
  'TD-0024': {
    name: 'Carli Lewis',
    courses: [ 'fd' ],
    short: [ 'I decided that this was the school for me and took the chance! Looking back, I can confirm that this was the BEST. DECISION. EVER!' ],
    long: [ 'I decided that this was the school for me and took the chance! Looking back, I can confirm that this was the BEST. DECISION. EVER!' ],
    image: Images.CarliLewis,
    stars: 5,
  },
  'TD-0025': {
    name: 'Neena McConnell',
    courses: [ 'fd' ],
    short: [ 'Attending an online school allowed me to learn at my own pace in the comfort of my own home. I was able to work full-time, train a young puppy, plan my own wedding, and travel with my now-husband.' ],
    long: [ 'Attending an online school allowed me to learn at my own pace in the comfort of my own home. I was able to work full-time, train a young puppy, plan my own wedding, and travel with my now-husband.' ],
    image: Images.NeenaMcconnell,
    stars: 5,
  },
  'TD-0026': {
    name: 'Maureen Bilokur',
    courses: [ 'fd' ],
    short: [ 'With the Floral Design course my favorite part was learning how to make arrangements, how to choose the colors, textures, foliage and shape for an arrangement.' ],
    long: [ 'With the Floral Design course my favorite part was learning how to make arrangements, how to choose the colors, textures, foliage and shape for an arrangement.' ],
    image: Images.FDPlaceholder, // update image
    stars: 5,
  },
  'TD-0027': {
    name: 'Abigail Doto',
    courses: [ 'fd' ],
    short: [ 'I loved the hands-on assignments where I got to create real floral arrangements. I feel I learned so much by actually doing rather than just reading about it.' ],
    long: [ 'I loved the hands-on assignments where I got to create real floral arrangements. I feel I learned so much by actually doing rather than just reading about it.' ],
    image: Images.FDPlaceholder, // update image
    stars: 5,
  },
  'TD-0028': {
    name: 'Marzena Leszczyk',
    courses: [ 'fs' ],
    short: [ 'I recommend QC Design School for anyone who likes to work at their own pace. This level of freedom provides the flexibility needed to balance work, home, and a social life while still pursuing your dream career.' ],
    long: [ 'I recommend QC Design School for anyone who likes to work at their own pace. This level of freedom provides the flexibility needed to balance work, home, and a social life while still pursuing your dream career.' ],
    image: Images.MarzenaLeszczyk, // update image
    stars: 5,
  },
  'TD-0029': {
    name: 'Adriana DeFreitas',
    courses: [ 'fs' ],
    short: [ 'My course in Feng Shui was amazing. This educational journey not only enhances professional credentials but also contributes to personal development and satisfaction.' ],
    long: [ 'My course in Feng Shui was amazing. This educational journey not only enhances professional credentials but also contributes to personal development and satisfaction.' ],
    image: Images.AdrianaDeFreitas, // update image
    stars: 5,
  },
};
