'use client'
import React, { useState } from "react";
import Image from "next/image";
import Navigation from "./Navigation";
import FooterBg from "../svg/FooterBg";
import Modal from "./Modal";
import SpinWheelPopup from "../modals/spinWheelPopup";

const Footer = () => {
  const [open, setOpen] = useState(false)
  
  const handelOpen = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setOpen(!open)
    e.stopPropagation();

  }

  return (
    <>
      <div className="w-full relative z-[9] flex items-center justify-center">
        {/* <FooterBg /> */}
        {/* <Navigation /> */}
        {/* Spin Wheel */}
        <button onClick={(e)=>handelOpen(e)}>
          <Image src={'/assets/images/spin_wheel.png'} alt="spin_wheel" width={2000} height={2000} quality={100} className="cursor-pointer landscape:w-[13vw] absolute right-0 bottom-0 portrait:w-[13vh]" />
        </button>
      </div>
      {open&&<Modal closeModal={handelOpen}><SpinWheelPopup closeModal={handelOpen}/></Modal>}
    </>
  );
};

export default Footer;