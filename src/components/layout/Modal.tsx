'use client'
import React, { ReactNode, useEffect, useState } from 'react';

type ModalProps = {
  children: ReactNode;
  closeModal: any;
};

const Modal = ({ children,closeModal}: ModalProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 10);
  }, []);

  return (
    <div onClick={closeModal} className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs">
      <div
        className={`
          relative w-auto h-auto p-4
           transition-all duration-300 ease-out
          ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
