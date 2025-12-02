import { useState } from 'react';

export const useOrigin = () => {
  const [ origin ] = useState(window.location.origin);

  return origin;
};
