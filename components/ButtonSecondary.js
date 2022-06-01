import React from "react";

const ButtonSecondary = (props) => {
  return (
    <button className='flex items-center justify-center border border-black px-8 py-4 font-publicsans text-[12px] leading-[14px] tracking-[2px] hover:border-primary_darkblue hover:bg-primary_darkblue hover:text-white disabled:opacity-20'>
      {props.children}
    </button>
  );
};

export default ButtonSecondary;
