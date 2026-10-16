import React, { useContext, useState } from "react";
import { CartContext } from "../App";
import Swal from "sweetalert2";

  const Checkout = () => {
  const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  pincode: "",
  address: ""
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

const handlePlaceOrder = (e) => {
  e.preventDefault();

  Swal.fire({
    icon: "success",
    title: "Order Placed Successfully!",
    text: "Your order has been placed.",
    confirmButtonText: "OK"
  });

  setFormData({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    pincode: "",
    address: ""
  });
};
  const { cartItems } = useContext(CartContext);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const delivery = 5;
  const total = subtotal + delivery;
  return (
    <section className="checkout-page">

      <div className="checkout-container">

       
        <div className="checkout-left">

          <div className="checkout-title">
            <h1>Organic Checkout</h1>
            <p>
              Fresh • Healthy • 100% Organic Products Delivered To Your Door
            </p>
          </div>

          <form className="checkout-form" onSubmit={handlePlaceOrder}>

            <input
  type="text"
  name="firstName"
  placeholder="First Name"
  value={formData.firstName}
  onChange={handleChange}
/>

<input
  type="text"
  name="lastName"
  placeholder="Last Name"
  value={formData.lastName}
  onChange={handleChange}
/>

<input
  type="email"
  name="email"
  placeholder="Email Address"
  value={formData.email}
  onChange={handleChange}
/>

<input
  type="number"
  name="phone"
  placeholder="Phone Number"
  value={formData.phone}
  onChange={handleChange}
/>

<input
  type="text"
  name="pincode"
  placeholder="Pincode"
  value={formData.pincode}
  onChange={handleChange}
/>

<textarea
  rows="4"
  name="address"
  placeholder="Delivery Address"
  value={formData.address}
  onChange={handleChange}
></textarea>

            
            <div className="delivery-options">

              <div className="delivery-card">
                <i className="fa-solid fa-truck"></i>
                <h4>Fast Delivery</h4>
                <p>Delivery within 30 Minutes</p>
              </div>

              <div className="delivery-card">
                <i className="fa-solid fa-leaf"></i>
                <h4>Eco Delivery</h4>
                <p>Eco Friendly Packaging</p>
              </div>

              <div className="delivery-card">
                <i className="fa-solid fa-store"></i>
                <h4>Store Pickup</h4>
                <p>Pickup from Organic Store</p>
              </div>

            </div>

            <button className="place-order-btn">
              Place Your Order
            </button>

          </form>

        </div>

       
        <div className="checkout-right">

          <div className="order-box">

            <h2>Your Order</h2>
{cartItems.map((item) => (
  <div className="order-item" key={item.id}>
    <img src={item.img} alt={item.name} />

    <div className="order-info">
      <h4>{item.name}</h4>
      <p>Quantity : {item.quantity}</p>
      <p>${item.price * item.quantity}</p>
    </div>
  </div>
))}
         <div className="total-box">

  <div className="total-row">
    <span>Subtotal</span>
    <span>${subtotal}</span>
  </div>

  <div className="total-row">
    <span>Delivery</span>
    <span>${delivery}</span>
  </div>

  <div className="total-row grand-total">
    <span>Total</span>
    <span>${total}</span>
  </div>

</div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Checkout;