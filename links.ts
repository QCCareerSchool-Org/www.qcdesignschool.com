export interface Link {
  rel: string;
  href: string;
  type?: string;
  title?: string;
}

export const links: Link[] = [
  { rel: 'api-catalog', href: '/.well-known/api-catalog' }, // type: 'application/linkset+json'
  { rel: 'ai-catalog', href: '/.well-known/ai-catalog.json', type: 'application/ai-catalog+json' },
  { rel: 'describedby', href: '/llms.txt', type: 'text/plain', title: 'Site summary' },
  { rel: 'describedby', href: '/llms-full.txt', type: 'text/plain', title: 'Full site content' },
];
