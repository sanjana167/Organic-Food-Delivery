import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

  const Header = () => {
  
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("user") === "true";

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
<>
  <header className="navbar">
    <div className="left"></div>
    <div className="logo">🌱 Organic</div>
    <div className="search-box">
      <select>
        <option>All Categories</option>
        <option>Organic Fruits</option>
        <option>Organic Vegetables</option>
        <option>Organic Grains</option>
        <option>Organic Pulses</option>
        <option>Organic Spices</option>
        <option>Organic Dairy Products</option>
        <option>Organic Dry Fruits</option>
        <option>Organic Juices</option>
        <option>Organic Tea &Coffee</option>
        <option>Organic Snacks</option>
        <option>Organic Honey</option>
        <option>Organic Oils</option>
        <option>Organic Baby Food</option>
      </select>
      <input type="text" placeholder="Search for more than 20,000 products" />
    </div>
    <nav className="menu">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/product">Product</Link>
      <Link to="/contact">Contact</Link>
      
    

   {/* <div className="icons"> */}

          {isLoggedIn ? (
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          ) : (
            <Link to="/login" className="login-btn">
              Login/Signup
            </Link>
          )}

      </nav>

      <div className="cart-icon">
       <Link to="/cart" className="cart-icon">
  <FaShoppingCart />

</Link>
    </div>
  </header>
  <div className="overlay" id="overlay" onclick="closeMenu()" />
  <div className="sidebar" id="sidebar">
    <div className="sidebar-header">
      <h3>SHOP BY CATEGORIES</h3>
      <span onclick="closeMenu()">✖</span>
    </div>
    <ul>
      <li>🍎 Fruits & Vegetables</li>
      <li>🥛 Dairy & Eggs</li>
      <li>🍗 Meat & Poultry</li>
      <li>🐟 Seafood</li>
      <li>🥖 Bakery</li>
      <li>🥫 Canned Goods</li>
      <li>❄️ Frozen Foods</li>
      <li>🍝 Pasta & Rice</li>
      <li>🍳 Breakfast</li>
      <li>🍿 Snacks</li>
      <li>🥤 Beverages</li>
      <li>🌶️ Spices</li>
    </ul>
  </div>
</>


  )
}

export default Header
