import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Imágenes
import hallway from "../assets/hallway.png";
import garra from "../assets/garra.png";
import Logo from "../assets/Logo.png";

export default function PantallaSeleccion() {
  return (
    <div
      className="w-100 min-vh-100 bg-light p-0 m-0"
      style={{ fontFamily: "Arial", overflowY: "auto" }}
    >
      <div className="bg-white shadow rounded-4 overflow-hidden w-100">

        {/* ENCABEZADO */}
        <div
          className="p-3 position-relative"
          style={{
            background: "linear-gradient(180deg,#87D4D3,#78C6C0)",
            borderBottomLeftRadius: "25px",
            borderBottomRightRadius: "25px",
          }}
        >
          {/* FLECHA */}
          <button className="btn text-white fw-bold" style={{ fontSize: 22 }}>
            ←
          </button>

          {/* OCTUBRE */}
          <h5 className="text-center text-white fw-bold m-0 mt-1">
            OCTUBRE
          </h5>

          {/* ICONO */}
          <img
            src={Logo}
            alt="icon"
            style={{
              position: "absolute",
              right: "15px",
              top: "18px",
              width: "45px",
              height: "45px",
            }}
          />

          {/* DÍAS */}
          <div className="d-flex justify-content-center gap-4 text-white fw-semibold mt-3">
            <span>Lun</span>
            <span className="border-bottom border-2 pb-1">Mar</span>
            <span>Mier</span>
            <span>Jue</span>
            <span>Vie</span>
          </div>
        </div>

        {/* CONTENIDO */}
        <div
          className="p-3 bg-white"
          style={{
            paddingTop: "55px",
            position: "relative",
          }}
        >
          {/* GARRA */}
          <img
            src={garra}
            alt="garra"
            style={{
              position: "absolute",
              top: "-35px",
              right: "10px",
              width: "70px",
            }}
          />

          {/* TÍTULO SELECCIÓN */}
          <h6 className="fw-bold mt-1" style={{ color: "#278c64ff" }}>
            Selección
          </h6>

          <div className="d-flex justify-content-between mt-1">
            <span className="fw-bold fs-5">Docencia I</span>

            <span className="fw-bold text-end">
              Hora<br />
              2:30 - 4:30
            </span>
          </div>

          {/* IMAGEN */}
          <img
            src={hallway}
            alt="hallway"
            className="w-100 rounded-3 mt-3"
          />

          {/* BOTONES */}
          <div className="d-flex justify-content-between mt-3">
            {/* SALÓN */}
            <div
              className="text-white p-2 rounded-3 fw-bold text-center"
              style={{ width: "47%", background: "#8C274C" }}
            >
              Laboratorio<br />Idiomas
            </div>

            {/* ASIGNATURA */}
            <div
              className="text-white p-2 rounded-3 fw-bold text-center"
              style={{ width: "47%", background: "#2DA683" }}
            >
              Asignatura<br />Inglés
            </div>
          </div>

          <h6 className="mt-3">Siguientes asignaturas</h6>

          <div className="bg-dark text-white p-2 rounded mb-2">
            Laboratorio 1 — Programación de Aplicaciones Web Progresivas
          </div>
        </div>
      </div>
    </div>
  );
}
