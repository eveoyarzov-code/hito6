const Profile = () => {
  return (
    <div className="container my-5 text-center" style={{ minHeight: "60vh" }}>
      <div className="card mx-auto p-4 shadow" style={{ maxWidth: "400px" }}>
        <h2 className="mb-4">👤 Perfil de Usuario</h2>
        <p className="fs-5 text-muted mb-4">
          <strong>Email:</strong> usuario@mammamia.com
        </p>
        <button className="btn btn-danger w-100">
          Cerrar Sesión 🚪
        </button>
      </div>
    </div>
  );
};

export default Profile;
