import React, { useContext } from "react";
import { CartContext } from "../App";
import { useNavigate} from "react-router-dom";

const Product = () => {
 
   const { addToCart } = useContext(CartContext);

  const navigate = useNavigate();

  const handleAdd = (product) => {

    const user = localStorage.getItem("user");

    if (user !== "true") {
      alert("⚠️ Please Login First");
      navigate("/login");
      return;
    }

    addToCart(product);

    navigate("/cart");
  };

  return (
    <>
  <section className="products">
    <h1>Fresh. Pure. Organic.</h1>
    <p>
      Discover nature’s best — handpicked, chemical-free, and delivered fresh to
      your doorstep.
    </p>
    <button className="shop-btn">
      Shop Now
    </button>
  </section>
   <section className="product-container">

      <div className="product-card">
    <img src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=600&h=400&fit=crop" />
    <h2>Fresh Apples</h2>
    <p>₹120</p>
    <button onClick={() => handleAdd({
      id: 1,
      name: "Fresh Apples",
      price: 120,
      img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=600&h=400&fit=crop"
    })}>Add To Cart</button>
  </div>


  <div className="product-card">
    <img src="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=600&h=400&fit=crop" />
    <h2>Organic Vegetables</h2>
    <p>₹180</p>
    <button onClick={() => handleAdd({
      id: 2,
      name: "Organic Vegetables",
      price: 180,
      img: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=600&h=400&fit=crop"
    })}>Add To Cart</button>
  </div>

  <div className="product-card">
    <img src="https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&h=400&fit=crop" />
    <h2>Fresh Milk</h2>
    <p>₹60</p>
    <button onClick={() => handleAdd({
      id: 3,
      name: "Fresh Milk",
      price: 60,
      img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&h=400&fit=crop"
    })}>Add To Cart</button>
  </div>


  <div className="product-card">
    <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop" />
    <h2>Organic Bread</h2>
    <p>₹90</p>
    <button onClick={() => handleAdd({
      id: 4,
      name: "Organic Bread",
      price: 90,
      img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop"
    })}>Add To Cart</button>
  </div>


  <div className="product-card">
    <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop" />
    <h2>Green Salad</h2>
    <p>₹150</p>
    <button onClick={() => handleAdd({
      id: 5,
      name: "Green Salad",
      price: 150,
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop"
    })}>Add To Cart</button>
  </div>


  <div className="product-card">
    <img src="https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600&h=400&fit=crop" />
    <h2>Fresh Juice</h2>
    <p>₹110</p>
    <button onClick={() => handleAdd({
      id: 6,
      name: "Fresh Juice",
      price: 110,
      img: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600&h=400&fit=crop"
    })}>Add To Cart</button>
  </div>


  <div className="product-card">
    <img src="https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=600&h=400&fit=crop" />
    <h2>Organic Honey</h2>
    <p>₹250</p>
    <button onClick={() => handleAdd({
      id: 7,
      name: "Organic Honey",
      price: 250,
      img: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=600&h=400&fit=crop"
    })}>Add To Cart</button>
  </div>


  <div className="product-card">
    <img src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600&h=400&fit=crop" />
    <h2>Strawberries</h2>
    <p>₹220</p>
    <button onClick={() => handleAdd({
      id: 8,
      name: "Strawberries",
      price: 220,
      img: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600&h=400&fit=crop"
    })}>Add To Cart</button>
  </div>

 
  <div className="product-card">
    <img src="https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?w=600&h=400&fit=crop" />
    <h2>Organic Eggs</h2>
    <p>₹140</p>
    <button onClick={() => handleAdd({
      id: 9,
      name: "Organic Eggs",
      price: 140,
      img: "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?w=600&h=400&fit=crop"
    })}>Add To Cart</button>
  </div>

  {/* 10 */}
  <div className="product-card">
    <img src="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&h=400&fit=crop" />
    <h2>Bananas</h2>
    <p>₹70</p>
    <button onClick={() => handleAdd({
      id: 10,
      name: "Bananas",
      price: 70,
      img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&h=400&fit=crop"
    })}>Add To Cart</button>
  </div>

  {/* 11 */}
  <div className="product-card">
    <img src="https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600&h=400&fit=crop" />
    <h2>Organic Tea</h2>
    <p>₹300</p>
    <button onClick={() => handleAdd({
      id: 11,
      name: "Organic Tea",
      price: 300,
      img: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600&h=400&fit=crop"
    })}>Add To Cart</button>
  </div>

  {/* Tomatoes */}
<div className="product-card">
  <img src="https://ts2.mm.bing.net/th?id=OIP.JMRIOYp2jmlICSlEma_3gQHaE7&pid=15.1&o=7&rm=3" alt="Tomatoes" />
  <h2>Fresh Tomatoes</h2>
  <p>₹90 / kg</p>
  <button onClick={() => handleAdd({ id: 12, name: "Fresh Tomatoes", price: 90, img: "https://ts2.mm.bing.net/th?id=OIP.JMRIOYp2jmlICSlEma_3gQHaE7&pid=15.1&o=7&rm=3" })}>
    Add To Cart
  </button>
</div>

{/* Oranges */}
<div className="product-card">
  <img src="https://ts4.mm.bing.net/th?id=OIP.ARPB6Gz61AOcstcRiXFO8AHaE6&pid=15.1&o=7&rm=3" alt="Oranges" />
  <h2>Fresh Oranges</h2>
  <p>₹130 / kg</p>
  <button onClick={() => handleAdd({ id: 13, name: "Fresh Oranges", price: 130, img: "https://ts4.mm.bing.net/th?id=OIP.ARPB6Gz61AOcstcRiXFO8AHaE6&pid=15.1&o=7&rm=3" })}>
    Add To Cart
  </button>
</div>

{/* Grapes */}
<div className="product-card">
  <img src="https://ts3.mm.bing.net/th?id=OIP.2Zdttrq5mU4Y059q0lWX2gHaHa&pid=15.1&o=7&rm=3" alt="Grapes" />
  <h2>Fresh Grapes</h2>
  <p>₹160 / kg</p>
  <button onClick={() => handleAdd({ id: 14, name: "Fresh Grapes", price: 160, img: "https://ts3.mm.bing.net/th?id=OIP.2Zdttrq5mU4Y059q0lWX2gHaHa&pid=15.1&o=7&rm=3" })}>
    Add To Cart
  </button>
</div>

{/* Potatoes */}
<div className="product-card">
  <img src="https://ts2.mm.bing.net/th?id=OIP.KmNvk02szf5E_CTy0GxubQHaHa&pid=15.1&o=7&rm=3" alt="Potatoes" />
  <h2>Organic Potatoes</h2>
  <p>₹60 / kg</p>
  <button onClick={() => handleAdd({ id: 15, name: "Organic Potatoes", price: 60, img: "https://ts2.mm.bing.net/th?id=OIP.KmNvk02szf5E_CTy0GxubQHaHa&pid=15.1&o=7&rm=3" })}>
    Add To Cart
  </button>
</div>

{/* Broccoli */}
<div className="product-card">
  <img src="https://ts1.mm.bing.net/th?id=OIP.Iwpd-0C3ziKGXuYSTMATxgHaE6&pid=15.1&o=7&rm=3" alt="Broccoli" />
  <h2>Fresh Broccoli</h2>
  <p>₹140 / kg</p>
  <button onClick={() => handleAdd({ id: 16, name: "Fresh Broccoli", price: 140, img: "hhttps://ts1.mm.bing.net/th?id=OIP.Iwpd-0C3ziKGXuYSTMATxgHaE6&pid=15.1&o=7&rm=3" })}>
    Add To Cart
  </button>
</div>

<div className="product-card">
  <img src="https://ts1.mm.bing.net/th?id=OIP.6BMpkochZFwU-lvXlf5tngHaEP&pid=15.1&o=7&rm=3" alt="Mango" />
  <h2>Fresh Mangoes</h2>
  <p>₹250 / box</p>
  <button onClick={() => handleAdd({ id: 17, name: "Fresh Mangoes", price: 250, img: "https://ts1.mm.bing.net/th?id=OIP.6BMpkochZFwU-lvXlf5tngHaEP&pid=15.1&o=7&rm=3" })}>
    Add To Cart
  </button>
</div>

<div className="product-card">
  <img src="https://ts2.mm.bing.net/th?id=OIP.XWVzzM6OsYoJF17J1f43TQHaHa&pid=15.1&o=7&rm=3" alt="Rice" />
  <h2>Organic Rice</h2>
  <p>₹500 / bag</p>
  <button onClick={() => handleAdd({ id: 18, name: "Organic Rice", price: 500, img: "https://ts2.mm.bing.net/th?id=OIP.XWVzzM6OsYoJF17J1f43TQHaHa&pid=15.1&o=7&rm=3" })}>
    Add To Cart
  </button>
</div>

{/* Avocado */}
<div className="product-card">
  <img src="https://ts3.mm.bing.net/th?id=OIP.oHrNxuBN1yYdzohxIXVABwHaE8&pid=15.1&o=7&rm=3" alt="Avocado" />
  <h2>Fresh Avocado</h2>
  <p>₹180 / kg</p>
  <button onClick={() => handleAdd({ id: 19, name: "Fresh Avocado", price: 180, img: "https://ts3.mm.bing.net/th?id=OIP.oHrNxuBN1yYdzohxIXVABwHaE8&pid=15.1&o=7&rm=3" })}>
    Add To Cart
  </button>
</div>

{/* Almonds */}
<div className="product-card">
  <img src="https://ts3.mm.bing.net/th?id=OIP.fJFevQ7RVlHy1Lw4m-UN5gHaHa&pid=15.1&o=7&rm=3" alt="Almonds" />
  <h2>Organic Almonds</h2>
  <p>₹650 / pack</p>
  <button onClick={() => handleAdd({ id: 20, name: "Organic Almonds", price: 650, img: "https://ts3.mm.bing.net/th?id=OIP.fJFevQ7RVlHy1Lw4m-UN5gHaHa&pid=15.1&o=7&rm=3" })}>
    Add To Cart
  </button>
</div>
      </section>
    </>
  );
};

export default Product
