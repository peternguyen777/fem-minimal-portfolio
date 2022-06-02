import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <header>
      <div className='fixed top-0 z-30 flex w-screen items-center justify-between bg-secondary_grey_bg p-8 pb-10 sm:px-10 sm:pt-16 sm:pb-12'>
        <Link href='/'>
          <a>
            <img src='/logo.svg' alt='' />
          </a>
        </Link>
        <div className='hidden items-center space-x-[42px] sm:inline-flex sm:items-center'>
          <Link href='/'>
            <a className='font-publicsans text-[12px] leading-[14px] tracking-[2px]'>
              HOME
            </a>
          </Link>
          <Link href='/portfolio'>
            <a className='font-publicsans text-[12px] leading-[14px] tracking-[2px]'>
              PORTFOLIO
            </a>
          </Link>
          <Link href='/contact'>
            <a className='font-publicsans text-[12px] leading-[14px] tracking-[2px]'>
              CONTACT ME
            </a>
          </Link>
        </div>
        {mobileMenu ? (
          <img
            src='/icons/close.svg'
            alt=''
            className='sm:hidden'
            onClick={mobileMenuHandler}
          />
        ) : (
          <img
            src='/icons/hamburger.svg'
            alt=''
            className='h-[13px] w-[24px] sm:hidden'
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
