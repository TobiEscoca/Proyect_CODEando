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
import FiltCourses from "./pages/FiltCourses";
import AdminCrearCurso from "./pages/AdminCrearCurso.jsx";
import CrearProfesor from "./pages/CrearProfesor";
import MisCursos from "./pages/MisCursos.jsx"
import ProfePanel from "./pages/ProfePanel.jsx"
import AdminProfesores from "./pages/AdminProfesores.jsx"
import { RequireRole } from "./routes/guards";  // <-- importa guard

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
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
          <Route path="/category/:category" element={<FiltCourses />} />

          {/* SOLO SUPERADMIN (3) */}
          <Route
            path="/superadmin/crear-profesor"
            element={
              <RequireRole roles={[3]}>
                <CrearProfesor />
              </RequireRole>
            }
          />

          {/* PROFESOR (2) y SUPERADMIN (3) */}
          <Route
            path="/admin/crear-curso"       // si preferís /profesor/crear-curso, cambialo aquí y en el Nav
            element={
              <RequireRole roles={[2, 3]}>
                <AdminCrearCurso />
              </RequireRole>
            }
          />
          <Route
            path="/mis-cursos"
            element={
              <RequireRole roles={[1, 2, 3]}>
                <MisCursos />
              </RequireRole>
            }
          />

          <Route
            path="/profesor"
            element={
              <RequireRole roles={[2]}>
                <ProfePanel />
              </RequireRole>
            }
          />

          <Route
            path="/admin/profesores"
            element={
              <RequireRole roles={[3]}>
                <AdminProfesores />
              </RequireRole>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
