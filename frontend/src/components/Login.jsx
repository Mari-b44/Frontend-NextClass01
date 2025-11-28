import client from "../api/axios";
import { useState, useEffect } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Logoprincipal from "../assets/Logoprincipal.png";
import garra from "../assets/garra.png";


export default function Login() {
  const navigate = useNavigate();
  const colorPrincipal = "#00B8C8";
  
  // ESTADOS PARA LA LÓGICA
  const [showSplash, setShowSplash] = useState(true);
  const [matricula, setMatricula] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // FUNCIÓN PARA CONECTAR CON EL BACKEND
  const handleLogin = async () => {
    if (!matricula || !password) return alert("Faltan datos");
    setLoading(true);

    try {
        // Ya no necesitas poner http://localhost:3000...
        // client.post se encarga de todo
        const response = await client.post("/auth/login", { matricula, password });

        // Axios devuelve los datos en .data automáticamente
        const { token, role } = response.data; 

        localStorage.setItem("token", token);
        localStorage.setItem("role", role);

        if (role === "admin") {
            navigate("/PantallaAdminPrincipal");
        } else {
            navigate("/PantallaActual");
        }

    } catch (error) {
        console.error(error);
        // Axios maneja los errores en error.response.data
        const mensaje = error.response?.data?.message || "Error al conectar";
        alert(mensaje);
    } finally {
        setLoading(false);
    }
};

  if (showSplash) {
    return (
      <div
        className="d-flex justify-content-center align-items-center min-vh-100"
        style={{ backgroundColor: "black", transition: "opacity 1s ease" }}
      >
        <img
          src={Logoprincipal}
          alt="Logo"
          style={{
            width: "190px",
            filter: "drop-shadow(0 0 14px rgba(0,184,200,0.7))",
            animation: "fadeLogo 1.5s ease-in-out infinite alternate",
          }}
        />
        <style>{`
          @keyframes fadeLogo {
            from { opacity: 0.6; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1.05); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div
      className="d-flex flex-column align-items-center min-vh-100"
      style={{
        background: "linear-gradient(to bottom, #00838F 50%, #F5F8FA 50%)",
        overflow: "hidden",
        position: "relative",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* SECCIÓN SUPERIOR */}
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
            width: "150px", 
            filter: "drop-shadow(0 0 14px rgba(255,255,255,0.5))",
            marginBottom: "0.5rem",
          }}
        />
        <h2 style={{ fontWeight: "700", marginBottom: "0.3rem" }}>NEXTCLASS</h2>
        <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>Bienvenido</p>
      </div>

      {/* SECCIÓN INFERIOR */}
      <div
        style={{
          backgroundColor: "#F5F8FA",
          borderTopLeftRadius: "60px",
          borderTopRightRadius: "60px",
          width: "100%",
          maxWidth: "400px",
          flex: 1,
          padding: "2.5rem 1.5rem",
          boxShadow: "0 -5px 15px rgba(0,0,0,0.15)",
          position: "relative",
        }}
      >
        <img
          src={garra}
          alt="Decorativo"
          style={{
            position: "absolute",
            top: "0",
            right: "25px",
            width: "70px",
            transform: "translateY(-35%)",
            opacity: 0.8,
          }}
        />

        <h3
          style={{
            color: "#007E8C",
            fontWeight: "700",
            marginBottom: "1.8rem",
            textAlign: "left",
          }}
        >
          Login
        </h3>

        {/* INPUT MATRÍCULA */}
        <div style={{ position: "relative", marginBottom: "1.2rem" }}>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "0",
              transform: "translateY(-50%)",
              width: "58px",
              height: "58px",
              borderRadius: "50%",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
              transition: "all 0.3s ease",
              zIndex: 2,
            }}
          >
            <FaUser color={colorPrincipal} size={20} />
          </div>

          <input
            type="text"
            placeholder="Matricula"
            // VINCULACIÓN CON ESTADO
            value={matricula}
            onChange={(e) => setMatricula(e.target.value)}
            style={{
              width: "100%",
              height: "58px",
              borderRadius: "50px",
              border: "1px solid #ccc",
              paddingLeft: "75px",
              backgroundColor: "#fff",
              boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
              fontSize: "1rem",
              fontWeight: "600",
              color: "#555",
              outline: "none",
            }}
            onFocus={(e) => {
              e.target.style.border = `2px solid ${colorPrincipal}`;
              e.target.previousSibling.style.border = `2px solid ${colorPrincipal}`;
            }}
            onBlur={(e) => {
              e.target.style.border = "1px solid #ccc";
              e.target.previousSibling.style.border = "1px solid #ccc";
            }}
          />
        </div>

        {/* INPUT CONTRASEÑA */}
        <div style={{ position: "relative", marginBottom: "1rem" }}>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "0",
              transform: "translateY(-50%)",
              width: "58px",
              height: "58px",
              borderRadius: "50%",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
              transition: "all 0.3s ease",
              zIndex: 2,
            }}
          >
            <FaLock color={colorPrincipal} size={20} />
          </div>

          <input
            type="password"
            placeholder="Contraseña"
            // VINCULACIÓN CON ESTADO
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              height: "58px",
              borderRadius: "50px",
              border: "1px solid #ccc",
              paddingLeft: "75px",
              backgroundColor: "#fff",
              boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
              fontSize: "1rem",
              fontWeight: "600",
              color: "#555",
              outline: "none",
            }}
            onFocus={(e) => {
              e.target.style.border = `2px solid ${colorPrincipal}`;
              e.target.previousSibling.style.border = `2px solid ${colorPrincipal}`;
            }}
            onBlur={(e) => {
              e.target.style.border = "1px solid #ccc";
              e.target.previousSibling.style.border = "1px solid #ccc";
            }}
          />
        </div>

        {/* ENLACE */}
        <div className="text-end" style={{ marginBottom: "1.5rem" }}>
          <button
            onClick={() => navigate("/recover")}
            className="btn btn-link p-0"
            style={{
              textDecoration: "none",
              color: colorPrincipal,
              fontSize: "0.9rem",
              fontWeight: "500",
            }}
          >
            ¿Olvidaste tu contraseña?
          </button>
        </div>

        {/* BOTONES */}
        <div className="text-center">
          <button
            className="fw-bold text-white"
            // CAMBIO: AHORA LLAMA A HANDLELOGIN
            onClick={handleLogin}
            disabled={loading}
            style={{
              width: "130px",
              height: "42px",
              borderRadius: "25px",
              backgroundColor: loading ? "#ccc" : "#007E8C",
              border: "none",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              marginBottom: "1rem",
              cursor: loading ? "wait" : "pointer"
            }}
            onMouseEnter={(e) => !loading && (e.target.style.backgroundColor = "#0099A8")}
            onMouseLeave={(e) => !loading && (e.target.style.backgroundColor = "#007E8C")}
          >
            {loading ? "Cargando..." : "Login"}
          </button>
          <br />
          <button
            className="fw-bold"
            style={{
              width: "130px",
              height: "42px",
              borderRadius: "25px",
              backgroundColor: "#fff",
              color: "#000",
              border: "none",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
            onClick={() => navigate("/register")}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#fff")}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}