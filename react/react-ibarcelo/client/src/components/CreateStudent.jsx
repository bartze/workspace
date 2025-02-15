import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateStudent() {
  const [dni, setDni] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "/api/students",
        {
          dni,
          name,
          last_name: lastName,
          date_of_birth: dateOfBirth,
          teacher_id: user.id, // Asignamos el estudiante al profesor conectado
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Estudiante creado exitosamente");
      navigate("/home/students");
    } catch (error) {
      console.error("Error al crear el estudiante:", error);
      alert("Error al crear el estudiante");
    }
  };

  return (
    <div className="card-container">
      <h2 className="card-header">Crear Estudiante</h2>
      <form onSubmit={handleSubmit} className="card-form">
        <label htmlFor="dni">DNI:</label>
        <input
          type="text"
          id="dni"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
          required
        />

        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="lastName">Apellido:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <label htmlFor="dateOfBirth">Fecha de Nacimiento:</label>
        <input
          type="date"
          id="dateOfBirth"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          className="form-input"
          required
        />

        <button type="submit" className="card-form button">
          Crear Estudiante
        </button>
      </form>
    </div>
  );
}

export default CreateStudent;
