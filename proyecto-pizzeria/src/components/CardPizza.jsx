const CardPizza = ({ pizza, addToCart }) => {
  const { name, price, ingredients, img, desc } = pizza;

  return (
    <div className="card h-100 shadow-sm">
      <img 
      src={img} 
      className="card-img-top" 
      alt={name}
  />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title text-capitalize fw-bold">{name}</h5>
          <p className="card-text text-muted small">{desc}</p>
          <hr />
          <p className="card-text fw-semibold text-center mb-1">🍕 Ingredientes:</p>
          <ul className="list-unstyled text-center small mb-3">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="text-capitalize text-muted">• {ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <hr />
          <h4 className="text-center fw-bold mb-3">${price.toLocaleString()}</h4>
          <div className="d-flex justify-content-around">
            <button className="btn btn-outline-dark btn-sm">Ver Más 👀</button>
            
            <button className="btn btn-dark btn-sm" onClick={() => addToCart(pizza)}>
              Añadir 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
