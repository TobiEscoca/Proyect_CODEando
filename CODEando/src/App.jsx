import React from "react";
import Nav from "./ui/Nav";
import Hero from "./ui/Hero";
import "./App.css";
import Catalog from "./ui/Catalog";
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
      <Catalog
        courses={[
          {
            id: 1,
            name: "Python Básico",
            available: true,
            price: 9999,
            image:
              "https://images.unsplash.com/photo-1649180556628-9ba704115795?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHl0aG9ufGVufDB8fDB8fHww",
          },
          {
            id: 2,
            name: "Node API",
            available: false,
            price: 15999,
            image:
              "https://static.platzi.com/media/blog/nueva-version-nodejs-npm-41d0c683-dd57-4540-92f2-daff88ec661d.png",
          },
          {
            id: 3,
            name: "JavaScript Básico",
            available: true,
            price: 15999,
            image:
              "https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg",
          },
          {
            id: 4,
            name: "Sql Básico",
            available: false,
            price: 10999,
            image:
              "https://www.mytecbits.com/wp-content/uploads/SQL.png",
          },
        ]}
      />
      <Footer/>
    </div>
  );
};

export default App;
