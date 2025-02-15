import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("user");
  const [active, setActive] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "/api/users",
        {
          email,
          password,
          type,
          active,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Usuario creado exitosamente");
      navigate("/home/users");
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      alert("Error al crear el usuario");
    }
  };

  return (
    <div className="card-container">
      <h2 className="card-header">Crear Usuario</h2>
      <form onSubmit={handleSubmit} className="card-form">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="type">Tipo:</label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="card-form select"
        >
          <option value="admin">Admin</option>
          <option value="user">Usuario</option>
        </select>

        <label htmlFor="active">Activo:</label>
        <input
          type="checkbox"
          id="active"
          checked={active}
          onChange={(e) => setActive(e.target.checked)}
        />

        <button type="submit" className="card-form button">
          Crear Usuario
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
