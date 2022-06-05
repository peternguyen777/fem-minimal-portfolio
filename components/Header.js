import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setMobileMenu(!mobileMenu);
  };

  const mobileMenuOffHandler = () => {
    setMobileMenu(false);
  };

  return (
    <header className='fixed top-0 z-30 w-full bg-secondary_grey_bg'>
      <div className='flex items-center justify-between p-8 pb-10 sm:px-10 sm:pt-16 sm:pb-12 xl:mx-auto xl:max-w-[1440px] xl:px-[165px]'>
        <Link href='/'>
          <a>
            <img src='/logo.svg' alt='' />
          </a>
        </Link>
        <div className='hidden items-center space-x-[42px] sm:inline-flex sm:items-center'>
          <Link href='/'>
            <a className='font-publicsans text-[12px] leading-[14px] tracking-[2px] hover:text-primary_cyan'>
              HOME
            </a>
          </Link>
          <Link href='/portfolio'>
            <a className='font-publicsans text-[12px] leading-[14px] tracking-[2px] hover:text-primary_cyan'>
              PORTFOLIO
            </a>
          </Link>
          <Link href='/contact'>
            <a className='font-publicsans text-[12px] leading-[14px] tracking-[2px] hover:text-primary_cyan'>
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
          <div className='absolute right-[32px] top-[88px] flex w-[223px] flex-col items-center space-y-8 bg-primary_darkblue py-10 sm:hidden'>
            <Link href='/'>
              <a
                className='font-publicsans text-[12px] leading-[14px] tracking-[2px] text-white'
                onClick={mobileMenuOffHandler}
              >
                HOME
              </a>
            </Link>
            <Link href='/portfolio'>
              <a
                className='font-publicsans text-[12px] leading-[14px] tracking-[2px] text-white'
                onClick={mobileMenuOffHandler}
              >
                PORTFOLIO
              </a>
            </Link>
            <Link href='/contact'>
              <a
                className='font-publicsans text-[12px] leading-[14px] tracking-[2px] text-white'
                onClick={mobileMenuOffHandler}
              >
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
