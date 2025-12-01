declare module '*.svg' {
  // const React = import('react');

  const content: React.FC<React.SVGProps<SVGSVGElement> & { title?: string }>;

  export default content;
}
