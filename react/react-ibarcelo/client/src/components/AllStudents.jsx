import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import UserAvatar from "./UserAvatar";
import "./cards.css";

function AllStudents() {
  const [students, setStudents] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("/api/students", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setStudents(response.data))
      .catch((error) => console.error("Error al obtener estudiantes:", error));
  }, [token]);

  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar este estudiante?")) {
      try {
        await axios.delete(`/api/students/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStudents(students.filter((student) => student.id !== id));
        alert("Estudiante eliminado exitosamente.");
      } catch (error) {
        console.error("Error al eliminar el estudiante:", error);
        alert("No se pudo eliminar el estudiante.");
      }
    }
  };

  return (
    <div className="card-container">
      <h2 className="card-header">Lista de Estudiantes</h2>
      <ul className="card-list">
        {students.map((student) => (
          <li key={student.id} className="card-list-item">
            <div className="card-content">
              {/* Imagen del estudiante */}
              <UserAvatar identifier={student.id} size={150} />
              {/* Texto del estudiante */}
              <div className="card-text">
                <p>
                  {student.name} {student.last_name}
                </p>
                <p>DNI: {student.dni}</p>
                {/* Botones */}
                <div className="card-buttons">
                  <Link
                    to={`/home/students/${student.id}/edit`}
                    className="button edit-button"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => handleDelete(student.id)}
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

export default AllStudents;
