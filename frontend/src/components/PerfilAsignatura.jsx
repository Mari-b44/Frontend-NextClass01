import React from "react";
import garra from "../assets/garra.png";
import Mayra from "../assets/Mayra.jpeg";

export default function PerfilAsignatura({ materia, onBack }) {
  return (
    <div className="min-vh-100 bg-light" style={{ overflowX: "hidden" }}>
      {/* Encabezado con degradado */}
      <div
        className="w-100 p-4 text-white position-relative"
        style={{
          background: "linear-gradient(135deg, #8CD6D3, #1B8BA1)",
          borderBottomLeftRadius: "80px",
          borderBottomRightRadius: "80px",
        }}
      >
        {/* Botón de regresar */}
        <button
          className="btn text-white fs-3"
          style={{ position: "absolute", left: 10, top: 15 }}
          onClick={onBack}
        >
          ←
        </button>

        <h2 className="text-center fw-bold mt-4">Asignaturas</h2>

        {/* Imagen decorativa */}
        <img
          src={garra}
          alt="garra"
          style={{
            width: "70px",
            position: "absolute",
            right: 30,
            top: 90,
          }}
        />
      </div>

      {/* Contenido principal */}
      <div className="container mt-4">
        {/* Nombre de la materia */}
        <h4
          className="text-center fw-bold text-white p-2 mx-auto"
          style={{
            backgroundColor: "#8A1E41",
            width: "fit-content",
            borderRadius: "12px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          {materia}
        </h4>

        {/* Foto fija de Mayra */}
        <div className="text-center mt-3">
          <img
            src={Mayra}
            alt="Docente"
            style={{
              width: "170px",
              height: "170px",
              borderRadius: "12px",
              objectFit: "cover",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            }}
          />
        </div>

        {/* Botones */}
        <div className="d-flex justify-content-center gap-3 mt-3">
          <button
            className="btn text-white"
            style={{ backgroundColor: "#8A1E41", borderRadius: "20px" }}
          >
            Asesorías
          </button>

          <button
            className="btn text-white"
            style={{ backgroundColor: "#2AA66A", borderRadius: "20px" }}
          >
            Cronograma del docente
          </button>
        </div>

        {/* Información */}
        <div className="mt-4 px-3">
          <h5 className="fw-bold">Porcentajes de evaluación</h5>
          <p className="ms-3">
            Ser – 40% <br />
            Saber – 10%
          </p>

          <h5 className="fw-bold mt-3">Unidades</h5>
          <p className="ms-3">
            Unidad 1 – 30% | 8 septiembre al 30 octubre
            <br />
            Unidad 2 – 70% | 2 noviembre al 19 diciembre
          </p>

          <h5 className="fw-bold mt-3">Notas</h5>
          <p className="ms-3">
            Se tendrá en cuenta asistencia mínima del 80% para poder ser evaluado.
          </p>
        </div>
      </div>
    </div>
  );
}
