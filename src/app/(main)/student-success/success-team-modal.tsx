'use client';

import type { FC } from 'react';
import { Modal } from 'react-bootstrap';

interface Props {
  show: boolean;
  handleHide: () => void;
  name?: string;
  title?: string;
  description?: string;
}

export const SuccessTeamModal: FC<Props> = ({ show, handleHide, name, title, description }) => {
  return (
    <Modal show={show} onHide={handleHide}>
      <Modal.Header closeButton>Meet the Student Success Team!</Modal.Header>
      <h4 className="sans-serif text-center mt-3">{name}</h4>
      <h5 className="sans-serif text-center">{title}</h5>
      <Modal.Body>
        <hr />
        <p>{description}</p>
      </Modal.Body>
    </Modal>
  );
};
