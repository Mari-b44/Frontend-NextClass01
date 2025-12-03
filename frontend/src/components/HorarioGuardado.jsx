import React from "react";
import logo from "../assets/Logo.png";
import garra from "../assets/garra.png";

export default function HorarioGuardado() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0a7d7f, #a8e6e1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 40,
      }}
    >
      {/* LOGO */}
      <img
        src={logo}
        alt="logo"
        style={{ width: 130, height: 130, borderRadius: "50%" }}
      />

      {/* NEXTCLASS */}
      <h4
        className="text-white mt-3"
        style={{ fontWeight: 700, letterSpacing: 1 }}
      >
        NEXTCLASS
      </h4>

      {/* TARJETA BLANCA COMPLETA – LARGA */}
      <div
        style={{
          width: "90%",
          background: "white",
          borderRadius: "30px 30px 0 0",  // ✔ solo redondeado arriba
          marginTop: 30,
          paddingTop: 70,
          paddingBottom: 40,
          minHeight: "65vh",              // ✔ ocupa toda la parte baja
          position: "relative",
          boxShadow: "0px -2px 10px rgba(0,0,0,0.1)",
        }}
      >
        {/* GARRA */}
        <img
          src={garra}
          alt="garra"
          style={{
            width: 100,
            position: "absolute",
            top: -35,
            right: -5,
          }}
        />

        {/* TÍTULO */}
        <h4
          className="text-center"
          style={{ color: "#0b7f7a", fontWeight: 800 }}
        >
          Horario guardado
        </h4>

        {/* SUBTEXTO */}
        <p
          className="text-center"
          style={{ color: "#6d6d6d", fontSize: 15, marginTop: 10 }}
        >
          El horario se guardó con éxito
        </p>

        {/* BOTÓN */}
        <div className="d-flex justify-content-center mt-4">
          <button
            style={{
              backgroundColor: "#0b7f7a",
              color: "white",
              border: "none",
              padding: "12px 50px",
              fontSize: 16,
              fontWeight: "bold",
              borderRadius: 25,
              boxShadow: "0px 3px 6px rgba(0,0,0,0.25)",
            }}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
