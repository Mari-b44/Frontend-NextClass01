import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import RecoverPassword from "./components/RecoverPassword";
import ResetCode from './components/ResetCode';
import NewPassword from './components/NewPassword';
import Success from './components/Success';
import Success2 from './components/Success2';
import PantallaActual from './components/PantallaActual';
import PantallaSeleccion from './components/PantallaSeleccion';
import Tareas from './components/Tareas';
import Asignaturas from './components/Asignatura';
import PerfilAsignatura from './components/PerfilAsignatura';
import AdminScreens from './components/AdminScreens';
import PantallaPrincipal from './components/PantallaAdminPrincipal';
import PantallaHorarios from './components/PantallaHorarios';
import HorarioGuardado from './components/HorarioGuardado';
import AggTareas from './components/AggTareas';
import AddTask from './components/AddTask';
import TareaGuardada from './components/TareaGuardada';


// Control para ocultar NavBar en ciertas pantallas
function Layout({ children }) {
  const location = useLocation();
  
  const hideNavBarRoutes = [
    "/",
    "/login",
    "/register",
    "/recover",
    "/reset",
    "/new",
    "/PantallaActual",
    "/PantallaSeleccion",
    "/Tareas",
    "/Asignaturas",
    "/PerfilAsignatura",
    "/AdminScreens",
    "/PantallaAdminPrincipal",
    "/PantallaHorarios",
    "/HorarioGuardado",
    "/AggTareas",
    "/AddTask",
    "/TareaGuardada",
  ];
  
  const shouldHideNavBar = hideNavBarRoutes.includes(location.pathname);
  
  return (
    <>
      {!shouldHideNavBar && <NavBar />}
      {children}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recover" element={<RecoverPassword />} />
          <Route path="/reset" element={<ResetCode />} />
          <Route path="/new" element={<NewPassword />} />
          <Route path='/success' element={<Success />} />
          <Route path='/success2' element={<Success2 />} />
          <Route path='/PantallaActual' element={<PantallaActual />} />
          <Route path='/PantallaSeleccion' element={<PantallaSeleccion />} />
          <Route path='/Tareas' element={<Tareas />} />
          <Route path='/Asignaturas' element={<Asignaturas />} />
          <Route path='/PerfilAsignatura' element={<PerfilAsignatura />} />
          <Route path='/AdminScreens' element={<AdminScreens />} />
          <Route path='/PantallaAdminPrincipal' element={<PantallaPrincipal />} />
          <Route path='/PantallaHorarios' element={<PantallaHorarios />} />
          <Route path='/HorarioGuardado' element={<HorarioGuardado />} />
          <Route path='/AggTareas' element={< AggTareas />} />
          <Route path='/AddTask' element={< AddTask />} />
          <Route path='/TareaGuardada' element={< TareaGuardada />} />


        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
