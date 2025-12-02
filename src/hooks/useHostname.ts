import { useState } from 'react';

export const useHostname = () => {
  const [ host ] = useState(window.location.hostname);

  return host;
};
