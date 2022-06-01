import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <header>
      <div className='fixed top-0 flex w-screen items-center justify-between bg-secondary_grey_bg p-8 pb-10'>
        <img src='/logo.svg' alt='' className='' />
        {mobileMenu ? (
          <img
            src='/icons/close.svg'
            alt=''
            className=''
            onClick={mobileMenuHandler}
          />
        ) : (
          <img
            src='/icons/hamburger.svg'
            alt=''
            className='h-[13px] w-[24px]'
            onClick={mobileMenuHandler}
          />
        )}
        {mobileMenu && (
          <div className='absolute right-[32px] top-[88px] flex w-[223px] flex-col items-center space-y-8 bg-primary_darkblue py-10'>
            <Link href='/'>
              <a className='font-publicsans text-[12px] leading-[14px] tracking-[2px] text-white'>
                HOME
              </a>
            </Link>
            <Link href='/portfolio'>
              <a className='font-publicsans text-[12px] leading-[14px] tracking-[2px] text-white'>
                PORTFOLIO
              </a>
            </Link>
            <Link href='/contact'>
              <a className='font-publicsans text-[12px] leading-[14px] tracking-[2px] text-white'>
                CONTACT ME
              </a>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
