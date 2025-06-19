'use client'
import React, { ReactNode, useEffect, useState } from 'react';
import PopupBg from '../svg/PopupBg';
import ClosePopup from '../svg/ClosePopup';

type ModalProps = {
  children: ReactNode;
  closeModal: any;
};

const Modal = ({ children, closeModal }: ModalProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 10);
  }, []);

  return (
    <div onClick={closeModal} className="fixed inset-0 z-[200] flex items-center justify-center backdrop-blur-xs">
      <div
        onClick={(e) => e.stopPropagation()} 
        className={`
          relative h-auto p-4
           transition-all duration-300 ease-out
           portrait:w-[50vh] landscape:w-[50vw]
          ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        `}
      >
        <div onClick={closeModal}><ClosePopup /></div>
        <PopupBg />
        <div
          className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
          onClick={(e) => e.stopPropagation()} 
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;