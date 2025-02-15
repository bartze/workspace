import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import UserAvatar from "./UserAvatar";
import "./cards.css";

function AllMembers() {
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const token = localStorage.getItem("token");

  // Fetch de Teachers y Students
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [teachersResponse, studentsResponse] = await Promise.all([
          axios.get("/api/teachers", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get("/api/students", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        setTeachers(teachersResponse.data);
        setStudents(studentsResponse.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, [token]);

  // Filtrar resultados según el término de búsqueda
  const filteredTeachers = teachers.filter((teacher) =>
    `${teacher.name} ${teacher.last_name}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const filteredStudents = students.filter((student) =>
    `${student.name} ${student.last_name}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  // Manejo de eliminar Teacher o Student
  const handleDelete = async (id, type) => {
    if (window.confirm(`¿Estás seguro de eliminar este ${type}?`)) {
      try {
        if (type === "teacher") {
          await axios.delete(`/api/teachers/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setTeachers(teachers.filter((teacher) => teacher.id !== id));
        } else if (type === "student") {
          await axios.delete(`/api/students/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setStudents(students.filter((student) => student.id !== id));
        }
        alert(
          `${
            type.charAt(0).toUpperCase() + type.slice(1)
          } eliminado exitosamente.`
        );
      } catch (error) {
        console.error(`Error al eliminar el ${type}:`, error);
        alert(`No se pudo eliminar el ${type}.`);
      }
    }
  };

  return (
    <div className="card-container">
      <h2 className="card-header">Todos los Miembros</h2>
      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar profesores o estudiantes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* Listado de Teachers */}
      <h3>Profesores</h3>
      <ul className="card-list">
        {filteredTeachers.map((teacher) => (
          <li key={teacher.id} className="card-list-item">
            <div className="card-content">
              {/* Avatar */}
              <UserAvatar identifier={teacher.id} type="teacher" size={150} />
              {/* Información del profesor */}
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
                    onClick={() => handleDelete(teacher.id, "teacher")}
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

      {/* Listado de Students */}
      <h3>Estudiantes</h3>
      <ul className="card-list">
        {filteredStudents.map((student) => (
          <li key={student.id} className="card-list-item">
            <div className="card-content">
              {/* Avatar */}
              <UserAvatar identifier={student.id} type="student" size={150} />
              {/* Información del estudiante */}
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
                    onClick={() => handleDelete(student.id, "student")}
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

export default AllMembers;
