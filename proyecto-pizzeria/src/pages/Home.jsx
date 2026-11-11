import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CardPizza from "../components/CardPizza";

const Home = () => {
 
  const { pizzas, addToCart } = useContext(CartContext);

  if (!pizzas) {
    return <p className="text-center mt-5">Cargando exquisitas pizzas...</p>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {pizzas.map((pizza) => (
          <div className="col-md-4 mb-4" key={pizza.id}>
            <CardPizza
              pizza={pizza} 
              addToCart={addToCart} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
