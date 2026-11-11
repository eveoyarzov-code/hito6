import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  
  const { cart, increaseCount, decreaseCount, totalCart } = useContext(CartContext);

  return (
    <div className="container my-5" style={{ minHeight: "60vh" }}>
      <h2 className="mb-4 text-center fw-bold">🛒 Tu Carrito de Compras</h2>
      
      {!cart || cart.length === 0 ? (
        <p className="text-center text-muted fs-5">Tu carrito está actualmente vacío.</p>
      ) : (
        <div className="mx-auto" style={{ maxWidth: "600px" }}>
          {cart.map((item) => (
            <div key={item.id} className="d-flex align-items-center justify-content-between p-3 mb-3 border rounded shadow-sm bg-white">
              <div className="d-flex align-items-center gap-3">
                <img src={item.img} alt={item.name} style={{ width: "60px", height: "60px", objectFit: "cover" }} className="rounded" 
   />
                <h5 className="text-capitalize mb-0 fw-semibold">{item.name}</h5>
              </div>
              
              <div className="d-flex align-items-center gap-2">
                <span className="fw-bold me-3">${(item.price * item.count).toLocaleString()}</span>
                {/* Botón para restar cantidad */}
                <button className="btn btn-outline-danger btn-sm px-2" onClick={() => decreaseCount(item.id)}>-</button>
                <span className="badge bg-light text-dark border px-3 py-2">{item.count}</span>
                
                <button className="btn btn-outline-primary btn-sm px-2" onClick={() => increaseCount(item.id)}>+</button>
              </div>
            </div>
          ))}
          <hr />
        
          <div className="d-flex justify-content-between align-items-center mt-4">
            <h3 className="fw-bold">Total: ${totalCart.toLocaleString()}</h3>
            <button className="btn btn-dark px-4 py-2">Pagar 💳</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

