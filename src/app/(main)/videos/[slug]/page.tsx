import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getVideo } from '..';
import { VideoJsonLD } from '@/components/jsonLd/videoObject';
import type { GenerateMetadata, PageComponent } from '@/serverComponent';

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type Props = {
  slug: string;
};

export const generateMetadata: GenerateMetadata<Props> = async ({ params }): Promise<Metadata> => {
  const p = await params;
  const video = getVideo(p.slug);

  if (!video) {
    return notFound();
  }

  return {
    title: video.title,
    description: video.description,
    alternates: { canonical: video.watch_loc },
  };
};

const VideoPlayerPage: PageComponent<Props> = async ({ params }) => {
  const p = await params;
  const video = getVideo(p.slug);

  if (!video) {
    return notFound();
  }

  return (
    <>
      <VideoJsonLD {...video} />
      <section className="bg-light pt-4">
        <div className="container">
          <h1 className="mb-3">{video.title}</h1>
          <div className="ratio ratio-16x9 mb-3">
            <video src={video.content_loc} poster={video.thumbnail_loc} controls preload="metadata" />
          </div>
          <p className="lead mb-0">{video.description}</p>
        </div>
      </section>
    </>
  );
};

export default VideoPlayerPage;
