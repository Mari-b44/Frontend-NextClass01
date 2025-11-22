import React, { useState } from "react";

const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
const horas = [
  "7:00 - 8:00", "8:00 - 9:00", "9:00 - 10:00", "11:00 - 12:00", 
  "12:00 - 12:30", "12:30 - 13:30", "13:30 - 14:30", "14:30 - 15:30", 
  "15:30 - 16:30", "16:30 - 17:30", "17:30 - 18:30", "19:30 - 20:30"
];

export default function AdminScreens() {
  const [pantalla, setPantalla] = useState("principal"); // 'principal', 'horario', 'confirmacion'
  const [diaSeleccionado, setDiaSeleccionado] = useState("");

  const handleEditarDia = (dia) => {
    setDiaSeleccionado(dia);
    setPantalla("horario");
  };

  const handleGuardar = () => {
    setPantalla("confirmacion");
  };

  const handleAceptar = () => {
    setPantalla("principal");
  };

  return (
    <div className="min-vh-100 bg-light p-4" style={{ fontFamily: "Arial, sans-serif" }}>
      {pantalla === "principal" && (
        <div>
          <h2 className="mb-4">Horarios Generales</h2>
          {diasSemana.map((dia) => (
            <div key={dia} className="d-flex align-items-center mb-3">
              <button
                className="btn btn-info me-2"
                style={{ width: "120px" }}
                onClick={() => handleEditarDia(dia)}
              >
                {dia}
              </button>
              <button className="btn btn-outline-secondary me-1">Editar</button>
              <button className="btn btn-outline-primary me-1">Actualizar</button>
              <button className="btn btn-outline-danger">Eliminar</button>
            </div>
          ))}
        </div>
      )}

      {pantalla === "horario" && (
        <div>
          <h2 className="mb-4">Horario - {diaSeleccionado}</h2>
          <div className="mb-3 d-flex gap-2">
            {["L","M","M","J","V"].map((d) => (
              <button key={d} className={`btn ${d === diaSeleccionado[0] ? "btn-info" : "btn-light"}`}>
                {d}
              </button>
            ))}
          </div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Horario</th>
                <th>Asignatura</th>
                <th>Salón</th>
              </tr>
            </thead>
            <tbody>
              {horas.map((hora) => (
                <tr key={hora}>
                  <td>{hora}</td>
                  <td><input type="text" className="form-control" /></td>
                  <td><input type="text" className="form-control" /></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-3">
            <button className="btn btn-info me-2" onClick={handleGuardar}>Guardar</button>
            <button className="btn btn-secondary" onClick={() => setPantalla("principal")}>Cancelar</button>
          </div>
        </div>
      )}

      {pantalla === "confirmacion" && (
        <div className="text-center mt-5">
          <div className="p-4 bg-white rounded shadow" style={{ display: "inline-block" }}>
            <h3>Horario guardado</h3>
            <p>El horario se guardó con éxito</p>
            <button className="btn btn-info" onClick={handleAceptar}>Aceptar</button>
          </div>
        </div>
      )}
    </div>
  );
}
