import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/Logo.png";
import garra from "../assets/garra.png";

export default function Asignaturas({ onSelect }) {
  const asignaturas = [
    "Gestión de Proyectos II",
    "Integradora",
    "Negociación Empresarial",
    "Inteligencia de Negocios",
    "Inglés",
  ];

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

      {/* BOTONES ELEGANTES Y SOBRIOS */}
      <div className="container mt-5 d-flex flex-column align-items-center">
        {asignaturas.map((nombre, i) => (
          <button
            key={i}
            className="text-white fw-bold shadow"
            style={{
              backgroundColor: "#8A1E41",
              borderRadius: "14px",   // ⬅️ redondeo moderado
              fontSize: "17px",
              padding: "12px 20px",
              width: "250px",         // ⬅️ compacto
              height: "55px",         // ⬅️ uniforme
              marginBottom: "15px",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
              textAlign: "center",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 6px 12px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 3px 6px rgba(0,0,0,0.2)";
            }}
            onClick={() => onSelect(nombre)}
          >
            {nombre}
          </button>
        ))}
      </div>
    </div>
  );
}
