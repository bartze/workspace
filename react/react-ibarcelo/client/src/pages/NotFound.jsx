import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h2>Oops! Página no encontrada</h2>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <Link to="/home/profile">Volver a la página principal</Link>
    </div>
  );
}

export default NotFound;
