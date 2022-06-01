import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useRouter } from "next/router";

const DetailPortfolio = () => {
  const router = useRouter();
  const { projectId } = router.query;

  return (
    <div>
      <Header />
      <main className='mt-[104px] bg-secondary_grey_bg px-8'>
        <h2>the {projectId} project</h2>
      </main>
      <Footer />
    </div>
  );
};

export default DetailPortfolio;
