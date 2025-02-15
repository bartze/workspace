import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditStudent() {
  const { id } = useParams();
  const [dni, setDni] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/students/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const student = response.data;
        setDni(student.dni);
        setName(student.name);
        setLastName(student.last_name);
        setDateOfBirth(student.date_of_birth.split("T")[0]); // Formato YYYY-MM-DD
        setTeacherId(student.teacher_id || "");
      })
      .catch((error) => {
        console.error("Error al obtener el estudiante:", error);
        alert("No se pudo obtener el estudiante.");
      });
  }, [id, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `/api/students/${id}`,
        {
          dni,
          name,
          last_name: lastName,
          date_of_birth: dateOfBirth,
          teacher_id: teacherId || null,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Estudiante actualizado exitosamente.");
      navigate("/home/students");
    } catch (error) {
      console.error("Error al actualizar el estudiante:", error);
      alert("No se pudo actualizar el estudiante.");
    }
  };

  return (
    <div className="card-container">
      <h2 className="card-header">Editar Estudiante</h2>
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

        <label htmlFor="teacherId">ID del Profesor (Opcional):</label>
        <input
          type="number"
          id="teacherId"
          value={teacherId}
          onChange={(e) => setTeacherId(e.target.value)}
        />

        <button type="submit" className="card-form button">
          Guardar Cambios
        </button>
      </form>
    </div>
  );
}

export default EditStudent;
