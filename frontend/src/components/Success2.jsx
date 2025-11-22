import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import Logoprincipal from "../assets/Logoprincipal.png";



export default function Success2() {
  const navigate = useNavigate();
  const colorPrincipal = "#00B8C8";

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center min-vh-100 text-center"
      style={{
        background: "linear-gradient(to bottom, #007E8C 50%, #F5F8FA 50%)",
        fontFamily: "Poppins, sans-serif",
        color: "#333",
      }}
    >
      {/* Logo superior */}
      <div style={{ marginBottom: "1.2rem" }}>
        <img
          src={Logoprincipal}
          alt="Logo"
          style={{
            width: "90px",
            filter: "drop-shadow(0 0 12px rgba(255,255,255,0.5))",
          }}
        />
      </div>

      {/* Tarjeta principal */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "30px",
          width: "85%",
          maxWidth: "400px",
          padding: "2.8rem 2rem",
          boxShadow: "0 8px 18px rgba(0,0,0,0.25)",
        }}
      >
        {/* Ícono de éxito */}
        <FaCheckCircle
          size={70}
          color={colorPrincipal}
          style={{
            marginBottom: "1.3rem",
            filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.2))",
          }}
        />

        <h4 style={{ fontWeight: "700", marginBottom: "0.9rem" }}>
          ¡Contraseña actualizada!
        </h4>

        <p
          style={{
            color: "#555",
            fontSize: "0.95rem",
            marginBottom: "2.2rem",
            lineHeight: "1.5",
          }}
        >
          Tu contraseña ha sido cambiada correctamente.  
          Ahora puedes iniciar sesión con tus nuevos datos.
        </p>

        {/* Botón principal */}
        <button
          style={{
            width: "180px",
            height: "48px",
            borderRadius: "25px",
            border: "none",
            backgroundColor: colorPrincipal,
            color: "white",
            fontWeight: "600",
            fontSize: "1.05rem",
            boxShadow: "0 5px 12px rgba(0,0,0,0.3)",
            transition: "0.3s",
          }}
          onClick={() => navigate("/login")}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#009AA8")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = colorPrincipal)}
        >
          Iniciar sesión
        </button>
      </div>
    </div>
  );
}
