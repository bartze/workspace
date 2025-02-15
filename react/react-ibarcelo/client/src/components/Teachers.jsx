import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import UserAvatar from "./UserAvatar";
import "./cards.css";

function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("/api/teachers", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setTeachers(response.data))
      .catch((error) => console.error("Error al obtener profesores:", error));
  }, [token]);

  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar este profesor?")) {
      try {
        await axios.delete(`/api/teachers/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTeachers(teachers.filter((teacher) => teacher.id !== id));
        alert("Profesor eliminado exitosamente.");
      } catch (error) {
        console.error("Error al eliminar el profesor:", error);
        alert("No se pudo eliminar el profesor.");
      }
    }
  };

  return (
    <div className="card-container">
      <h2 className="card-header">Lista de Profesores</h2>
      <ul className="card-list">
        {teachers.map((teacher) => (
          <li key={teacher.id} className="card-list-item">
            <div className="card-content">
              {/* Imagen del profesor */}
              <UserAvatar identifier={teacher.id} size={150} />
              {/* Texto del profesor */}
              <div className="card-text">
                <p>
                  {teacher.name} {teacher.last_name}
                </p>
                <p>DNI: {teacher.dni}</p>
                {/* Botones */}
                <div className="card-buttons">
                  <Link
                    to={`/home/teachers/${teacher.id}/edit`}
                    className="button edit-button"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => handleDelete(teacher.id)}
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

export default Teachers;
