import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import UserAvatar from "./UserAvatar";
import "./cards.css";

function Users() {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("/api/users", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error al obtener usuarios:", error));
  }, [token]);

  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar este usuario?")) {
      try {
        await axios.delete(`/api/users/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(users.filter((user) => user.id !== id));
        alert("Usuario eliminado exitosamente.");
      } catch (error) {
        console.error("Error al eliminar el usuario:", error);
        alert("No se pudo eliminar el usuario.");
      }
    }
  };

  return (
    <div className="card-container">
      <h2 className="card-header">Lista de Usuarios</h2>
      <ul className="card-list">
        {users.map((user) => (
          <li key={user.id} className="card-list-item">
            <div className="card-content">
              {/* Imagen del usuario */}
              <UserAvatar identifier={user.email} size={150} />
              {/* Texto del usuario */}
              <div className="card-text">
                <p>{user.email}</p>
                <p>{user.type}</p>
                {/* Botones */}
                <div className="card-buttons">
                  <Link
                    to={`/home/users/${user.id}/edit`}
                    className="button edit-button"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="button delete-button"
                  >
                    Borrar
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
