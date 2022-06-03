import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PortfolioProjects from "../../components/PortfolioProjects";
import ButtonSecondary from "../../components/ButtonSecondary";
import ContactFooter from "../../components/ContactFooter";

const index = () => {
  return (
    <div>
      <Header />

      <main className='mt-[104px] bg-secondary_grey_bg px-8 sm:mt-[144px] sm:px-10 lg:px-[165px]'>
        {PortfolioProjects.map((item) => {
          return (
            <div
              key={item.title}
              className='sm:mb-[80px] sm:flex sm:items-center sm:last:mb-0 sm:odd:flex-row sm:even:flex-row-reverse'
            >
              <div className='sm:flex-auto'>
                <img src={item.imageMobile} className='sm:hidden' />
                <img
                  src={item.imageTablet}
                  className='hidden sm:inline-block '
                />
              </div>
              <div className='hidden sm:inline-block sm:w-[69px] sm:flex-none' />
              <div className='sm:w-[281px] sm:flex-none'>
                <hr className='mt-8 mb-6 sm:mt-0' />
                <h2 className='mb-6 '>{item.title}</h2>
                <p className='mb-6 text-[15px]'>{item.introduction}</p>
                <ButtonSecondary href={`/portfolio/${item.slug}`}>
                  VIEW PROJECT
                </ButtonSecondary>
                <hr className='mt-6 mb-[72px] sm:mb-0' />
              </div>
            </div>
          );
        })}

        <ContactFooter />
      </main>

      <Footer />
    </div>
  );
};

export default index;
