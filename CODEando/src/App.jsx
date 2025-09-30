import React from "react";
import Nav from "./ui/Nav";
import Hero from "./ui/Hero";
import "./App.css";
import Catalog from "./ui/Catalog";
import courses from "./data/courses";
import Footer from "./ui/Footer";

const App = () => {
  return (
    <div>
      <Nav />
      <Hero
        title="Dale un giro a tu carrera profesional"
        subtitle="Aprende y emprende con CODEando"
        backgroundImageUrl="/public/study_session.jpg"
        heightClass="h-[80vh]"
      />
      <Catalog courses={courses} />
      <Footer />
    </div>
  );
};

export default App;
