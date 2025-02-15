function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <p>No se pudo obtener la información del usuario.</p>;
  }

  return (
    <div className="card-container">
      <h2 className="card-header">Perfil de Usuario</h2>
      <p>Email: {user.email}</p>
      <p>Tipo de Usuario: {user.type}</p>
      {/* Agrega otros datos si es necesario */}
    </div>
  );
}

export default Profile;
