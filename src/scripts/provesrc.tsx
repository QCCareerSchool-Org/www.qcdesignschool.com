import Script from 'next/script';
import type { FC } from 'react';

export const Provesrc: FC = () => (
  <Script id="provesrc" dangerouslySetInnerHTML={{ __html: script }} />
);

const script = `!function(o,i){window.provesrc&&window.console&&console.error&&console.error("ProveSource is included twice in this page."),window.provesrc={dq:[],display:function(){this.dq.push(arguments)}},o._provesrcAsyncInit=function(){window.provesrc.init({apiKey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI2N2Q0MzE5NzNlMzYzYjgwZDkzYWFjMzAiLCJpYXQiOjE3NDE5NTk1NzZ9.y1oIi0Bt9UYDmB9o8-xduRjG71bW6ucUKzKoUvztNIw",v:"0.0.4"})};var r=i.createElement("script");r.type="text/javascript",r.async=!0,r["ch"+"ar"+"set"]="UTF-8",r.src="https://cdn.provesrc.com/provesrc.js";var e=i.getElementsByTagName("script")[0];e.parentNode.insertBefore(r,e)}(window,document);`;
