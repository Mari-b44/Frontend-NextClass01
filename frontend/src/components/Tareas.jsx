import React, { useState, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Assets
import icon from "../assets/icon.png";
import garra from "../assets/garra.png";

// --- Datos de ejemplo para acordiones/tareas ---
const MATERIAS = [
  {
    id: 1,
    nombre: "Gestión de Proyectos II",
    tareas: [
      { id: "g1", titulo: "Entrega informe final", fecha: "2025-10-16" },
      { id: "g2", titulo: "Revisión de casos de estudio", fecha: "2025-10-20" },
    ],
  },
  {
    id: 2,
    nombre: "Integradora",
    tareas: [{ id: "i1", titulo: "Preparar presentación", fecha: "2025-10-18" }],
  },
  {
    id: 3,
    nombre: "Programación de Aplicaciones Web",
    tareas: [
      { id: "p1", titulo: "Entrega práctica 3", fecha: "2025-10-22" },
      { id: "p2", titulo: "Código revisión", fecha: "2025-10-25" },
    ],
  },
];

// --- Utilidades de calendario ---
function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}
function endOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

export default function Tareas() {
  const [current] = useState(() => startOfMonth(new Date()));
  const [openIds, setOpenIds] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  // --- Matriz de semanas ---
  const weeks = useMemo(() => {
    const start = startOfMonth(current);
    const end = endOfMonth(current);
    const startDay = start.getDay();
    const totalDays = end.getDate();

    const result = [];
    let week = new Array(7).fill(null);
    let counter = 1;

    for (let i = startDay; i < 7; i++) {
      week[i] = new Date(current.getFullYear(), current.getMonth(), counter++);
    }
    result.push(week.slice());

    while (counter <= totalDays) {
      week = new Array(7).fill(null);
      for (let i = 0; i < 7 && counter <= totalDays; i++) {
        week[i] = new Date(current.getFullYear(), current.getMonth(), counter++);
      }
      result.push(week.slice());
    }

    return result;
  }, [current]);

  // Toggle acordeón
  function toggleMateria(id) {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  const monthLabel = current
    .toLocaleString("es-ES", { month: "long", year: "numeric" })
    .toUpperCase();

  return (
    <div className="w-100 min-vh-100 bg-light pb-5">
      
      {/* HEADER */}
      <div
        className="py-3 px-3 d-flex align-items-center justify-content-between"
        style={{
          background: "linear-gradient(90deg,#7AD7CD,#4AA8A1)",
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}
      >
        <div className="d-flex align-items-center gap-3">
          <img src={icon} alt="logo" style={{ width: 52, height: 52 }} />
          <h3 className="m-0 text-white fw-bold">Tareas Pendientes</h3>
        </div>

        <img src={garra} alt="garra" style={{ width: 92, height: 92 }} />
      </div>

      {/* CONTENIDO */}
      <div className="container mt-4">
        <div className="row">

          {/* LISTA IZQUIERDA */}
          <div className="col-lg-5 mb-4">
            {MATERIAS.map((m) => {
              const isOpen = openIds.includes(m.id);

              return (
                <div key={m.id} className="mb-3 bg-white rounded shadow-sm overflow-hidden">
                  
                  <button
                    className="btn w-100 d-flex justify-content-between align-items-center px-3 py-3"
                    onClick={() => toggleMateria(m.id)}
                  >
                    <span className="fw-bold">{m.nombre}</span>
                    <span className="fs-4">{isOpen ? "▲" : "▼"}</span>
                  </button>

                  <div
                    className="collapse-body px-3 pb-3"
                    style={{
                      maxHeight: isOpen ? `${m.tareas.length * 75}px` : "0px",
                      opacity: isOpen ? 1 : 0,
                      pointerEvents: isOpen ? "auto" : "none",
                    }}
                  >
                    {m.tareas.map((t) => (
                      <div key={t.id} className="p-2 mb-2 rounded" style={{ background: "#f5f5f5" }}>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <div className="fw-bold">{t.titulo}</div>
                            <div className="small text-muted">{t.fecha}</div>
                          </div>
                          <button
                            className="btn btn-sm btn-outline-primary"
                            onClick={() => alert(`Marcar tarea ${t.titulo} como hecha`)}
                          >
                            Marcar
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              );
            })}
          </div>

          {/* CALENDARIO */}
          <div className="col-lg-7">
            <div className="bg-white p-3 rounded shadow-sm">

              <div className="d-flex justify-content-center mb-3">
                <span className="fw-bold" style={{ color: "#0A8A84", fontSize: 18 }}>
                  {monthLabel}
                </span>
              </div>

              <table className="table table-borderless text-center">
                <thead>
                  <tr className="fw-bold small">
                    <th style={{ color: "#C1006F" }}>Dom</th>
                    <th>Lun</th>
                    <th>Mar</th>
                    <th>Mie</th>
                    <th>Jue</th>
                    <th>Vie</th>
                    <th>Sab</th>
                  </tr>
                </thead>

                <tbody>
                  {weeks.map((week, wi) => (
                    <tr key={wi}>
                      {week.map((d, di) => {
                        const today = new Date();

                        const isToday =
                          d &&
                          d.getDate() === today.getDate() &&
                          d.getMonth() === today.getMonth() &&
                          d.getFullYear() === today.getFullYear();

                        const isSelected =
                          d &&
                          selectedDate &&
                          d.toDateString() === selectedDate.toDateString();

                        return (
                          <td key={di} style={{ padding: 6 }}>
                            {d ? (
                              <div
                                onClick={() => setSelectedDate(d)}
                                style={{
                                  display: "inline-block",
                                  minWidth: 34,
                                  minHeight: 34,
                                  lineHeight: "34px",
                                  borderRadius: 8,
                                  cursor: "pointer",
                                  background: isSelected
                                    ? "#0A8A84"
                                    : isToday
                                    ? "#e9f7f6"
                                    : "transparent",
                                  color: isSelected
                                    ? "white"
                                    : isToday
                                    ? "#0A8A84"
                                    : "inherit",
                                }}
                              >
                                {d.getDate()}
                              </div>
                            ) : null}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Tareas del día */}
              <div className="mt-3">
                <h6 className="fw-bold">Tareas del día</h6>
                {selectedDate ? (
                  renderTasksForDate(selectedDate)
                ) : (
                  <div className="text-muted">Selecciona una fecha.</div>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>

      <style>{`
        .collapse-body {
          transition: max-height .35s ease, opacity .25s ease;
          overflow: hidden;
        }
      `}</style>

    </div>
  );
}

// --- Helpers ---
function renderTasksForDate(date) {
  const all = MATERIAS.flatMap((m) =>
    m.tareas.map((t) => ({ ...t, materia: m.nombre }))
  );

  const iso = date.toISOString().slice(0, 10);
  const tasks = all.filter((t) => t.fecha === iso);

  if (!tasks.length) {
    return <div className="text-muted">No hay tareas para esta fecha.</div>;
  }

  return (
    <div>
      {tasks.map((t) => (
        <div key={t.id} className="p-2 mb-2 rounded" style={{ background: "#f5f5f5" }}>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <div className="fw-bold">{t.titulo}</div>
              <div className="small text-muted">{t.materia}</div>
            </div>

            <button
              className="btn btn-sm btn-outline-success"
              onClick={() => alert(`Tarea ${t.titulo} marcada como hecha`)}
            >
              Hecho
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
