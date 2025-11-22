import { FaUser, FaEnvelope, FaIdBadge, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Logoprincipal from "../assets/Logoprincipal.png";
import garra from "../assets/garra.png";



export default function Register() {
  const colorPrincipal = "#00B8C8";
  const navigate = useNavigate();

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-start min-vh-100"
      style={{
        position: "relative",
        backgroundColor: "#f5f8fa",
        overflow: "hidden",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Fondo azul */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "75vh",
          minHeight: "480px",
          backgroundColor: colorPrincipal,
          borderBottomLeftRadius: "60px",
          borderBottomRightRadius: "60px",
          zIndex: 1,
        }}
      ></div>

      {/* Logo principal */}
      <img
        src={Logoprincipal}
        alt="Logo principal"
        style={{
          position: "relative",
          zIndex: 2,
          width: "130px",
          maxWidth: "30vw",
          marginTop: "3rem",
          filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.25))",
        }}
      />

      {/* Cuadro blanco */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          backgroundColor: "#fff",
          width: "90%",
          maxWidth: "450px",
          borderRadius: "25px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
          padding: "2.5rem 1.8rem",
          marginTop: "2.5rem",
        }}
      >
        {/* Mini logo flotante */}
        <img
          src={garra}
          alt="Mini logo"
          style={{
            position: "absolute",
            top: "-25px",
            right: "25px",
            width: "55px",
            maxWidth: "15vw",
            filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.3))",
          }}
        />

        {/* Campos */}
        <InputField icon={<FaUser />} placeholder="Nombre completo" />
        <InputField icon={<FaEnvelope />} placeholder="Correo electrónico" />
        <InputField icon={<FaIdBadge />} placeholder="Matrícula" />
        <InputField icon={<FaLock />} placeholder="Contraseña" type="password" />
        <InputField icon={<FaLock />} placeholder="Confirmar contraseña" type="password" />

        {/* Enlace al login */}
        <div className="text-center mt-3">
          <button
            onClick={() => navigate("/login")}
            className="btn btn-link p-0"
            style={{
              textDecoration: "none",
              color: colorPrincipal,
              fontSize: "0.9rem",
              fontWeight: "500",
            }}
          >
            ¿Ya tienes cuenta? Inicia sesión
          </button>
        </div>
      </div>

      {/* Botón principal */}
      <div
        className="text-center"
        style={{
          zIndex: 3,
          marginTop: "2rem",
          marginBottom: "3rem",
        }}
      >
        <button
          className="fw-bold text-white"
          style={{
            width: "180px",
            height: "50px",
            borderRadius: "10px",
            backgroundColor: "#007E8C",
            border: "none",
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
            transition: "0.3s ease",
            fontSize: "1rem",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#009AA8")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#007E8C")}
          onClick={() => navigate("/success")} 
        >
          Registrarse
        </button>
      </div>
    </div>
  );
}

/*  */
function InputField({ icon, placeholder, type = "text" }) {
  const colorPrincipal = "#00B8C8";

  return (
    <div style={{ position: "relative", marginBottom: "1.8rem" }}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "0",
          transform: "translateY(-50%)",
          color: "#777",
          fontSize: "1.1rem",
          width: "35px",
          textAlign: "center",
        }}
      >
        {icon}
      </div>

      <input
        type={type}
        placeholder={placeholder}
        style={{
          width: "100%",
          border: "none",
          borderBottom: "2px solid #ccc",
          paddingLeft: "45px",
          backgroundColor: "transparent",
          fontSize: "1rem",
          fontWeight: "600",
          color: "#555",
          outline: "none",
          transition: "border-color 0.3s ease",
        }}
        onFocus={(e) => (e.target.style.borderBottom = `2px solid ${colorPrincipal}`)}
        onBlur={(e) => (e.target.style.borderBottom = "2px solid #ccc")}
      />
    </div>
  );
}
