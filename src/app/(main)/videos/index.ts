import type { Video } from '@/app/videos';
import { siteVideos } from '@/app/videos';

export const getVideo = (slug: string): Video | undefined => {
  return siteVideos.find(v => v.slug === slug);
};

export class VideoNotFoundError extends Error {
  public statusCode: number;

  public constructor(message = 'Not found') {
    super(message);
    this.name = 'NotFoundError';
    this.statusCode = 404;
  }
}
