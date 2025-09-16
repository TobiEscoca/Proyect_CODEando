import React from "react";
import Nav from "./ui/Nav";
import Hero from "./ui/Hero";
import "./App.css";
import Catalog from "./ui/Catalog";

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
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8gYzfVQrlLs3l2RWmAFP_tZCOIjZz3HmceQ&s",
          },
          {
            id: 3,
            name: "JavaScript Básico",
            available: true,
            price: 15999,
            image:
              "https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amF2YXNjcmlwdHxlbnwwfHwwfHx8MA%3D%3D",
          },
          {
            id: 4,
            name: "Sql Básico",
            available: false,
            price: 10999,
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLEgO_wDN7r5q8mBjasl2iMT30HVm4pBiqGg&s",
          },
        ]}
      />
    </div>
  );
};

export default App;
