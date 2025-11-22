import { useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import Logoprincipal from "../assets/Logoprincipal.png";
import garra from "../assets/garra.png";


export default function NewPassword() {
  const navigate = useNavigate();
  const colorPrincipal = "#00B8C8";

  return (
    <div
      className="d-flex flex-column align-items-center min-vh-100"
      style={{
        background: "linear-gradient(to bottom, #007E8C 50%, #F5F8FA 50%)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Encabezado */}
      <div
        style={{
          textAlign: "center",
          color: "white",
          paddingTop: "3rem",
          paddingBottom: "2rem",
        }}
      >
        <img
          src={Logoprincipal}
          alt="Logo"
          style={{
            width: "90px",
            filter: "drop-shadow(0 0 14px rgba(255,255,255,0.5))",
            marginBottom: "0.4rem",
          }}
        />
        <h2 style={{ fontWeight: "700" }}>Restablecer contraseña</h2>
      </div>

      {/* Contenedor principal */}
      <div
        style={{
          backgroundColor: "#F5F8FA",
          borderTopLeftRadius: "60px",
          borderTopRightRadius: "60px",
          width: "100%",
          maxWidth: "400px",
          flex: 1,
          padding: "2.5rem 1.8rem",
          boxShadow: "0 -5px 15px rgba(0,0,0,0.15)",
          position: "relative",
        }}
      >
        {/* Logo decorativo superior */}
        <img
          src={garra}
          alt="Decorativo"
          style={{
            position: "absolute",
            top: "0",
            right: "25px",
            width: "70px",
            transform: "translateY(-40%)",
            opacity: 0.85,
          }}
        />

        <p
          style={{
            fontWeight: "600",
            color: "#444",
            marginBottom: "2.5rem",
            textAlign: "left",
          }}
        >
          Introduce tu nueva contraseña y confírmala para continuar.
        </p>

        {/* Inputs */}
        <InputLine
          icon={<FaLock size={20} color={colorPrincipal} />}
          placeholder="Nueva contraseña"
          type="password"
          color={colorPrincipal}
        />
        <InputLine
          icon={<FaLock size={20} color={colorPrincipal} />}
          placeholder="Confirmar contraseña"
          type="password"
          color={colorPrincipal}
        />

        {/* Botones */}
        <div className="text-center mt-4">
          <button
            className="fw-bold text-white"
            style={{
              width: "160px",
              height: "46px",
              borderRadius: "25px",
              backgroundColor: "#007E8C",
              border: "none",
              boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
              marginBottom: "1.8rem",
              transition: "0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#0099A8")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#007E8C")}
            onClick={() => navigate("/success2",)}
          >
            Aceptar
          </button>

          <br />

          <button
            className="btn btn-link p-0"
            onClick={() => navigate("/login")}
            style={{
              textDecoration: "none",
              color: colorPrincipal,
              fontSize: "1rem",
              fontWeight: "600",
            }}
          >
            Volver al inicio
          </button>
        </div>
      </div>
    </div>
  );
}


function InputLine({ icon, placeholder, type = "text", color }) {
  return (
    <div style={{ position: "relative", marginBottom: "2.2rem" }}>
      {/* Ícono alineado a la izquierda */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "0",
          transform: "translateY(-50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "30px",
          zIndex: 2,
        }}
      >
        {icon}
      </div>

      {/* Línea de texto */}
      <input
        type={type}
        placeholder={placeholder}
        style={{
          width: "100%",
          height: "56px",
          border: "none",
          borderBottom: "2px solid #ccc",
          paddingLeft: "40px",
          backgroundColor: "transparent",
          fontSize: "1rem",
          outline: "none",
          fontWeight: "600",
          color: "#555",
          transition: "all 0.3s ease",
        }}
        onFocus={(e) => {
          e.target.style.borderBottom = `2px solid ${color}`;
        }}
        onBlur={(e) => {
          e.target.style.borderBottom = "2px solid #ccc";
        }}
      />
    </div>
  );
}
