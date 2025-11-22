import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import garra from "../assets/garra.png";

export default function AggTareas() {
  const [open, setOpen] = useState({
    gp2: false,
    integradora: false,
    web: false,
  });

  const toggle = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div
      className="w-100 min-vh-100 bg-light"
      style={{ fontFamily: "Arial", position: "relative" }}
    >
      {/* ENCABEZADO */}
      <div
        className="d-flex align-items-center text-white fw-bold p-3"
        style={{
          background: "linear-gradient(180deg,#87D4D3,#78C6C0)",
          fontSize: "18px",
          position: "relative",
        }}
      >
        <button className="btn text-white fw-bold" style={{ fontSize: 22 }}>
          <i className="bi bi-arrow-left"></i>
        </button>

        <span className="ms-2">Tareas Pendientes</span>

        {/* Garra */}
        <img
          src={garra}
          alt="garra"
          style={{
            width: "75px",
            position: "absolute",
            right: "10px",
            top: "-10px",
          }}
        />
      </div>

      {/* CONTENEDOR */}
      <div className="p-3">

        {/* MATERIA 1 */}
        <div className="mb-3">
          <button
            onClick={() => toggle("gp2")}
            className="btn w-100 d-flex justify-content-between align-items-center fw-semibold"
            style={{
              background: "#000",
              color: "white",
              borderRadius: "10px",
            }}
          >
            Gestión de Proyectos II
            <i className={`bi ${open.gp2 ? "bi-caret-up-fill" : "bi-caret-down-fill"}`}></i>
          </button>

          {/* INFO DESPLEGABLE */}
          {open.gp2 && (
            <div className="mt-2 p-3 bg-white shadow-sm rounded">
              <h6 className="fw-bold">Entrega de informe final</h6>
              <p className="m-0 text-secondary">
                Fecha límite: <strong>20/10/2025 a las 7:00 AM</strong>
              </p>
              <p className="mt-2">
                Descripción: Entregar el informe completo con los resultados del proyecto,
                estructura final y conclusiones.
              </p>
            </div>
          )}
        </div>

        {/* MATERIA 2 */}
        <div className="mb-3">
          <button
            onClick={() => toggle("integradora")}
            className="btn w-100 d-flex justify-content-between align-items-center fw-semibold"
            style={{
              background: "#000",
              color: "white",
              borderRadius: "10px",
            }}
          >
            Integradora
            <i className={`bi ${open.integradora ? "bi-caret-up-fill" : "bi-caret-down-fill"}`}></i>
          </button>

          {open.integradora && (
            <div className="mt-2 p-3 bg-white shadow-sm rounded">
              <h6 className="fw-bold">Reporte de avances</h6>
              <p className="m-0 text-secondary">
                Fecha límite: <strong>15/10/2025 a las 11:00 AM</strong>
              </p>
              <p className="mt-2">
                Descripción: Subir el documento PDF con el avance semanal del proyecto.
              </p>
            </div>
          )}
        </div>

        {/* MATERIA 3 */}
        <div className="mb-3">
          <button
            onClick={() => toggle("web")}
            className="btn w-100 d-flex justify-content-between align-items-center fw-semibold"
            style={{
              background: "#000",
              color: "white",
              borderRadius: "10px",
            }}
          >
            Programación de Aplicaciones Web
            <i className={`bi ${open.web ? "bi-caret-up-fill" : "bi-caret-down-fill"}`}></i>
          </button>

          {open.web && (
            <div className="mt-2 p-3 bg-white shadow-sm rounded">
              <h6 className="fw-bold">Entrega de maqueta UI</h6>
              <p className="m-0 text-secondary">
                Fecha límite: <strong>22/10/2025 a las 9:00 AM</strong>
              </p>
              <p className="mt-2">
                Descripción: Subir screenshots o prototipos del diseño final.
              </p>
            </div>
          )}
        </div>

        {/* TÍTULO MES */}
        <h5 className="text-center fw-bold mt-4" style={{ color: "#138d75" }}>
          OCTUBRE
        </h5>

        {/* CALENDARIO */}
        <div className="text-center mt-3">
          <table className="table">
            <thead>
              <tr className="text-danger fw-bold">
                <th>Dom</th><th>Lun</th><th>Mar</th><th>Mie</th><th>Jue</th><th>Vie</th><th>Sab</th>
              </tr>
            </thead>
            <tbody>
              <tr><td></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
              <tr><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td></tr>
              <tr>
                <td>14</td><td>15</td>
                <td className="text-danger fw-bold">16</td>
                <td>17</td><td>18</td><td>19</td><td>20</td>
              </tr>
              <tr><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td></tr>
              <tr><td>28</td><td>29</td><td>30</td><td>31</td><td></td><td></td><td></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* BOTÓN + FLOTANTE */}
      <button
        className="btn btn-success rounded-circle d-flex align-items-center justify-content-center shadow"
        style={{
          width: "55px",
          height: "55px",
          position: "fixed",
          bottom: "25px",
          right: "25px",
          fontSize: "28px",
          zIndex: 999,
        }}
      >
        <i className="bi bi-plus-lg"></i>
      </button>
    </div>
  );
}
