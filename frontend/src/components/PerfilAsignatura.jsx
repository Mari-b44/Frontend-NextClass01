import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import garra from "../assets/garra.png";

// FOTOS DE DOCENTES
import Mayra from "../assets/Mayra.jpeg";
import Ruby from "../assets/Ruby.jpeg";
import Norma from "../assets/Norma.jpeg";
import Cuper from "../assets/Cuper.jpeg";
import Yibran from "../assets/Yibran.jpeg";

export default function PerfilAsignatura() {
  const location = useLocation();
  const navigate = useNavigate();

  const materia = location.state?.asignatura;

  const [mostrar, setMostrar] = useState("info");

  useEffect(() => {
    if (!materia) {
      navigate("/Asignaturas");
    }
  }, [materia, navigate]);

  if (!materia) return null;

  // 📌 BASE DE DATOS DE TODAS LAS MATERIAS
  const infoMaterias = {
    "Gestión de Proyectos II": {
      docente: "Ing. Mayra Ibarra",
      foto: Mayra,
      porcentajes: { ser: "30%", saber: "20%", hacer: "50%" },
      unidades: [
        "Unidad 1 – 35% | 8 septiembre al 15 octubre",
        "Unidad 2 – 65% | 20 octubre al 19 diciembre",
      ],
      notas: "El proyecto debe entregarse en todas sus fases completas.",
      asesorias: ["📅 Lunes 12:30 - 1:30", "📅 Martes 3:00 - 4:00"],
      cronograma: [
        "✔️ 15 septiembre — Fase 1",
        "✔️ 25 octubre — Fase 2",
        "✔️ 15 diciembre — Entrega final"
      ]
    },

    Integradora: {
      docente: "Mtra. Norma",
      foto: Norma,
      porcentajes: { ser: "20%", saber: "20%", hacer: "60%" },
      unidades: [
        "Unidad 1 – 40% | 8 septiembre al 30 octubre",
        "Unidad 2 – 60% | 4 noviembre al 19 diciembre",
      ],
      notas: "Se evalúa participación, entregables y bitácoras.",
      asesorias: ["📅 Jueves 4:00 - 6:00"],
      cronograma: ["✔️ Septiembre — Avance", "✔️ Noviembre — Presentación final"]
    },

    "Programación de Aplicaciones Web": {
      docente: "Mt. Cuper",
      foto: Cuper,
      porcentajes: { ser: "40%", saber: "10%", hacer: "50%" },
      unidades: [
        "Unidad 1 – 30% | 8 septiembre al 30 octubre",
        "Unidad 2 – 70% | 2 noviembre al 19 diciembre",
      ],
      notas: "El uso de Git y control de versiones es obligatorio.",
      asesorias: ["📅 Viernes 11:00 - 1:00"],
      cronograma: ["✔️ 12 septiembre — UI", "✔️ 25 noviembre — CRUD"]
    },

    "Inteligencia de Negocios": {
      docente: "Mt. Yibran",
      foto: Yibran,
      porcentajes: { ser: "25%", saber: "25%", hacer: "50%" },
      unidades: [
        "Unidad 1 – 50% | 8 septiembre al 25 octubre",
        "Unidad 2 – 50% | 28 octubre al 19 diciembre",
      ],
      notas: "Se debe entregar dashboard final en Power BI o Tableau.",
      asesorias: ["📅 Lunes 9:00 - 10:30"],
      cronograma: ["✔️ Octubre — Dataset", "✔️ Noviembre — Dashboard"]
    },

    Inglés: {
      docente: "Mtra. Rubí ",
      foto: Ruby,
      porcentajes: { ser: "40%", saber: "10%", hacer: "50%" },
      unidades: [
        "Unidad 1 – 30% | 8 septiembre al 30 octubre",
        "Unidad 2 – 70% | 2 noviembre al 19 diciembre",
      ],
      notas: "Se tomará en cuenta la participación oral.",
      asesorias: ["📅 Miércoles 3:00 - 5:00"],
      cronograma: ["✔️ 20 septiembre — Presentación", "✔️ 12 noviembre — Ensayo"]
    },
  };

  const data = infoMaterias[materia];

  return (
    <div className="min-vh-100 bg-light" style={{ overflowX: "hidden" }}>

      {/* ENCABEZADO */}
      <div
        className="w-100 p-4 text-white position-relative"
        style={{
          background: "linear-gradient(135deg, #8CD6D3, #1B8BA1)",
          borderBottomLeftRadius: "80px",
          borderBottomRightRadius: "80px",
        }}
      >
        <button
          className="btn text-white fs-3"
          style={{ position: "absolute", left: 10, top: 15 }}
          onClick={() => navigate(-1)}
        >
          ←
        </button>

        <h2 className="text-center fw-bold mt-4">Asignaturas</h2>

        <img
          src={garra}
          alt="garra"
          style={{ width: "70px", position: "absolute", right: 30, top: 90 }}
        />
      </div>

      {/* CONTENIDO */}
      <div className="container mt-4">

        {/* MATERIA */}
        <h4
          className="text-center fw-bold text-white p-2 mx-auto"
          style={{
            backgroundColor: "#8A1E41",
            width: "fit-content",
            borderRadius: "12px"
          }}
        >
          {materia}
        </h4>

        {/* FOTO */}
        <div className="text-center mt-2">
          <img
            src={data.foto}
            alt="Docente"
            style={{
              width: "175px",
              height: "175px",
              borderRadius: "50%",
              objectFit: "cover"
            }}
          />
        </div>

        {/* BOTONES */}
        <div className="d-flex justify-content-center gap-3 mt-3">
          <button
            className="btn text-white"
            style={{ backgroundColor: "#8A1E41", borderRadius: "20px" }}
            onClick={() => setMostrar("asesorias")}
          >
            Asesorías
          </button>

          <button
            className="btn text-white"
            style={{ backgroundColor: "#2AA66A", borderRadius: "20px" }}
            onClick={() => setMostrar("cronograma")}
          >
            Cronograma
          </button>
        </div>

        {/* INFORMACIÓN */}
        <div className="mt-4 px-3">

          {mostrar === "asesorias" && (
            <>
              <h5 className="fw-bold">📝 Asesorías</h5>
              {data.asesorias.map((a, i) => (
                <p key={i} className="ms-3">{a}</p>
              ))}
            </>
          )}

          {mostrar === "cronograma" && (
            <>
              <h5 className="fw-bold">📚 Cronograma</h5>
              {data.cronograma.map((c, i) => (
                <p key={i} className="ms-3">{c}</p>
              ))}
            </>
          )}

          {mostrar === "info" && (
            <>
              <h5 className="fw-bold">Docente</h5>
              <p className="ms-3">{data.docente}</p>

              <h5 className="fw-bold">Porcentajes de evaluación</h5>
              <p className="ms-3">
                Ser – {data.porcentajes.ser} <br />
                Saber – {data.porcentajes.saber} <br />
                Hacer – {data.porcentajes.hacer}
              </p>

              <h5 className="fw-bold mt-3">Unidades</h5>
              <p className="ms-3">
                {data.unidades.map((u, i) => (
                  <span key={i}>{u}<br /></span>
                ))}
              </p>

              <h5 className="fw-bold mt-3">Notas</h5>
              <p className="ms-3">{data.notas}</p>
            </>
          )}

        </div>
      </div>
    </div>
  );
}
