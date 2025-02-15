import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditTeacher() {
  const { id } = useParams();
  const [dni, setDni] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/teachers/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const teacher = response.data;
        setDni(teacher.dni);
        setName(teacher.name);
        setLastName(teacher.last_name);
        setDateOfBirth(teacher.date_of_birth.split("T")[0]); // Formato YYYY-MM-DD
      })
      .catch((error) => {
        console.error("Error al obtener el profesor:", error);
        alert("No se pudo obtener el profesor.");
      });
  }, [id, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `/api/teachers/${id}`,
        { dni, name, last_name: lastName, date_of_birth: dateOfBirth },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Profesor actualizado exitosamente.");
      navigate("/home/teachers");
    } catch (error) {
      console.error("Error al actualizar el profesor:", error);
      alert("No se pudo actualizar el profesor.");
    }
  };

  return (
    <div className="card-container">
      <h2 className="card-header">Editar Profesor</h2>
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
          required
        />

        <button type="submit" className="card-form button">
          Guardar Cambios
        </button>
      </form>
    </div>
  );
}

export default EditTeacher;
