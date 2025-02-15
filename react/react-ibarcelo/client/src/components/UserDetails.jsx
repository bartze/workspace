import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setUser(response.data))
      .catch((error) => console.error("Error al obtener el usuario:", error));
  }, [id, token]);

  const handleDelete = async () => {
    if (window.confirm("¿Estás seguro de eliminar este usuario?")) {
      try {
        await axios.delete(`/api/users/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("Usuario eliminado");
        navigate("/home/users");
      } catch (error) {
        console.error("Error al eliminar el usuario:", error);
        alert("No se pudo eliminar el usuario");
      }
    }
  };

  if (!user) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{user.email}</h2>
      <img
        src={`https://avatars.dicebear.com/api/bottts/${encodeURIComponent(
          user.email
        )}.svg?w=50&h=50`}
        alt="Avatar de Usuario"
        style={{ borderRadius: "50%", marginRight: "10px" }}
      />

      <p>Tipo: {user.type}</p>
      <p>Activo: {user.active ? "Sí" : "No"}</p>
      <button onClick={() => navigate(`/home/users/${id}/edit`)}>Editar</button>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
}

export default UserDetails;
