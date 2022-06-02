import React from "react";
import ButtonSecondary from "../../components/ButtonSecondary";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import PortfolioProjects from "../../components/PortfolioProjects";

const DetailPortfolio = (props) => {
  return (
    <div>
      <Header />
      <main className='mt-[104px] bg-secondary_grey_bg px-8'>
        <img src={props.projectData.heroMobile} alt='' />
        <hr className='mt-10 mb-6' />
        <h2 className='mb-6'>{props.projectData.title}</h2>
        <p className='mb-6 text-[15px]'>{props.projectData.introduction}</p>
        <h6>{props.projectData.category}</h6>
        <h6 className='mb-6'>{props.projectData.languages}</h6>
        <ButtonSecondary href='/'>VISIT WEBSITE</ButtonSecondary>
        <hr className='mt-6 mb-12' />
        <h3 className='mb-7'>Project Background</h3>
        <p className='mb-10 text-[15px]'>{props.projectData.background}</p>
        <h3 className='mb-7'>Static Previews</h3>
        <img src={props.projectData.previewMobile} alt='' className='mb-6' />
        <img src={props.projectData.preview2Mobile} alt='' className='mb-16' />
      </main>
      <Footer />
    </div>
  );
};

export default DetailPortfolio;

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: PortfolioProjects.map((project) => ({
      params: { projectId: project.slug.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const projectId = context.params.projectId;

  const selectedProject = PortfolioProjects.find(
    ({ slug }) => slug === projectId
  );

  return {
    props: {
      projectData: selectedProject,
    },
  };
}
