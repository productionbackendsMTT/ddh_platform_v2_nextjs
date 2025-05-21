import Link from 'next/link';
import React from 'react';

const LogoutModal = () => {
  return (
      <div className=" bg-[#60185E] p[ortrait:rounded-[1.5vh] landscape:rounded-[1.5vw] portrait:rounded-[1.5vh] portrait:border-[.3vh] landscape:border-[.3vw] border-yellow-300 portrait:shadow-[1vh] landscape:shadow-[1vw] portrait:p-[2vh] landscape:p-[2vw] text-white w-full text-center ">
        <h2 className="landscape:text-[1.5vw] portrait:text-[1.5vh] font-bold portrait:mb-[1vh] landscape:mb-[1vw] text-yellow-200">Are you sure?</h2>
        <p className="portrait:mb-[1.5vh] landscape:mb-[1.5vw] landscape:text-[1.2vw] portrait:text-[1.2vh] text-white">You are about to log out of your account.</p>
        <div className="flex justify-center portrait:space-x-[1vh] landscape:space-x-[1vw]">
          <button
            // onClick={onCancel}
            className="bg-gradient-to-r from-pink-500 landscape:text-[1vw] portrait:text-[1vh] to-purple-600 hover:brightness-110 text-white font-bold landscape:py-[.4vw] portrait:py-[.4vh] landscape:px-[1vw] portrait:px-[1vh] rounded-full  transition duration-300"
          >
            Cancel
          </button>
          <Link
            href="/logout"
            className="bg-yellow-400 hover:bg-yellow-500 text-purple-800 font-bold landscape:text-[1vw] portrait:text-[1vh] landscape:py-[.4vw] portrait:py-[.4vh] landscape:px-[1vw] portrait:px-[1vh] rounded-full  transition duration-300"
          >
            Logout
          </Link>
        </div>
    </div>
  );
};

export default LogoutModal;
