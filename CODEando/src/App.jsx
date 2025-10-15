import React from "react";
import Nav from "./ui/Nav";
import Footer from "./ui/Footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Ustedes from "./pages/Ustedes";
import Ayuda from "./pages/Ayuda";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CursoInfo from "./pages/CursoInfo";
import Terminos from "./pages/Terminos";
import Privacidad from "./pages/Privacidad";
import Soporte from "./pages/Soporte";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      {/* Fondo unificado */}
      <main className="flex-1 bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/ustedes" element={<Ustedes />} />
          <Route path="/ayuda" element={<Ayuda />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/soporte" element={<Soporte />} />
          <Route path="/InfoCurso/:courseId" element={<CursoInfo />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
