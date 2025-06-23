import type { FC } from 'react';

import { DDA } from './dda';
import { DSA } from './dsa';

type Props = {
  countryCode: string;
};

export const DesignRecognition: FC<Props> = ({ countryCode }) => {
  if (countryCode === 'CA') {
    return (
      <div className="text-white text-shadow">
        {countryCode === 'CA' ? <DDA /> : <DSA />}
      </div>
    );
  }
};
