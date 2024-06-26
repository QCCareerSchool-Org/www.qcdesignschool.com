import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { CSSProperties, FC } from 'react';

type Props = {
  src: StaticImageData;
  objectPosition?: CSSProperties['objectPosition'];
  priority?: boolean;
  quality?: number;
};

export const SectionBackground: FC<Props> = ({ src, objectPosition, priority, quality }) => (
  <Image
    src={src}
    placeholder="blur"
    alt=""
    priority={priority}
    quality={quality}
    fill
    sizes="100vw"
    style={{ objectFit: 'cover', objectPosition: objectPosition ?? 'center' }}
  />
);
