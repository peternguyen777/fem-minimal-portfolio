import React, { useState } from "react";

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
      </div>
    </header>
  );
};

export default Header;
