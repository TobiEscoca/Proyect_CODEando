
import React from "react";
import Hero from "../ui/Hero";
import Catalog from "../ui/Catalog";

const Home = () => {
  return (
    <>
      <Hero
        title="Dale un giro a tu carrera profesional"
        subtitle="Aprende y emprende con CODEando"
        backgroundImageUrl="/public/study_session.jpg"
        heightClass="h-[80vh]"
      />
      {/* Ya no pasamos courses, Catalog hace fetch directo */}
      <Catalog />
    </>
  );
};

export default Home;
