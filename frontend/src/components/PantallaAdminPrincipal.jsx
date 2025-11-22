import React from "react";
import { FaEdit, FaSyncAlt, FaTrash } from "react-icons/fa";
import garra from "../assets/garra.png"; // tu icono de la garrita

const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

export default function PantallaPrincipal({ onEditar }) {
  return (
    <div className="min-vh-100 bg-light d-flex justify-content-center align-items-start p-4" style={{ fontFamily: "Arial, sans-serif" }}>
      
      {/* Contenedor principal */}
      <div className="w-100" style={{ maxWidth: "800px" }}>

        {/* Barra superior azul con garrita */}
        <div className="d-flex align-items-center bg-primary p-3 rounded-top">
          <img src={garra} alt="garra" style={{ width: "40px", height: "40px" }} />
          <h2 className="text-white ms-3 mb-0">Horarios Generales</h2>
        </div>

        {/* Contenido blanco */}
        <div className="bg-white p-4 rounded-bottom shadow-sm">

          {diasSemana.map((dia) => (
            <div key={dia} className="d-flex align-items-center mb-3 gap-3">

              {/* Día en cuadro color #117780 */}
              <div className="d-flex align-items-center justify-content-center" 
                   style={{ width: "120px", height: "50px", backgroundColor: "#117780", color: "white", fontWeight: "bold", borderRadius: "6px" }}>
                {dia}
              </div>

              {/* Botones de acción */}
              <div className="d-flex gap-2">
                <button 
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => onEditar(dia)}
                >
                  <FaEdit />
                </button>
                <button className="btn btn-outline-primary btn-sm">
                  <FaSyncAlt />
                </button>
                <button className="btn btn-outline-danger btn-sm">
                  <FaTrash />
                </button>
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}
