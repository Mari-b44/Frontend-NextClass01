import React from "react";
import logo from "../assets/react.svg"; // usa temporalmente el logo de React

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        background: "linear-gradient(to right, #007E8C, #00B8C8)",
        padding: "0.7rem 1.2rem",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <div className="container-fluid">
        {/* LOGO + Nombre */}
        <a
          className="navbar-brand d-flex align-items-center"
          href="#"
          style={{ color: "white", fontWeight: "700", fontSize: "1.4rem" }}
        >
          <img
            src={logo}
            alt="logo"
            style={{
              width: "35px",
              marginRight: "10px",
              filter: "drop-shadow(0 0 8px rgba(255,255,255,0.5))",
            }}
          />
          Nextclass
        </a>

        {/* Botón responsive */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: "white" }}
        >
          <span
            className="navbar-toggler-icon"
            style={{ filter: "invert(1) brightness(2)" }}
          ></span>
        </button>

        {/* Opciones del menú */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#"
                style={{ fontWeight: "500" }}
              >
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Acerca de
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
