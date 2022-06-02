import React, { useState } from "react";
import Link from "next/link";

const ButtonPrimary = (props) => {
  const [mouseHover, setMouseHover] = useState(false);

  const mouseOverHandler = () => {
    setMouseHover(true);
  };

  const mouseOffHandler = () => {
    setMouseHover(false);
  };

  return (
    <Link href={props.href}>
      <button
        onMouseOver={mouseOverHandler}
        onMouseLeave={mouseOffHandler}
        className='flex h-[48px] w-[200px] items-center bg-primary_blue hover:bg-primary_cyan disabled:bg-primary_blue/20'
      >
        <div className='flex h-[48px] w-[48px] items-center justify-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='14'
            className={`z-10 ${
              mouseHover ? "stroke-white" : "stroke-primary_cyan"
            }`}
          >
            <g fill='none' fillRule='evenodd'>
              <path d='M0 9l8 4 8-4' />
              <path opacity='.5' d='M0 5l8 4 8-4' />
              <path opacity='.25' d='M0 1l8 4 8-4' />
            </g>
          </svg>
          <div className='absolute h-[48px] w-[48px] bg-black opacity-10'></div>
        </div>
        <p className='w-[152px] text-[12px] leading-[14px] tracking-[2px] text-white'>
          {props.children}
        </p>
      </button>
    </Link>
  );
};

export default ButtonPrimary;
