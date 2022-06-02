import React from "react";
import ButtonSecondary from "../../components/ButtonSecondary";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Link from "next/link";

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

        <div className='border-primary_darkblue/15 mb-6 grid grid-cols-2 border-t border-b'>
          <Link href={`/portfolio/${props.projectNav.prevProject.slug}`}>
            <div className='border-primary_darkblue/15 col-span-1 grid place-items-start border-r'>
              <img src='/icons/arrow-left.svg' alt='' className='mt-6 mb-4' />
              <h3>{props.projectNav.prevProject.title}</h3>
              <p className='mb-6 opacity-50'>Previous Project</p>
            </div>
          </Link>
          <Link href={`/portfolio/${props.projectNav.nextProject.slug}`}>
            <div className='col-span-1 grid place-items-end'>
              <img src='/icons/arrow-right.svg' alt='' className='mt-6 mb-4' />
              <h3 className='text-right'>
                {props.projectNav.nextProject.title}
              </h3>
              <p className='mb-6 text-right opacity-50'>Next Project</p>
            </div>
          </Link>
        </div>

        <div className='flex flex-col items-center'>
          <h2 className='mt-16 mb-10 text-center'>
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
