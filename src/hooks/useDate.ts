import { useState } from 'react';

export const useDate = (): number => {
  const [ date ] = useState(() => Date.now());
  return date;
};
