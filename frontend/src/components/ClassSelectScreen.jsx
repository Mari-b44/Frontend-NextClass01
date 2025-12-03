import React from "react";
import "../styles/ClassSelect.css";
import garra from "../assets/garra.png";
import Logo from "../assets/Logo.png";
import pasillo from "../assets/hallway.png";

export default function ClassSelectScreen() {
  return (
    <div className="page-root">

      {/* HEADER */}
      <header className="top-header">
        <img className="header-icon" src={Logo} alt="icon" />

        <h2 className="month">OCTUBRE</h2>

        <nav className="weekdays">
          <span className="day">Lun</span>
          <span className="day active">Mar</span>
          <span className="day">Mier</span>
          <span className="day">Jue</span>
          <span className="day">Vie</span>
        </nav>

        <img className="garra" src={garra} alt="garra" />
      </header>

      {/* CARD */}
      <main className="card-wrap">
        <section className="card">

          {/* TITULOS */}
          <div className="card-head">
            <div className="left">
              <p className="label-accent" style={{ color: "#B00058" }}>
                Selección
              </p>
              <h3 className="class-title">Docencia I</h3>
            </div>

            <div className="right">
              <p className="label-accent" style={{ color: "#000" }}>Hora</p>
              <div className="time">2:30 - 4:30</div>
            </div>
          </div>

          {/* IMAGEN */}
          <div className="image-container">
            <img className="hallway" src={pasillo} alt="pasillo" />
          </div>

          {/* BOTONES GRANDES */}
          <div className="buttons-row">
            <button className="btn hall">
              Laboratorio
              <span>Idiomas</span>
            </button>

            <button className="btn subject">
              Asignatura
              <span>Inglés</span>
            </button>
          </div>

          {/* SIGUIENTES */}
          <h4 className="next-title">Siguientes asignaturas</h4>

          <div className="next-grid">
            <div className="cell">Laboratorio 1</div>
            <div className="cell">Programación de Aplicaciones Web Progresivas</div>
          </div>

        </section>
      </main>

    </div>
  );
}
