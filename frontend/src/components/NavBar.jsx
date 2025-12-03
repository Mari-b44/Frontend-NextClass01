import React from "react";
import { FaClock, FaListUl, FaBookOpen } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const active = location.pathname; // para saber qué opción está activa

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "70px",
        backgroundColor: "#f3f3f3",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        boxShadow: "0 -3px 10px rgba(0,0,0,0.1)",
        zIndex: 1000,
      }}
    >
      {/* Horario */}
      <div
        onClick={() => navigate("/PantallaActual")}
        style={{
          textAlign: "center",
          cursor: "pointer",
          color: active === "/PantallaActual" ? "#8A1E41" : "#333",
        }}
      >
        <FaClock size={28} />
        <p style={{ margin: 0, fontSize: "12px" }}>Horario</p>
      </div>

      {/* Tareas */}
      <div
        onClick={() => navigate("/Tareas")}
        style={{
          textAlign: "center",
          cursor: "pointer",
          color: active === "/Tareas" ? "#8A1E41" : "#333",
        }}
      >
        <FaListUl size={28} />
        <p style={{ margin: 0, fontSize: "12px" }}>Tareas</p>
      </div>

      {/* Asignaturas */}
      <div
        onClick={() => navigate("/Asignaturas")}
        style={{
          textAlign: "center",
          cursor: "pointer",
          color: active === "/Asignaturas" ? "#8A1E41" : "#333",
        }}
      >
        <FaBookOpen size={28} />
        <p style={{ margin: 0, fontSize: "12px" }}>Asignaturas</p>
      </div>
    </div>
  );
}
