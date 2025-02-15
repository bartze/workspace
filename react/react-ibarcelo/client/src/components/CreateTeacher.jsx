import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateTeacher() {
  const [dni, setDni] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [userId, setUserId] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/users", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(response.data);
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      }
    };

    fetchUsers();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "/api/teachers",
        {
          dni,
          name,
          last_name: lastName,
          date_of_birth: dateOfBirth,
          user_id: userId || null, // Opcional
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Profesor creado exitosamente");
      navigate("/home/teachers");
    } catch (error) {
      console.error("Error al crear el profesor:", error);
      alert("Error al crear el profesor");
    }
  };

  return (
    <div className="card-container">
      <h2 className="card-header">Crear Profesor</h2>
      <form onSubmit={handleSubmit} className="card-form">
        <label htmlFor="dni">DNI:</label>
        <input
          type="text"
          id="dni"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
          required
          className="form-input"
        />

        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="form-input"
        />

        <label htmlFor="lastName">Apellido:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          className="form-input"
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

        <label htmlFor="associated_user">Asociar a Usuario (opcional):</label>
        <select
          id="associated_user"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="form-input"
        >
          <option value="">-- Seleccionar Usuario --</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.email}
            </option>
          ))}
        </select>

        <button type="submit" className="card-form button">
          Crear Profesor
        </button>
      </form>
    </div>
  );
}

export default CreateTeacher;
