import React from "react";
import ButtonSecondary from "../../components/ButtonSecondary";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ContactFooter from "../../components/ContactFooter";
import ProjectNav from "../../components/ProjectNav";

import PortfolioProjects from "../../components/PortfolioProjects";

const DetailPortfolio = (props) => {
  return (
    <div className='flex min-h-screen flex-col justify-between'>
      <Header />
      <main className='mt-[104px] bg-secondary_grey_bg px-8 sm:mt-[144px] sm:px-10 xl:mx-auto xl:max-w-[1440px] xl:px-[165px]'>
        <img src={props.projectData.heroMobile} alt='' className='sm:hidden' />
        <img
          src={props.projectData.heroTablet}
          alt=''
          className='hidden sm:inline-block xl:hidden'
        />
        <img
          src={props.projectData.heroDesktop}
          alt=''
          className='hidden xl:inline-block'
        />
        <div className='xl:mt-[115px] xl:flex xl:justify-between'>
          <div className='xl:w-[350px]'>
            <hr className='mt-10 mb-6 xl:mt-0 xl:mb-12' />
            <div className='sm:mt-8 sm:mb-8 sm:flex xl:flex-col'>
              <div className='sm:w-[350px] sm:flex-none xl:w-auto xl:flex-auto'>
                <h2 className='mb-6'>{props.projectData.title}</h2>
                <p className='mb-6 text-[15px] sm:hidden xl:inline-block'>
                  {props.projectData.introduction}
                </p>
                <h6>{props.projectData.category}</h6>
                <h6 className='mb-6'>{props.projectData.languages}</h6>
                <ButtonSecondary href={props.projectData.website}>
                  VISIT WEBSITE
                </ButtonSecondary>
              </div>
              <p className='mb-6 hidden text-[15px] sm:inline-block xl:hidden'>
                {props.projectData.introduction}
              </p>
            </div>
            <hr className='mt-6 mb-12 sm:mb-10' />
          </div>
          <div className='hidden xl:inline-block xl:min-w-[125px]'></div>
          <div className='xl:w-[635px] xl:flex-none'>
            <h3 className='mb-7'>Project Background</h3>
            <p className='mb-10 text-[15px]'>{props.projectData.background}</p>
            <h3 className='mb-7 sm:mb-10'>Static Previews</h3>
            <img
              src={props.projectData.previewMobile}
              alt=''
              className='mb-6 sm:hidden'
            />
            <img
              src={props.projectData.preview2Mobile}
              alt=''
              className='mb-16 sm:hidden'
            />
            <img
              src={props.projectData.previewTablet}
              alt=''
              className='hidden sm:mb-8 sm:inline-block xl:hidden'
            />
            <img
              src={props.projectData.preview2Tablet}
              alt=''
              className='hidden sm:mb-20 sm:inline-block xl:hidden'
            />
            <img
              src={props.projectData.previewDesktop}
              alt=''
              className='hidden sm:mb-8 xl:inline-block'
            />
            <img
              src={props.projectData.preview2Desktop}
              alt=''
              className='hidden sm:mb-16 xl:inline-block'
            />
          </div>
        </div>

        <ProjectNav
          prevSlug={props.projectNav.prevProject.slug}
          prevTitle={props.projectNav.prevProject.title}
          nextSlug={props.projectNav.nextProject.slug}
          nextTitle={props.projectNav.nextProject.title}
        />

        <ContactFooter />
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

  const selectedProjectId = selectedProject.id;

  let prevProject;
  let nextProject;

  if (selectedProjectId - 1 < 0) {
    prevProject = PortfolioProjects.find(
      ({ id }) => id === PortfolioProjects.length - 1
    );
    nextProject = PortfolioProjects.find(
      ({ id }) => id === selectedProjectId + 1
    );
  } else if (selectedProjectId === PortfolioProjects.length - 1) {
    prevProject = PortfolioProjects.find(
      ({ id }) => id === selectedProjectId - 1
    );
    nextProject = PortfolioProjects.find(({ id }) => id === 0);
  } else {
    prevProject = PortfolioProjects.find(
      ({ id }) => id === selectedProjectId - 1
    );
    nextProject = PortfolioProjects.find(
      ({ id }) => id === selectedProjectId + 1
    );
  }

  return {
    props: {
      projectData: selectedProject,
      projectNav: {
        prevProject,
        nextProject,
      },
    },
  };
}
