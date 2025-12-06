import React from "react";
import garra from "../assets/garra.png";

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
    "16:30 - 17:30",
  ];

  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-start"
      style={{
        background: "linear-gradient(180deg, #69cfcc, #ffffff)",
        paddingTop: 35,
      }}
    >

      {/* CONTENEDOR PRINCIPAL */}
      <div
        className="shadow-lg"
        style={{
          width: 360,
          borderRadius: 28,
          overflow: "hidden",
          background: "white",
        }}
      >

        {/* HEADER */}
        <div
          className="d-flex align-items-center justify-content-between px-3 py-3"
          style={{
            background: "linear-gradient(90deg, #41bfb9, #1d9790)",
          }}
        >
          {/* REGRESAR */}
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

          <h5 className="text-white m-0 fw-bold">Horario</h5>
          <img src={garra} alt="garra" style={{ height: 36 }} />
        </div>

        {/* CONTENT */}
        <div className="p-3">

          {/* DÍAS */}
          <div className="d-flex justify-content-between mb-3">
            {["L", "M", "M", "J", "V"].map((dia, i) => (
              <button
                key={i}
                style={{
                  width: 50,
                  height: 42,
                  borderRadius: 12,
                  fontWeight: "600",
                  backgroundColor: i === 0 ? "#1d9790" : "#f4f4f4",
                  color: i === 0 ? "white" : "#444",
                  border: "none",
                  boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                {dia}
              </button>
            ))}
          </div>

          {/* ENCABEZADOS */}
          <div
            className="d-flex mb-2"
            style={{ fontWeight: 600, color: "#666", fontSize: 14 }}
          >
            <div style={{ width: 90 }}>Horario</div>
            <div className="flex-fill ps-2">Asignatura</div>
            <div style={{ width: 100 }} className="ps-2">
              Salón
            </div>
          </div>

          {/* FILAS */}
          <div style={{ maxHeight: 420, overflowY: "auto" }}>
            {times.map((t, i) => (
              <div key={i} className="d-flex align-items-center mb-3">
                <div style={{ width: 90, fontSize: 13 }}>{t}</div>

                <div className="flex-fill ps-2">
                  <div
                    style={{
                      height: 30,
                      borderRadius: 12,
                      background: "#41bfb9",
                      boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                    }}
                  ></div>
                </div>

                <div style={{ width: 100 }} className="ps-2">
                  <div
                    style={{
                      height: 30,
                      borderRadius: 12,
                      background: "#c8234c",
                      boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* BOTONES */}
          <div className="d-flex justify-content-between mt-4">
            <button
              style={{
                backgroundColor: "#1c7e79",
                color: "white",
                borderRadius: 20,
                border: "none",
                width: 125,
                padding: "8px 0",
                fontWeight: 600,
              }}
            >
              Guardar
            </button>

            <button
              style={{
                backgroundColor: "#f3f3f3",
                color: "#444",
                borderRadius: 20,
                border: "none",
                width: 125,
                padding: "8px 0",
                fontWeight: 600,
                boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
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
