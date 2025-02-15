import { useNavigate, NavLink } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const userType = user ? user.type : null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="menu">
      <h1 className="academy-title">Αcademy</h1>
      <ul>
        <li>
          <NavLink
            to="/home/profile"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Perfil
          </NavLink>
        </li>
        {userType === "admin" && (
          <>
            <li>
              <NavLink
                to="/home/users"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Usuarios
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/home/user/create"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Crear Usuario
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/home/teachers"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Profesores
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/home/teacher/create"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Crear Profesor
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/home/all-members"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Todos los Miembros
              </NavLink>
            </li>
          </>
        )}
        {userType === "admin" || userType === "user" ? (
          <>
            <li>
              <NavLink
                to="/home/students"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Todos los Estudiantes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/home/student/create"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Crear Estudiante
              </NavLink>
            </li>
            {/* Mostrar Mis Estudiantes para admin y user */}
            <li>
              <NavLink
                to="/home/my-students"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Mis Estudiantes
              </NavLink>
            </li>
          </>
        ) : null}
        {/* Botón de Logout */}
        <li>
          <button onClick={handleLogout} className="menu button">
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
