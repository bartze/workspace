import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditUser() {
  const { id } = useParams();
  const [email, setEmail] = useState("");
  const [type, setType] = useState("user");
  const [active, setActive] = useState(true);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const user = response.data;
        setEmail(user.email);
        setType(user.type);
        setActive(user.active);
      })
      .catch((error) => {
        console.error("Error al obtener el usuario:", error);
        alert("No se pudo obtener el usuario.");
      });
  }, [id, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `/api/users/${id}`,
        { email, type, active },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Usuario actualizado exitosamente.");
      navigate("/home/users");
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
      alert("No se pudo actualizar el usuario.");
    }
  };

  return (
    <div className="card-container">
      <h2 className="card-header">Editar Usuario</h2>
      <form onSubmit={handleSubmit} className="card-form">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          Guardar Cambios
        </button>
      </form>
    </div>
  );
}

export default EditUser;
