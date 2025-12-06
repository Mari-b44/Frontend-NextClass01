import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/Logo.png";
import garra from "../assets/garra.png";

export default function Asignaturas() {
  const navigate = useNavigate();

  const asignaturas = [
    "Gestión de Proyectos II",
    "Integradora",
    "Programación de Aplicaciones Web",
    "Inteligencia de Negocios",
    "Inglés",
  ];

  // 👉 ESTA ES LA FUNCIÓN QUE ENVÍA LA MATERIA POR NAVEGACIÓN
  const irAAsignatura = (nombre) => {
    navigate("/PerfilAsignatura", {
      state: { asignatura: nombre },
    });
  };

  return (
    <div className="min-vh-100 bg-light" style={{ overflowX: "hidden" }}>
      
      {/* ENCABEZADO */}
      <div
        className="w-100 p-4 text-white position-relative"
        style={{
          background: "linear-gradient(135deg, #8CD6D3, #1B8BA1)",
          borderBottomLeftRadius: "80px",
          borderBottomRightRadius: "80px",
          paddingBottom: "90px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
        }}
      >
        <img
          src={Logo}
          alt="icon"
          style={{ width: "45px", position: "absolute", right: 20, top: 20 }}
        />

        <h2 className="text-center fw-bold mt-4">Asignaturas</h2>

        <img
          src={garra}
          alt="garra"
          style={{
            width: "80px",
            position: "absolute",
            right: 25,
            top: 90,
            opacity: 0.9,
          }}
        />
      </div>

      {/* BOTONES */}
      <div className="container mt-5 d-flex flex-column align-items-center">
        {asignaturas.map((nombre, i) => (
          <button
            key={i}
            className="text-white fw-bold shadow"
            style={{
              backgroundColor: "#8A1E41",
              borderRadius: "14px",
              fontSize: "17px",
              padding: "12px 20px",
              width: "250px",
              height: "55px",
              marginBottom: "15px",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={() => irAAsignatura(nombre)}
          >
            {nombre}
          </button>
        ))}
      </div>
    </div>
  );
}
