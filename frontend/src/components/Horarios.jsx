import React, { useState } from 'react';
import { 
  Plus, Search, Edit, Trash2, ChevronDown, ArrowLeft, Save, Clock, BookOpen, MapPin 
} from 'lucide-react';
import FeedbackModal from './FeedbackModal'; // <--- IMPORTANTE: Importar el modal

// --- DATOS DE EJEMPLO ---
const mockClases = ["10A - Ing. Software", "4B - Diseño", "2A - Mercadotecnia"];
const mockAsignaturas = ["Matemáticas", "Inglés", "Programación", "Base de Datos", "Diseño UI", "Redes"];
const mockSalones = ["101", "102", "Lab 1", "Lab 2", "Auditorio"];
const timeSlots = [
  "7:00 - 8:00", "8:00 - 9:00", "9:00 - 10:00", "10:00 - 11:00", 
  "11:00 - 12:00", "12:30 - 13:30", "13:30 - 14:30", "14:30 - 15:30", "15:30 - 16:30", "16:30 - 17:30", "17:30 - 18:30", "18:30 - 19:30" 
];
const daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

const Horarios = ({ colors }) => {
  const [viewMode, setViewMode] = useState('list'); 
  const [selectedDay, setSelectedDay] = useState("Lunes");
  const [formData, setFormData] = useState({ clase: "" });
  
  // --- ESTADOS PARA EL MODAL ---
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    type: 'success', // 'success', 'danger', 'deleteSuccess'
    title: '',
    message: '',
    onConfirm: () => {},
    onCancel: () => {} // Solo para confirmación de borrado
  });

  // Función auxiliar para cerrar modal
  const closeModal = () => setModalConfig({ ...modalConfig, isOpen: false });

  // 1. Manejar GUARDAR (Crear/Editar)
  const handleSave = () => {
    // Aquí iría tu lógica de backend...
    
    // Mostramos modal de éxito
    setModalConfig({
      isOpen: true,
      type: 'success',
      title: '¡Creación Exitosa!',
      message: 'Ya puedes ver el nuevo Horario visible en la lista.',
      onConfirm: () => {
        closeModal();
        setViewMode('list'); // Regresamos a la lista al aceptar
      }
    });
  };

  // 2. Manejar PRE-BORRADO (Preguntar confirmación)
  const handleDeleteRequest = (item) => {
    setModalConfig({
      isOpen: true,
      type: 'danger',
      title: '¿Eliminar Horario?',
      message: `Estás a punto de borrar el horario de ${item.grupo}. Esta acción no se puede deshacer.`,
      onCancel: closeModal,
      onConfirm: () => confirmDelete() // Llamamos a la función que realmente borra
    });
  };

  // 3. Manejar BORRADO CONFIRMADO
  const confirmDelete = () => {
    // Aquí lógica de backend para borrar...

    // Cambiamos el modal a "Borrado Exitoso"
    setModalConfig({
      isOpen: true,
      type: 'deleteSuccess', // Usamos el icono de basura pero estilo éxito
      title: '¡Borrado Exitoso!',
      message: 'Ya se eliminó el horario correctamente.',
      onConfirm: closeModal
    });
  };

  const handleEdit = (item) => {
    setFormData({ clase: item.grupo });
    setViewMode('form');
  };

  const handleCreate = () => {
    setFormData({ clase: "" });
    setViewMode('form');
  };

  // --- Sub-componente: Formulario ---
  const ScheduleForm = () => (
    <div style={{ animation: "fadeIn 0.3s ease-out" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "25px", gap: "15px" }}>
         <button onClick={() => setViewMode('list')} style={{ background: "white", border: "1px solid #eee", borderRadius: "50%", width: "40px", height: "40px", cursor: "pointer", color: "#666", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 5px rgba(0,0,0,0.05)" }}>
           <ArrowLeft size={20} />
         </button>
         <div>
           <h2 style={{ margin: 0, color: colors.secondary, fontSize: "1.6rem", fontWeight: "bold" }}>
             {formData.clase ? "Editar Horario" : "Nuevo Horario"}
           </h2>
           <p style={{ margin: 0, color: "#888", fontSize: "0.9rem" }}>Gestión de bloques horarios.</p>
         </div>
      </div>

      <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "20px", boxShadow: "0 5px 15px rgba(0,0,0,0.03)", marginBottom: "20px" }}>
         <label style={{ display: "block", marginBottom: "10px", fontWeight: "600", color: "#555" }}>Selecciona el Grupo</label>
         <div style={{ position: "relative", maxWidth: "400px" }}>
            <select value={formData.clase} onChange={(e) => setFormData({...formData, clase: e.target.value})} style={{ width: "100%", appearance: "none", backgroundColor: "#F9FAFB", border: "1px solid #ddd", color: "#333", padding: "12px 20px", borderRadius: "12px", fontSize: "1rem", outline: "none", cursor: "pointer", fontWeight: "500" }}>
              <option value="">-- Seleccionar Grupo --</option>
              {mockClases.map((c, i) => <option key={i} value={c}>{c}</option>)}
            </select>
            <ChevronDown size={18} color="#666" style={{ position: "absolute", right: "15px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
         </div>
      </div>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px", overflowX: "auto", paddingBottom: "5px" }}>
         {daysOfWeek.map((day) => (
           <button key={day} onClick={() => setSelectedDay(day)} style={{ flex: 1, padding: "12px", borderRadius: "12px", border: "none", backgroundColor: selectedDay === day ? colors.primary : "white", color: selectedDay === day ? "white" : "#666", fontSize: "0.95rem", fontWeight: "600", cursor: "pointer", transition: "all 0.2s", boxShadow: selectedDay === day ? "0 4px 12px rgba(0,184,200,0.4)" : "0 2px 5px rgba(0,0,0,0.02)", minWidth: "100px" }}>{day}</button>
         ))}
      </div>

      <div style={{ backgroundColor: "white", borderRadius: "20px", padding: "25px", boxShadow: "0 5px 20px rgba(0,0,0,0.03)" }}>
         <div style={{ display: "grid", gridTemplateColumns: "100px 1fr 1fr", gap: "20px", marginBottom: "15px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "5px", color: colors.secondary, fontWeight: "600" }}><Clock size={16} /> <span style={{fontSize: "0.9rem"}}>Hora</span></div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px", color: colors.secondary, fontWeight: "600" }}><BookOpen size={16} /> <span style={{fontSize: "0.9rem"}}>Asignatura</span></div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px", color: colors.secondary, fontWeight: "600" }}><MapPin size={16} /> <span style={{fontSize: "0.9rem"}}>Salón</span></div>
         </div>
         <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {timeSlots.map((slot, index) => (
              <div key={index} style={{ display: "grid", gridTemplateColumns: "100px 1fr 1fr", gap: "20px", alignItems: "center" }}>
                 <div style={{ fontSize: "0.85rem", color: "#888", fontWeight: "600", backgroundColor: "#F5F8FA", padding: "8px", borderRadius: "8px", textAlign: "center" }}>{slot.replace(" ", "")}</div>
                 <div style={{ position: "relative" }}>
                    <select style={{ width: "100%", appearance: "none", backgroundColor: "white", border: `1px solid ${colors.primary}`, color: "#444", padding: "10px 15px", borderRadius: "10px", fontSize: "0.9rem", outline: "none", cursor: "pointer" }}>
                       <option value="">-- Libre --</option>
                       {mockAsignaturas.map((a, i) => <option key={i} value={a}>{a}</option>)}
                    </select>
                 </div>
                 <div style={{ position: "relative" }}>
                    <select style={{ width: "100%", appearance: "none", backgroundColor: "white", border: "1px solid #8D2745", color: "#444", padding: "10px 15px", borderRadius: "10px", fontSize: "0.9rem", outline: "none", cursor: "pointer" }}>
                       <option value="">-- S --</option>
                       {mockSalones.map((s, i) => <option key={i} value={s}>{s}</option>)}
                    </select>
                 </div>
              </div>
            ))}
         </div>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", gap: "15px", marginTop: "30px", paddingBottom: "20px" }}>
          <button onClick={() => setViewMode('list')} style={{ backgroundColor: "transparent", color: "#666", padding: "12px 30px", borderRadius: "30px", border: "1px solid #ddd", fontSize: "0.95rem", fontWeight: "600", cursor: "pointer" }}>Cancelar</button>
          
          {/* BOTÓN GUARDAR MODIFICADO PARA USAR EL MODAL */}
          <button onClick={handleSave} style={{ backgroundColor: colors.secondary, color: "white", padding: "12px 40px", borderRadius: "30px", border: "none", fontSize: "0.95rem", fontWeight: "600", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", boxShadow: "0 4px 15px rgba(0,126,140,0.3)" }}>
             <Save size={18} /> Guardar Horario
          </button>
      </div>
    </div>
  );

  const ListView = () => (
    <div style={{ animation: "fadeIn 0.3s ease-out" }}>
        <div style={{ marginBottom: "30px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <h1 style={{ color: colors.secondary, margin: "0 0 5px 0", fontSize: "1.8rem", fontWeight: "bold" }}>Gestión de Horarios</h1>
              <p style={{ color: "#888", margin: 0 }}>Administra y asigna clases a los grupos.</p>
            </div>
            <button onClick={handleCreate} style={{ backgroundColor: colors.primary, color: "white", border: "none", padding: "10px 25px", borderRadius: "50px", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", fontWeight: "bold", boxShadow: "0 4px 15px rgba(0,184,200,0.3)" }}>
              <Plus size={20} /> Nuevo Horario
            </button>
        </div>

        <div style={{ marginBottom: "25px", position: "relative", maxWidth: "500px" }}>
          <Search size={20} style={{ position: "absolute", left: "20px", top: "50%", transform: "translateY(-50%)", color: "#aaa" }} />
          <input type="text" placeholder="Buscar..." style={{ width: "100%", padding: "15px 15px 15px 50px", borderRadius: "50px", border: "1px solid #eee", backgroundColor: "white", outline: "none" }} />
        </div>

        <div style={{ backgroundColor: "white", borderRadius: "20px", boxShadow: "0 5px 20px rgba(0,0,0,0.03)", overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "#F8F9FA", color: "#666", textAlign: "left", fontSize: "0.9rem", textTransform: "uppercase" }}>
                <th style={{ padding: "20px 25px" }}>Nivel</th>
                <th style={{ padding: "20px 25px" }}>Área</th>
                <th style={{ padding: "20px 25px" }}>Grupo</th>
                <th style={{ padding: "20px 25px", textAlign: "right" }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 1, nivel: "Ingeniería", area: "Entornos Virtuales", grupo: "10A - Ing. Software"},
                { id: 2, nivel: "Ingeniería", area: "Desarrollo", grupo: "4B - Diseño"},
                { id: 3, nivel: "Licenciatura", area: "Negocios", grupo: "2A - Mercadotecnia"},
              ].map((item) => (
                <tr key={item.id} style={{ borderBottom: "1px solid #f0f0f0" }}>
                  <td style={{ padding: "20px 25px", color: "#333" }}>{item.nivel}</td>
                  <td style={{ padding: "20px 25px", color: "#666" }}>{item.area}</td>
                  <td style={{ padding: "20px 25px", color: colors.secondary, fontWeight: "600" }}>{item.grupo}</td>
                  <td style={{ padding: "20px 25px", textAlign: "right" }}>
                    <button onClick={() => handleEdit(item)} style={{ background: "#E0F7FA", border: "none", cursor: "pointer", color: colors.secondary, padding: "8px", borderRadius: "8px", marginRight: "10px" }} title="Editar">
                      <Edit size={18} />
                    </button>
                    {/* BOTÓN ELIMINAR MODIFICADO PARA USAR EL MODAL */}
                    <button onClick={() => handleDeleteRequest(item)} style={{ background: "#FFEBEE", border: "none", cursor: "pointer", color: "#D32F2F", padding: "8px", borderRadius: "8px" }} title="Eliminar">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );

  return (
    <>
      {viewMode === 'list' ? <ListView /> : <ScheduleForm />}
      
      {/* RENDERIZADO DEL MODAL */}
      <FeedbackModal 
        isOpen={modalConfig.isOpen}
        type={modalConfig.type}
        title={modalConfig.title}
        message={modalConfig.message}
        onConfirm={modalConfig.onConfirm}
        onCancel={modalConfig.onCancel}
      />
    </>
  );
};

export default Horarios;