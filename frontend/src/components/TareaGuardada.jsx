import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Imágenes
import garra from "../assets/garra.png";
import logo from "../assets/icon.png";

export default function TareaGuardada({ onClose }) {
  return (
    <div
      className="w-100 min-vh-100"
      style={{
        background: "linear-gradient(180deg,#6CC7C5,#1E8B8A)",
        fontFamily: "Arial",
        position: "relative",
      }}
    >
      {/* LOGO y título arriba */}
      <div className="text-center pt-4">
        <img src={logo} alt="logo" style={{ width: "120px" }} />
        <h4 className="text-white fw-bold mt-2">NEXTCLASS</h4>
      </div>

      {/* PANEL BLANCO GRANDE */}
      <div
        className="bg-white shadow-lg position-absolute start-50 translate-middle-x p-4 text-center"
        style={{
          top: "45%",              // Esto hace que inicie a la mitad
          width: "100%",
          maxWidth: "400px",
          height: "55vh",          // Para que cubra hacia abajo
          borderTopLeftRadius: "25px",
          borderTopRightRadius: "25px",
        }}
      >
        {/* Garra */}
        <img
          src={garra}
          alt="garra"
          style={{
            width: "75px",
            position: "absolute",
            right: "-5px",
            top: "-35px",
          }}
        />

        <h5 className="fw-bold" style={{ color: "#1E8B8A" }}>Tarea guardada</h5>

        <p className="text-muted" style={{ fontSize: "14px" }}>
          La tarea se guardó con éxito
        </p>

        <button
          className="btn text-white fw-bold mt-3"
          onClick={onClose}
          style={{
            background: "#117A7A",
            width: "160px",
            borderRadius: "20px",
            padding: "8px 0",
          }}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}
