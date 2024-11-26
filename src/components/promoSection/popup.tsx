'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

import { gbpCountry } from '@/lib/currencies';

type Props = {
  show: boolean;
  onHide: () => void;
  countryCode: string;
};

export const Popup: FC<Props> = props => {
  const [ discount, fullPaymentDiscount, totalDiscount ] = gbpCountry(props.countryCode)
    ? [ '£100', '£200', '£300' ]
    : [ '$100', '$400', '$500' ];

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton><strong className="text-black">Black Friday Special</strong></Modal.Header>
      <Modal.Body>
        <h6>Enroll in One QC Design School Course and Get a Second Course FREE!</h6>
        <p>Take advantage of this Black Friday deal and jumpstart your design career! Here's what you'll get:</p>
        <ul>
          <li><b>BOGO Offer:</b> Get a second course of equal or lesser value absolutely FREE.</li>
          <li><b>{discount} Off Tuition:</b> Save instantly when you enroll.</li>
          <li><b>Pay in Full Discount:</b> Save up to {fullPaymentDiscount} more when you pay in full—bringing your total savings to as much as {totalDiscount}!</li>
        </ul>
        <p><em>Limited time only—don't miss out!</em></p>
        <h6>BONUS: Career Catalyst Toolkit</h6>
        <p>Every enrollment comes with tools to launch your design career:</p>
        <ul>
          <li>A personalized video call with an industry expert for tailored mentorship</li>
          <li>4 months of free access to Design Files for practical, hands-on experience</li>
          <li>Exclusive Canva templates to streamline your business</li>
        </ul>
        <div className="text-center"><a href="https://enroll.qcdesignschool.com"><button className="btn btn-primary shadow-sm">Enroll Now</button></a></div>
      </Modal.Body>
    </Modal>
  );
};
