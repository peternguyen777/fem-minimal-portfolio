import React from "react";

const ButtonSendMessage = (props) => {
  return (
    <button
      type='submit'
      className='flex items-center justify-center border  border-primary_darkblue bg-primary_darkblue px-8 py-4 font-publicsans text-[12px] leading-[14px] tracking-[2px] text-white disabled:opacity-20'
    >
      {props.children}
    </button>
  );
};

export default ButtonSendMessage;
