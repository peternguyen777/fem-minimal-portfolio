import React from "react";
import Link from "next/link";

const ProjectNav = (props) => {
  return (
    <div className='border-primary_darkblue/15 grid grid-cols-2 border-t border-b'>
      <Link href={`/portfolio/${props.prevSlug}`}>
        <div className='border-primary_darkblue/15 sm:item col-span-1 grid cursor-pointer place-items-start border-r sm:flex'>
          <img
            src='/icons/arrow-left.svg'
            alt=''
            className='mt-6 mb-4 sm:my-auto sm:mr-8'
          />
          <div className='sm:my-8'>
            <h3>{props.prevTitle}</h3>
            <p className='mb-6 opacity-50 sm:mb-0'>Previous Project</p>
          </div>
        </div>
      </Link>
      <Link href={`/portfolio/${props.nextSlug}`}>
        <div className='col-span-1 grid cursor-pointer place-items-end sm:flex sm:flex-row-reverse '>
          <img
            src='/icons/arrow-right.svg'
            alt=''
            className='mt-6 mb-4 sm:my-auto sm:ml-8'
          />
          <div className='sm:my-8'>
            <h3 className='text-right'>{props.nextTitle}</h3>
            <p className='mb-6 text-right opacity-50 sm:mb-0'>Next Project</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectNav;
