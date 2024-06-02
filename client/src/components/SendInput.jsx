import React from 'react';
import { IoMdSend } from 'react-icons/io';

const SendInput = () => {
  return (
    <div className="flex items-center">
      <form action="" className="flex w-full">
        <input
          className="flex-grow bg-[#222630] px-4 py-3 outline-none text-white rounded-l-lg border-2 border-r-0 transition-colors duration-100 focus:border-[#596A95] border-[#2B3040]"
          name="text"
          placeholder="Send a message .."
          type="text"
        />
        <button className="bg-[#222630] px-4 py-3 text-white rounded-r-lg border-2 border-l-0 border-[#2B3040] transition-colors duration-100 hover:bg-[#596A95] flex items-center">
          <IoMdSend />
        </button>
      </form>
    </div>
  );
};

export default SendInput;
