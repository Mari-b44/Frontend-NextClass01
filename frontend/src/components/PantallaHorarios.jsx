import React from "react";
import garra from "../assets/garra.png"; // icono de la garra

export default function HorarioScreen() {

  const times = [
    "7:00 - 8:00",
    "8:00 - 9:00",
    "9:00 - 10:00",
    "11:00 - 12:00",
    "12:00 - 12:30",
    "12:30 - 13:30",
    "13:30 - 14:30",
    "14:30 - 15:30",
    "15:30 - 16:30",
    "14:30 - 15:30",
    
  ];

  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-start"
      style={{
        background: "linear-gradient(180deg, #7ad0cc, #def0ef)",
        paddingTop: 30,
      }}
    >

      {/* CONTENEDOR PRINCIPAL */}
      <div
        className="bg-white shadow-sm"
        style={{
          width: 360,
          borderRadius: 25,
          overflow: "hidden",
        }}
      >

        {/* HEADER */}
        <div
          className="d-flex align-items-center justify-content-between px-3 py-3"
          style={{ backgroundColor: "#41bfb9" }}
        >
          {/* ICONO REGRESAR */}
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ cursor: "pointer" }}
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>

          <h5 className="text-white m-0">Horario</h5>

          <img src={garra} alt="garra" style={{ height: 38 }} />
        </div>

        {/* CONTENIDO */}
        <div className="p-3">

          {/* DÍAS */}
          <div className="d-flex justify-content-between mb-3">
            {["L", "M", "M", "J", "V"].map((dia, i) => (
              <button
                key={i}
                className="btn"
                style={{
                  width: 48,
                  height: 40,
                  borderRadius: 10,
                  backgroundColor: i === 0 ? "#000" : "#ffffff",
                  color: i === 0 ? "white" : "black",
                  border: "1px solid #ccc",
                }}
              >
                {dia}
              </button>
            ))}
          </div>

          {/* ENCABEZADOS */}
          <div className="d-flex mb-2 fw-bold text-secondary">
            <div style={{ width: 90 }}>Horario</div>
            <div className="flex-fill ps-2">Asignatura</div>
            <div style={{ width: 100 }} className="ps-2">
              Salón
            </div>
          </div>

          {/* FILAS */}
          <div style={{ maxHeight: 420, overflowY: "auto" }}>
            {times.map((t, i) => (
              <div key={i} className="d-flex align-items-center mb-2">
                <div style={{ width: 90, fontSize: 13 }}>{t}</div>

                <div className="flex-fill ps-2">
                  <div
                    style={{
                      height: 28,
                      borderRadius: 14,
                      background: "#56c0bb",
                    }}
                  ></div>
                </div>

                <div style={{ width: 100 }} className="ps-2">
                  <div
                    style={{
                      height: 28,
                      borderRadius: 14,
                      background: "#8f1f37",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* BOTONES */}
          <div className="d-flex justify-content-between mt-4">
            <button
              className="px-4 py-2"
              style={{
                backgroundColor: "#0b7f7a",
                color: "white",
                borderRadius: 20,
                border: "none",
                width: 120,
              }}
            >
              Guardar
            </button>

            <button
              className="px-4 py-2"
              style={{
                backgroundColor: "#e6e6e6",
                color: "#444",
                borderRadius: 20,
                border: "none",
                width: 120,
                boxShadow: "0px 2px 4px rgba(0,0,0,0.15)",
              }}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
