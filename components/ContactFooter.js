import React from "react";
import ButtonSecondary from "./ButtonSecondary";

const ContactFooter = () => {
  return (
    <React.Fragment>
      <div className='flex flex-col items-center sm:mt-24 sm:flex-row sm:justify-between lg:mt-[150px]'>
        <h2 className='mt-20 mb-10 text-center sm:my-0 sm:max-w-[350px] sm:items-center sm:text-left'>
          Interested in doing a project together?
        </h2>
        <div className='sm:flex sm:flex-grow sm:items-center sm:justify-between'>
          <hr className='hidden sm:mx-8 sm:inline-flex sm:flex-grow' />
          <ButtonSecondary href='/contact'>CONTACT ME</ButtonSecondary>
        </div>
      </div>
      <div className='pt-20 sm:pt-24 lg:pt-[150px]' />
    </React.Fragment>
  );
};

export default ContactFooter;
