import React from "react";

import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoMdCopy } from 'react-icons/io';

const IdeaCard = ({ title, description, phone, email }) => {
  
  const handleCopyClick = async (textToCopy) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      alert(`Text copied to clipboard! ${textToCopy}`);
    } catch (err) {
      console.error('Unable to copy text to clipboard', err);
      alert('Failed to copy text to clipboard. Please try again.');
    }
  };

  return (
    <div class="max-w-sm w-[350px] p-6 bg-white border border-gray-200 rounded-lg shadow-lg drop-shadow-lg ">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
        {title}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 ">💡{description}</p>
      <div className=" flex mt-2 justify-between   items-center  ">
        <p className="flex items-center gap-2 " onClick={handleCopyClick}>
          <BsTelephoneFill /> 
          {phone}  
          <IoMdCopy className="cursor-pointer" />
        </p>
      </div>
      <div className=" flex mt-2 justify-between   items-center ">
        <p className=" flex items-center gap-1 ">
          <MdEmail />
          {email}
          <IoMdCopy className="cursor-pointer" />
        </p>
      </div>
    </div>
  );
};

export default IdeaCard;
