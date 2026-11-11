import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container my-5 text-center d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "60vh" }}>
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-3">🍕 ¡Oh no! Nos quedamos sin rebanadas</h2>
      <p className="text-muted mb-4">La página que estás buscando no existe o fue devorada.</p>
      <Link to="/" className="btn btn-dark px-4 py-2">
        Volver al Inicio 🏠
      </Link>
    </div>
  );
};

export default NotFound;
