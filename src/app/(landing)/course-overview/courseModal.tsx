import Link from 'next/link';
import type { FC, PropsWithChildren } from 'react';
import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';

import type { CourseCode } from '@/domain/courseCode';
import type { Price } from '@/domain/price';
import { formatPrice } from '@/lib/formatPrice';

type Props = {
  show: boolean;
  onHide: () => void;
  courseCode: CourseCode;
  header: string;
  price: Price;
};

export const CourseModal: FC<PropsWithChildren<Props>> = ({ show, onHide, header, courseCode, price, children }) => {
  const handleHide = onHide;

  return (
    <Modal show={show} onHide={handleHide} size="lg">
      <ModalHeader closeButton><h2 className="h6 mb-0" style={{ fontSize: '1rem' }}>{header}</h2></ModalHeader>
      <ModalBody>
        <div className="mb-4">
          {children}
        </div>
        <div className="row g-3">
          <div className="col-6 d-flex">
            <div className="card w-100">
              <div className="card-body p-3 p-lg-4 d-flex">
                <div className="d-flex flex-column justify-content-between w-100">
                  <div>
                    <h3 className="h6 fw-normal mb-1" style={{ fontSize: '1rem' }}>Pay in Full</h3>
                    <p className="mb-1 small"><span style={{ fontSize: '1.625rem', color: 'black', fontWeight: 800 }}>{price.currency.symbol}{formatPrice(price.plans.full.total)}</span></p>
                    {price.plans.full.discount > 0 && <><p className="mb-3 small"><del>{price.currency.symbol}{formatPrice(price.cost)}</del> <span className="text-success fw-bold" style={{ whiteSpace: 'nowrap' }}>Save {price.currency.symbol}{formatPrice(price.plans.full.discount)}</span></p></>}
                  </div>
                  <Link href={`https://enroll.qcdesignschool.com/all-courses-offer?c=${courseCode}&paymentPlan=full`}><button className="btn btn-primary w-100">Enroll</button></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 d-flex">
            <div className="card w-100">
              <div className="card-body p-3 p-lg-4 d-flex">
                <div className="d-flex flex-column justify-content-between w-100">
                  <div>
                    <h3 className="h6">Installments</h3>
                    <p className="mb-1 small"><span style={{ fontSize: '1.625rem', color: 'black', fontWeight: 800 }}>{price.currency.symbol}{formatPrice(price.plans.part.installmentSize)}</span>/mo</p>
                    <p className="mb-3 small">Total <strong className="text-black">{price.currency.symbol}{formatPrice(price.plans.part.total)}</strong> {price.plans.part.discount > 0 && <><del>{price.currency.symbol}{formatPrice(price.cost)}</del> <span className="text-success fw-bold" style={{ whiteSpace: 'nowrap' }}>Save {price.currency.symbol}{formatPrice(price.plans.part.discount)}</span></>}</p>
                  </div>
                  <Link href={`https://enroll.qcdesignschool.com/all-courses-offer?c=${courseCode}&paymentPlan=part`}><button className="btn btn-secondary w-100">Enroll</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};
