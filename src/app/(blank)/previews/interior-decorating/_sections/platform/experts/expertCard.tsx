import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC, PropsWithChildren } from 'react';

type Props = {
  show: boolean;
  name: string;
  title: string;
  src: StaticImageData;
};

export const ExpertCard: FC<PropsWithChildren<Props>> = props => {
  if (props.show) {
    return (
      <div className="card text-start">
        <div className="card-body">
          <div className="row g-4">
            <div className="col-12 col-md-6">
              <Image src={props.src} alt={props.name} className="img-fluid rounded-3" />
            </div>
            <div className="col-12 col-md-6">
              <h4 className="mb-0">{props.name}</h4>
              <p className="lead text-primary fw-bold">{props.title}</p>
              {props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
};
