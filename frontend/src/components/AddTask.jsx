// AddTask.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Imagen
import garra from "../assets/garra.png";

export default function AddTask() {
  return (
    <div
      className="w-100 min-vh-100 bg-light"
      style={{ fontFamily: "Arial", position: "relative" }}
    >
      {/* HEADER */}
      <div
        className="d-flex align-items-center text-white fw-bold p-3 position-relative"
        style={{
          background: "linear-gradient(180deg,#87D4D3,#78C6C0)",
          fontSize: "18px",
          borderBottomLeftRadius: "35px",
          borderBottomRightRadius: "35px",
        }}
      >
        <button className="btn text-white fw-bold" style={{ fontSize: 22 }}>
          <i className="bi bi-arrow-left"></i>
        </button>

        <span className="ms-2">Añadir Tarea</span>

        <img
          src={garra}
          alt="garra"
          style={{
            width: "70px",
            position: "absolute",
            right: "10px",
            top: "-5px",
          }}
        />
      </div>

      {/* CONTENIDO */}
      <div className="p-4">

        {/* Detalles */}
        <h5 className="fw-bold mb-3">Detalles</h5>

        {/* Nombre */}
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Nombre de la tarea"
          style={{
            borderRadius: "10px",
            height: "45px",
          }}
        />

        {/* Descripción */}
        <textarea
          className="form-control mb-3"
          placeholder="Descripción"
          rows="3"
          style={{ borderRadius: "10px" }}
        ></textarea>

        {/* Fecha de entrega */}
        <h6 className="fw-bold mt-4">Fecha de Entrega</h6>
        <div className="input-group mb-3">
          <input
            type="date"
            className="form-control"
            style={{ borderRadius: "10px" }}
          />
          <span className="input-group-text bg-white">
            <i className="bi bi-calendar-event"></i>
          </span>
        </div>

        {/* Asignar a */}
        <h6 className="fw-bold mt-4">Asignar a</h6>
        <select className="form-select mb-4" style={{ borderRadius: "10px" }}>
          <option value="">Seleccionar...</option>
          <option value="gp2">Gestión de Proyectos II</option>
          <option value="int">Integradora</option>
          <option value="web">Programación Web</option>
        </select>

        {/* BOTONES */}
        <div className="text-center">
          <button
            className="btn text-white px-4 fw-bold"
            style={{
              background: "#0A8A84",
              borderRadius: "20px",
              height: "45px",
            }}
          >
            Guardar tarea
          </button>
        </div>

        <div className="text-center mt-3">
          <button
            className="btn fw-bold px-4"
            style={{
              background: "#F2F2F2",
              borderRadius: "20px",
              height: "45px",
            }}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
