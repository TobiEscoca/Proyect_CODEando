import React from "react";
import Hero from "../ui/Hero";
import Catalog from "../ui/Catalog";
import courses from "../data/courses";

const Home = () => {
  return (
    <>
      <Hero
        title="Dale un giro a tu carrera profesional"
        subtitle="Aprende y emprende con CODEando"
        backgroundImageUrl="/public/study_session.jpg"
        heightClass="h-[80vh]"
      />
      <Catalog courses={courses} />
    </>
  );
};

export default Home;
