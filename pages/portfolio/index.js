import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PortfolioProjects from "../../components/PortfolioProjects";
import ButtonSecondary from "../../components/ButtonSecondary";

const index = () => {
  return (
    <div>
      <Header />

      <main className='mt-[104px] bg-secondary_grey_bg px-8'>
        {PortfolioProjects.map((item) => {
          return (
            <div key={item.title}>
              <img src={item.imageMobile} />
              <hr className='mt-8 mb-6' />
              <h2 className='mb-6'>{item.title}</h2>
              <p className='mb-6 text-[15px]'>{item.introduction}</p>
              <ButtonSecondary href={`/portfolio/${item.slug}`}>
                VIEW PROJECT
              </ButtonSecondary>
              <hr className='mt-6 mb-[72px]' />
            </div>
          );
        })}
        <div className='flex flex-col items-center'>
          <h2 className='mt-2 mb-10 text-center'>
            Interested in doing a project together?
          </h2>
          <ButtonSecondary href='/contact'>CONTACT ME</ButtonSecondary>
          <div className='mt-[80px]' />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default index;
