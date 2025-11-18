import { promises as fs } from 'fs';
import type { MetadataRoute } from 'next';
import { Videos } from 'next/dist/lib/metadata/types/metadata-types';
import path from 'path';

import { siteVideos } from './videos';

const prefix = 'https://www.qcdesignschool.com';

const getAppDirectoryPages = async (filePath: string = 'src/app'): Promise<MetadataRoute.Sitemap> => {
  const result: MetadataRoute.Sitemap = [];
  const files = await fs.readdir(filePath);
  for (const f of files) {
    const fullname = path.join(filePath, f);
    const stat = await fs.stat(fullname);
    if (stat.isDirectory() && !stat.isSymbolicLink()) {
      result.push(...await getAppDirectoryPages(fullname));
    }
    if (stat.isFile() && (f.endsWith('page.tsx') || f.endsWith('page.jsx'))) {
      const url = getUrl(filePath);
      const videos = siteVideos.filter(v => v.pages.includes(url));
      if (url === 'https://www.qcdesignschool.com/previews/interior-decorating') {
        console.log('\n\n\n\n\n\n');
        console.log(url, videos);
        console.log('\n\n\n\n\n\n');
      }
      const page = {
        url,
        lastModified: stat.mtime,
        priority: getPriority(url),
        videos,
      };
      result.push(page);
    }
  }
  return result;
};

const getUrl = (filePath: string): string => {
  const urlPath = filePath
    .replaceAll('\\', '/')
    .substring(7)
    .replace(/\/\(.*\)/u, '');
  return `${prefix}${urlPath}`;
};

const getPriority = (url: string): number => {
  if (url === prefix) {
    return 1;
  }
  if (url === `${prefix}/free-catalog`) {
    return 1;
  }
  if (url.startsWith(`${prefix}/online-courses`)) {
    return 0.9;
  }
  if (url === `${prefix}/about`) {
    return 0.8;
  }
  if (url === `${prefix}/contact-us`) {
    return 0.8;
  }
  return 0.5;
};

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  return getAppDirectoryPages();
};

export default sitemap;
