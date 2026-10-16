import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleQuantityChange = (id, type) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQty = type === "increase" ? item.quantity + 1 : item.quantity - 1;
        return { ...item, quantity: Math.max(newQty, 1) };
      }
      return item;
    }));
  };

  const handleDelete = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 5;
  const discount = 10;
  const total = subtotal + shipping - discount;

  return (
    <section className="cart-page">
      <div className="cart-wrapper">
        <div className="cart-top">
          <h1>My Shopping Cart</h1>
          <a href="/" className="continue-btn">Continue Shopping</a>
        </div>

        <div className="cart-container">
          <div className="cart-items">
            {cartItems.length === 0 ? (
              <p>No items in cart</p>
            ) : (
              cartItems.map(item => (
                <div key={item.id} className="cart-card">
                  <img src={item.img} alt={item.name} />
                  <div className="cart-info">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <div className="cart-bottom">
                      <div className="quantity-box">
                        <button onClick={() => handleQuantityChange(item.id, "decrease")}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => handleQuantityChange(item.id, "increase")}>+</button>
                      </div>
                      <h2>${item.price * item.quantity}</h2>
                    </div>
                  </div>
                  <i className="fa-solid fa-trash delete-icon" onClick={() => handleDelete(item.id)}></i>
                </div>
              ))
            )}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row"><p>Subtotal</p><span>${subtotal}</span></div>
            <div className="summary-row"><p>Shipping</p><span>${shipping}</span></div>
            <div className="summary-row"><p>Discount</p><span>- ${discount}</span></div>
            <div className="summary-total"><p>Total</p><h3>${total}</h3></div>
          <Link to="/checkout">
  <button className="checkout-btn">Proceed To Checkout</button>
</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
