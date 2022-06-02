import Head from "next/head";
import Link from "next/link";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Minimalist Portfolio Website</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon-32x32.png' />
      </Head>

      <Header />

      <main className='mt-[104px] bg-secondary_grey_bg px-8'>
        <img
          src='/homepage/mobile/image-homepage-hero@2x.jpg'
          alt=''
          className='mb-6'
        />
        <h2 className='mb-8'>
          Hey, I'm Alex Spencer and I love building beautiful websites
        </h2>
        <ButtonPrimary href='#about-me-section'>ABOUT ME</ButtonPrimary>
        <img
          src='/homepage/mobile/image-homepage-profile@2x.jpg'
          alt=''
          className='mb-8 mt-24'
        />
        <hr />
        <div id='about-me-section'>
          <h2 className='mb-7 mt-8'>About Me</h2>
          <p className='mb-6'>
            I'm a junior front-end developer looking for a new role in an
            exciting company. I focus on writing accessible HTML, using modern
            CSS practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React, but I can adapt to whatever tools are
            required. I'm based in London, UK, but I'm happy working remotely
            and have experience in remote teams. When I'm not coding, you'll
            find me outdoors. I love being out in nature whether that's going
            for a walk, run or cycling. I'd love you to check out my work.
          </p>

          <ButtonSecondary href='/portfolio'>GO TO PORTFOLIO</ButtonSecondary>
        </div>
        <hr className='mt-[50px]' />
        <div className='flex flex-col items-center'>
          <h2 className='mt-[115px] mb-10 text-center'>
            Interested in doing a project together?
          </h2>
          <ButtonSecondary href='/contact'>CONTACT ME</ButtonSecondary>
          <div className='mt-[50px]' />
        </div>
      </main>

      <Footer />
    </div>
  );
}
