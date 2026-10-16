import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../App';

const Home = () => {
      const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAdd = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  const scrollPage = () => {
    document.getElementById("next-section")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const openLogin = () => {
    navigate("/login");
  };
    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <h1>
                        <span>Organic</span> Foods at your Doorsteps
                    </h1>
                    <div className="buttons">
                        <button className="btn green" onclick="scrollPage()">
                            START SHOPPING
                        </button>
                        <button className="btn dark " onclick="openLogin()">
                            JOIN NOW
                        </button>
                    </div>
                    <div className="stats">
                        <div>
                            <strong>14k+</strong>
                            <br />
                            PRODUCT VARIETIES
                        </div>
                        <div>
                            <strong>50k+</strong>
                            <br />
                            HAPPY CUSTOMERS
                        </div>
                        <div>
                            <strong>10+</strong>
                            <br />
                            STORE LOCATIONS
                        </div>
                    </div>
                </div>
            </section>
            <section className="features" id="next-section">
                <div className="box green-box">🌱 Fresh from farm</div>
                <div className="box dark-box">🍃 100% Organic</div>
                <div className="box orange-box">🚚 Free delivery</div>
            </section>
            <div className="page-wrapper">
                <div className="container">
                    <section className="category">
                        <div className="header">
                            <h2>Category</h2>
                            {/* <div className="controls">
                                <button onclick="scrollLeftCat()">◀</button>
                                <button onclick="scrollRightCat()">▶</button>
                                <button className="view-all">View All</button>
                            </div> */}
                        </div>
                        <div className="category-list" id="catScroll">
                            <div className="cat-item">
                                <img src="https://picjumbo.com/wp-content/uploads/fresh-amp-colorful-fruits-and-vegetables-2210x1473.jpg" />
                                <p>Fruits & Veges</p>
                            </div>
                            <div className="cat-item">
                                <img src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec" />
                                <p>Breads & Sweets</p>
                            </div>
                            <div className="cat-item">
                                <img src="https://images.unsplash.com/photo-1551024709-8f23befc6f87" />
                                <p>Beverages</p>
                            </div>
                            <div className="cat-item">
                                <img src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d" />
                                <p>Oils</p>
                            </div>
                            <div className="cat-item">
                                <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092" />
                                <p>Meat Products</p>
                            </div>
                            <div className="cat-item">
                                <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6" />
                                <p>Herbs</p>
                            </div>
                            <div className="cat-item">
                                <img src="https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f" />
                                <p>Dairy</p>
                            </div>
                            <div className="cat-item">
                                <img src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c" />
                                <p>Sweets</p>
                            </div>
                            <div className="cat-item">
                                <img src="https://tse4.mm.bing.net/th/id/OIP.v0FKPnzRwWw95-ygbXqVgQHaEK?r=0&w=1296&h=728&rs=1&pid=ImgDetMain&o=7&rm=3" />
                                <p>Baby foods & Formulas</p>
                            </div>
                            <div className="cat-item">
                                <img src="https://tse4.mm.bing.net/th/id/OIP.U_d5yCXC2rFhJiw2xsf-2QHaIV?r=0&w=800&h=900&rs=1&pid=ImgDetMain&o=7&rm=3" />
                                <p>Personal Care</p>
                            </div>
                            <div className="cat-item">
                                <img src="https://media.istockphoto.com/id/458966437/photo/pet-food-assortment.jpg?s=612x612&w=0&k=20&c=9TjeRNn4eItIT7UszMSBdIG3IfunJl4evVVwLOKtj6E=" />
                                <p>Pet food & Supplies</p>
                            </div>
                            <div className="cat-item">
                                <img src="https://wallpapercrafter.com/desktop2/780919-Food-Herbs-and-Spices-white-background-food-and.jpg" />
                                <p>Spices & Seasoning</p>
                            </div>
                            <div className="cat-item">
                                <img src="https://media.istockphoto.com/id/1263686908/photo/mixed-salty-snack-flat-lay-table-scene-on-a-wood-background.jpg?s=612x612&w=0&k=20&c=rCZ-gpvz--NpeNA0cYGCyJj3EK0kFUSkvdsow9u4I3o=" />
                                <p>Snack & Chips</p>
                            </div>
                            <div className="cat-item">
                                <img src="https://tse3.mm.bing.net/th/id/OIP.96OMj2wjdonEJCC0WPS_UAHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" />
                                <p>Health & Wellness</p>
                            </div>
                        </div>
                    </section>
                    <section className="product">
                        <div className="header">
                            <h2>Best selling product</h2>
                            <button>View All</button>
                        </div>
                        <div className="product-list">


                            <div className="card">
                                <img
                                    src="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=1000&auto=format&fit=crop"
                                    alt="Fresh Bananas"
                                />
                                <h4>Fresh Bananas</h4>
                                <div className="stars">⭐⭐⭐⭐⭐ (180)</div>
                                <p className="price"><span>$20.00</span> $15.00</p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 102,
                                                name: "Fresh Bananas",
                                                price: 15,
                                                img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=1000&auto=format&fit=crop",
                                                description: "Sweet bananas"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>

                                    <button className="wish-btn">♡</button>
                                </div>
                            </div>

                            <div className="card">
                                <img
                                    src="https://images.unsplash.com/photo-1585059895524-72359e06133a?q=80&w=800"
                                    alt="Organic Kiwi"
                                />
                                <h4>Organic Kiwi</h4>
                                <div className="stars">⭐⭐⭐⭐⭐ (175)</div>
                                <p className="price"><span>$22.00</span> $16.00</p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 103,
                                                name: "Organic Kiwi",
                                                price: 16,
                                                img: "https://images.unsplash.com/photo-1585059895524-72359e06133a?q=80&w=800",
                                                description: "Healthy kiwi"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>

                                    <button className="wish-btn">♡</button>
                                </div>
                            </div>
                            

                            <div className="card">
                                <img
                                    src="https://images.unsplash.com/photo-1537640538966-79f369143f8f?q=80&w=800"
                                    alt="Fresh Grapes"
                                />
                                <h4>Fresh Grapes</h4>
                                <div className="stars">⭐⭐⭐⭐⭐ (210)</div>
                                <p className="price"><span>$20.00</span> $14.00</p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 104,
                                                name: "Fresh Grapes",
                                                price: 14,
                                                img: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?q=80&w=800",
                                                description: "Juicy grapes"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>

                                    <button className="wish-btn">♡</button>
                                </div>
                            </div>
                            

                            <div className="card">
                                <img
                                    src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=800"
                                    alt="Fresh Strawberries"
                                />
                                <h4>Fresh Strawberries</h4>
                                <div className="stars">⭐⭐⭐⭐⭐ (260)</div>
                                <p className="price"><span>$30.00</span> $24.00</p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 105,
                                                name: "Fresh Strawberries",
                                                price: 24,
                                                img: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=800",
                                                description: "Sweet strawberries"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>

                                    <button className="wish-btn">♡</button>
                                </div>
                            </div>

                            <div className="card">
                                <img
                                    src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=800"
                                    alt="Fresh Avocado"
                                />
                                <h4>Fresh Avocado</h4>
                                <div className="stars">⭐⭐⭐⭐⭐ (190)</div>
                                <p className="price"><span>$25.00</span> $18.00</p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 106,
                                                name: "Fresh Avocado",
                                                price: 18,
                                                img: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=800",
                                                description: "Fresh avocado"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>

                                    <button className="wish-btn">♡</button>
                                </div>
                            </div>
                             <div className="card">
                                <img
                                    src="https://th.bing.com/th/id/OIP.X3RZ5rwXXLWU9swsIUO_mwHaHa?w=157&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
                                    alt="Fresh Avocado"
                                />
                                <h4> Mushrooms</h4>
                                <div className="stars">⭐⭐⭐⭐⭐ (190)</div>
                                <p className="price"><span>$25.00</span> $18.00</p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 106,
                                                name: "Fresh Avocado",
                                                price: 18,
                                                img: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=800",
                                                description: "Fresh avocado"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>

                                    <button className="wish-btn">♡</button>
                                </div>
                            </div> <div className="card">
                                <img
                                    src="https://th.bing.com/th/id/OIP.LSKXbc53GhzTxawq9K31sQAAAA?w=249&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
                                    alt="Fresh Avocado"
                                />
                                <h4>Pure Ghee</h4>
                                <div className="stars">⭐⭐⭐⭐⭐ (190)</div>
                                <p className="price"><span>$25.00</span> $18.00</p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 106,
                                                name: "Fresh Avocado",
                                                price: 18,
                                                img: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=800",
                                                description: "Fresh avocado"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>

                                    <button className="wish-btn">♡</button>
                                </div>
                            </div>
                             <div className="card">
                                <img
                                    src="data:image/webp;base64,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"
                                    alt="Fresh Avocado"
                                />
                                <h4>Fresh Oranges</h4>
                                <div className="stars">⭐⭐⭐⭐⭐ (190)</div>
                                <p className="price"><span>$25.00</span> $18.00</p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 106,
                                                name: "Fresh Avocado",
                                                price: 18,
                                                img: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=800",
                                                description: "Fresh avocado"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>

                                    <button className="wish-btn">♡</button>
                                </div>
                            </div>
                             <div className="card">
                                <img
                                    src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800"
                                    alt="Fresh Avocado"
                                />
                                <h4>Fresh Salad</h4>
                                <div className="stars">⭐⭐⭐⭐⭐ (190)</div>
                                <p className="price"><span>$25.00</span> $18.00</p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 106,
                                                name: "Fresh Avocado",
                                                price: 18,
                                                img: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=800",
                                                description: "Fresh avocado"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>

                                    <button className="wish-btn">♡</button>
                                </div>
                            </div>
                            

                            <div className="card">
                                <img
                                    src="https://images.unsplash.com/photo-1546094096-0df4bcaaa337?q=80&w=800"
                                    alt="Fresh Tomatoes"
                                />

                                <h4>Fresh Tomatoes</h4>

                                <div className="stars">⭐⭐⭐⭐⭐ (155)</div>

                                <p className="price">
                                    <span>$16.00</span> $12.00
                                </p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 107,
                                                name: "Fresh Tomatoes",
                                                price: 12,
                                                img: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?q=80&w=800",
                                                description: "Organic fresh tomatoes"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>

                                    <button className="wish-btn">♡</button>
                                </div>
                            </div>

                            <div className="card">
                                <img
                                    src="https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=800"
                                    alt="Dark Chocolate"
                                />

                                <h4>Dark Chocolate</h4>

                                <div className="stars">⭐⭐⭐⭐⭐ (300)</div>

                                <p className="price">
                                    <span>$18.00</span> $12.00
                                </p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 108,
                                                name: "Dark Chocolate",
                                                price: 12,
                                                img: "https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=800",
                                                description: "Premium dark chocolate"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>

                                    <button className="wish-btn">♡</button>
                                </div>
                            </div>

                            <div className="card">
                                <img
                                    src="https://images.unsplash.com/photo-1519096845289-95806ee03a1a?q=80&w=800"
                                    alt="Fresh Mangoes"
                                />

                                <h4>Fresh Mangoes</h4>

                                <div className="stars">⭐⭐⭐⭐⭐ (175)</div>

                                <p className="price">
                                    <span>$24.00</span> $18.00
                                </p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 109,
                                                name: "Fresh Mangoes",
                                                price: 18,
                                                img: "https://images.unsplash.com/photo-1519096845289-95806ee03a1a?q=80&w=800",
                                                description: "Sweet juicy mangoes"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>

                                    <button className="wish-btn">♡</button>
                                </div>
                            </div>

                            <div className="card">
                                <img
                                    src="https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?q=80&w=800"
                                    alt="Fresh Broccoli"
                                />

                                <h4>Fresh Broccoli</h4>

                                <div className="stars">⭐⭐⭐⭐⭐ (125)</div>

                                <p className="price">
                                    <span>$19.00</span> $14.00
                                </p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 110,
                                                name: "Fresh Broccoli",
                                                price: 14,
                                                img: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?q=80&w=800",
                                                description: "Healthy broccoli"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>

                                    <button className="wish-btn">♡</button>
                                </div>
                            </div>

                            <div className="card">
                                <img
                                    src="https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=800"
                                    alt="Fresh Orange Juice"
                                />

                                <h4>Fresh Orange Juice</h4>

                                <div className="stars">⭐⭐⭐⭐⭐ (220)</div>

                                <p className="price">
                                    <span>$20.00</span> $15.00
                                </p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 111,
                                                name: "Fresh Orange Juice",
                                                price: 15,
                                                img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=800",
                                                description: "Natural orange juice"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>

                                    <button className="wish-btn">♡</button>
                                </div>
                            </div>


                        </div>

                    </section>
                    <section className="offers">
                        <div className="left-banner">
                            <div className="overlay-text">
                                <h2>Items on SALE</h2>
                                <p>Discounts up to 30%</p>
                                <button>SHOP NOW</button>
                            </div>
                        </div>
                        <div className="right-banners">
                            <div className="small-banner one">
                                <div className="overlay-text">
                                    <h3>Combo offers</h3>
                                    <p>Discounts up to 50%</p>
                                </div>
                            </div>
                            <div className="small-banner two">
                                <div className="overlay-text">
                                    <h3>Discount Coupons</h3>
                                    <p>Discounts up to 40%</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="product-section">
                        <div className="header">
                            <h2>Featured products</h2>
                            <div className="controls">
                                <button className="view-all">View All</button>
                                <button className="arrow">◀</button>
                                <button className="arrow">▶</button>
                            </div>
                        </div>

                        <div className="product-row">

                            <div className="card">
                                <img
                                    src="https://images.pexels.com/photos/6802983/pexels-photo-6802983.jpeg"
                                    alt="Greek Style Plain Yogurt"
                                />
                                <p>Greek Style Plain Yogurt</p>
                                <div className="stars">⭐⭐⭐⭐⭐ (222)</div>
                                <p className="price">
                                    <span>$24.00</span> $18.00{" "}
                                    <span className="discount">10% OFF</span>
                                </p>
                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 101,
                                                name: "Greek Style Plain Yogurt",
                                                price: 18,
                                                img: "https://images.pexels.com/photos/6802983/pexels-photo-6802983.jpeg",
                                                description: "Creamy greek yogurt"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>
                                    <button className="wish-btn">♡</button>
                                </div>
                            </div>


                            <div className="card">
                                <img
                                    src="https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg"
                                    alt="Pure Squeezed Orange Juice"
                                />
                                <p>Pure Squeezed Orange Juice</p>
                                <div className="stars">⭐⭐⭐⭐⭐ (222)</div>
                                <p className="price">
                                    <span>$24.00</span> $18.00{" "}
                                    <span className="discount">10% OFF</span>
                                </p>
                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 102,
                                                name: "Pure Squeezed Orange Juice",
                                                price: 18,
                                                img: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg",
                                                description: "Fresh orange juice"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>
                                    <button className="wish-btn">♡</button>
                                </div>
                            </div>

                            <div className="card">
                                <img
                                    src="https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=800"
                                    alt="Fresh Oranges"
                                />
                                <p>Fresh Oranges</p>
                                <div className="stars">⭐⭐⭐⭐⭐ (222)</div>
                                <p className="price">
                                    <span>$24.00</span> $18.00{" "}
                                    <span className="discount">10% OFF</span>
                                </p>
                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 103,
                                                name: "Fresh Oranges",
                                                price: 18,
                                                img: "https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=800",
                                                description: "Juicy oranges"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>
                                    <button className="wish-btn">♡</button>
                                </div>
                            </div>

                            <div className="card">
                                <img
                                    src="https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=800"
                                    alt="Gourmet Dark Chocolate Bars"
                                />
                                <p>Gourmet Dark Chocolate Bars</p>
                                <div className="stars">⭐⭐⭐⭐⭐ (222)</div>
                                <p className="price">
                                    <span>$24.00</span> $18.00{" "}
                                    <span className="discount">10% OFF</span>
                                </p>
                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 104,
                                                name: "Gourmet Dark Chocolate Bars",
                                                price: 18,
                                                img: "https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=800",
                                                description: "Premium dark chocolate"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>
                                    <button className="wish-btn">♡</button>
                                </div>
                            </div>

                            <div className="card">
                                <img
                                    src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=800"
                                    alt="Fresh Green Celery"
                                />
                                <p>Fresh Green Celery</p>
                                <div className="stars">⭐⭐⭐⭐⭐ (222)</div>
                                <p className="price">
                                    <span>$24.00</span> $18.00{" "}
                                    <span className="discount">10% OFF</span>
                                </p>
                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 105,
                                                name: "Fresh Green Celery",
                                                price: 18,
                                                img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=800",
                                                description: "Fresh organic celery"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>
                                    <button className="wish-btn">♡</button>
                                </div>
                            </div>

                            <div className="card">
                                <img
                                    src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800"
                                    alt="Sandwich Bread"
                                />
                                <p>Sandwich Bread</p>
                                <div className="stars">⭐⭐⭐⭐⭐ (222)</div>
                                <p className="price">
                                    <span>$24.00</span> $18.00{" "}
                                    <span className="discount">10% OFF</span>
                                </p>
                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 106,
                                                name: "Sandwich Bread",
                                                price: 18,
                                                img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800",
                                                description: "Fresh baked bread"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>
                                    <button className="wish-btn">♡</button>
                                </div>
                            </div>

                            <div className="card">
                                <img
                                    src="https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=800"
                                    alt="Honeycrisp Apples"
                                />
                                <p>Honeycrisp Apples</p>
                                <div className="stars">⭐⭐⭐⭐⭐ (222)</div>
                                <p className="price">
                                    <span>$24.00</span> $18.00{" "}
                                    <span className="discount">10% OFF</span>
                                </p>
                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 107,
                                                name: "Honeycrisp Apples",
                                                price: 18,
                                                img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=800",
                                                description: "Sweet apples"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>
                                    <button className="wish-btn">♡</button>
                                </div>
                            </div>

                            <div className="card">
                                <img
                                    src="https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg"
                                    alt="Organic Cashew Nuts"
                                />
                                <p>Organic Cashew Nuts</p>
                                <div className="stars">⭐⭐⭐⭐⭐ (222)</div>
                                <p className="price">
                                    <span>$24.00</span> $18.00{" "}
                                    <span className="discount">10% OFF</span>
                                </p>
                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 108,
                                                name: "Organic Cashew Nuts",
                                                price: 18,
                                                img: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg",
                                                description: "Crunchy cashews"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>
                                    <button className="wish-btn">♡</button>
                                </div>
                            </div>

                            <div className="card">
                                <img
                                    src="https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg"
                                    alt="Fresh Red Tomatoes"
                                />
                                <p>Fresh Red Tomatoes</p>
                                <div className="stars">⭐⭐⭐⭐⭐ (222)</div>
                                <p className="price">
                                    <span>$24.00</span> $18.00{" "}
                                    <span className="discount">10% OFF</span>
                                </p>
                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 109,
                                                name: "Fresh Red Tomatoes",
                                                price: 18,
                                                img: "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg",
                                                description: "Farm fresh tomatoes"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>
                                    <button className="wish-btn">♡</button>
                                </div>
                            </div>

                        </div>
                    </section>
                    <section className="signup-banner">
                        <div className="banner-content">
                            <h2>Get 25% Discount on your first purchase</h2>
                            <p>Just Sign Up & Register it now to become member.</p>
                            <form className="signup-form">
                                <input type="text" placeholder="Name" required="" />
                                <input type="email" placeholder="Email Address" required="" />
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </section>
                    <section className="product-section">

                        <div className="header">
                            <h2>Most Popular Products</h2>
                            <button onClick={() => navigate("/cart")}>View Cart</button>
                        </div>

                        <div className="product-row">

                            {/* 1 */}
                            <div className="card">
                                <img src="https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=800" alt="Fresh Apples" />
                                <p>Fresh Apples</p>
                                <div className="stars">⭐⭐⭐⭐⭐ (210)</div>

                                <p className="price">
                                    <span>$28.00</span> $20.00
                                </p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 1,
                                                name: "Fresh Apples",
                                                price: 20,
                                                img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=800",
                                                description: "Fresh apples from farm"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>

                                    <button className="wish-btn">♡</button>
                                </div>
                            </div>

                            {/* 2 */}
                            <div className="card">
                                <img src="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=1000" alt="Fresh Bananas" />
                                <p>Fresh Bananas</p>
                                <div className="stars">⭐⭐⭐⭐⭐ (180)</div>

                                <p className="price">
                                    <span>$20.00</span> $15.00
                                </p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 2,
                                                name: "Fresh Bananas",
                                                price: 15,
                                                img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=1000",
                                                description: "Sweet bananas"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>

                                    <button className="wish-btn">♡</button>
                                </div>
                            </div>

                            {/* 3 */}
                            <div className="card">
                                <img src="https://images.unsplash.com/photo-1563114773-84221bd62daa?q=80&w=800" alt="Fresh Watermelon" />
                                <p>Fresh Watermelon</p>
                                <div className="stars">⭐⭐⭐⭐⭐ (240)</div>

                                <p className="price">
                                    <span>$26.00</span> $19.00
                                </p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 3,
                                                name: "Fresh Watermelon",
                                                price: 19,
                                                img: "https://images.unsplash.com/photo-1563114773-84221bd62daa?q=80&w=800",
                                                description: "Juicy watermelon"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>

                                    <button className="wish-btn">♡</button>
                                </div>
                            </div>

                            {/* 4 */}
                            <div className="card">
                                <img src="https://images.unsplash.com/photo-1585059895524-72359e06133a?q=80&w=800" alt="Organic Kiwi" />
                                <p>Organic Kiwi</p>
                                <div className="stars">⭐⭐⭐⭐⭐ (175)</div>

                                <p className="price">
                                    <span>$22.00</span> $16.00
                                </p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 4,
                                                name: "Organic Kiwi",
                                                price: 16,
                                                img: "https://images.unsplash.com/photo-1585059895524-72359e06133a?q=80&w=800",
                                                description: "Healthy kiwi"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>

                                    <button className="wish-btn">♡</button>
                                </div>
                            </div>

                            {/* 5 */}
                            <div className="card">
                                <img src="https://images.unsplash.com/photo-1537640538966-79f369143f8f?q=80&w=800" alt="Fresh Grapes" />
                                <p>Fresh Grapes</p>
                                <div className="stars">⭐⭐⭐⭐⭐ (210)</div>

                                <p className="price">
                                    <span>$20.00</span> $14.00
                                </p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 5,
                                                name: "Fresh Grapes",
                                                price: 14,
                                                img: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?q=80&w=800",
                                                description: "Sweet grapes"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>

                                    <button className="wish-btn">♡</button>
                                </div>
                            </div>
                            {/* 6 */}
                            <div className="card">
                                <img src="https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=800" alt="Organic Almonds" />
                                <p>Organic Almonds</p>
                                <div className="stars">⭐⭐⭐⭐⭐ (260)</div>

                                <p className="price">
                                    <span>$35.00</span> $28.00
                                </p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 6,
                                                name: "Organic Almonds",
                                                price: 28,
                                                img: "https://images.unsplash.com/photo-1508747703725-719777637510?q=80&w=800",
                                                description: "Healthy almonds"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>

                                    <button className="wish-btn">♡</button>
                                </div>
                            </div>

                            {/* 7 */}
                            <div className="card">
                                <img src="https://images.unsplash.com/photo-1604977042946-1eecc30f269e?q=80&w=800" alt="Fresh Cucumbers" />
                                <p>Fresh Cucumbers</p>
                                <div className="stars">⭐⭐⭐⭐⭐ (140)</div>

                                <p className="price">
                                    <span>$18.00</span> $12.00
                                </p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 7,
                                                name: "Fresh Cucumbers",
                                                price: 12,
                                                img: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?q=80&w=800",
                                                description: "Fresh cucumbers"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>

                                    <button className="wish-btn">♡</button>
                                </div>
                            </div>

                            {/* 8 */}
                            <div className="card">
                                <img src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=800" alt="Dragon Fruit" />
                                <p>Fresh Dragon Fruit</p>
                                <div className="stars">⭐⭐⭐⭐⭐ (195)</div>

                                <p className="price">
                                    <span>$32.00</span> $25.00
                                </p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 8,
                                                name: "Fresh Dragon Fruit",
                                                price: 25,
                                                img: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=800",
                                                description: "Exotic dragon fruit"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>

                                    <button className="wish-btn">♡</button>
                                </div>
                            </div>

                            {/* 9 */}
                            <div className="card">
                                <img src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=800" alt="Strawberries" />
                                <p>Fresh Strawberries</p>
                                <div className="stars">⭐⭐⭐⭐⭐ (260)</div>

                                <p className="price">
                                    <span>$30.00</span> $24.00
                                </p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 9,
                                                name: "Fresh Strawberries",
                                                price: 24,
                                                img: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=800",
                                                description: "Sweet strawberries"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>

                                    <button className="wish-btn">♡</button>
                                </div>
                            </div>

                            {/* 10 */}
                            <div className="card">
                                <img src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=800" alt="Avocado" />
                                <p>Fresh Avocado</p>
                                <div className="stars">⭐⭐⭐⭐⭐ (190)</div>

                                <p className="price">
                                    <span>$25.00</span> $18.00
                                </p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 10,
                                                name: "Fresh Avocado",
                                                price: 18,
                                                img: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=800",
                                                description: "Healthy avocado"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>

                                    <button className="wish-btn">♡</button>
                                </div>
                            </div>

                            {/* 11 */}
                            <div className="card">
                                <img src="https://images.unsplash.com/photo-1546094096-0df4bcaaa337?q=80&w=800" alt="Tomatoes" />
                                <p>Fresh Tomatoes</p>
                                <div className="stars">⭐⭐⭐⭐⭐ (155)</div>

                                <p className="price">
                                    <span>$16.00</span> $12.00
                                </p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 11,
                                                name: "Fresh Tomatoes",
                                                price: 12,
                                                img: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?q=80&w=800",
                                                description: "Farm fresh tomatoes"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>

                                    <button className="wish-btn">♡</button>
                                </div>
                            </div>

                            {/* 12 */}
                            <div className="card">
                                <img src="https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=800" alt="Dark Chocolate" />
                                <p>Dark Chocolate</p>
                                <div className="stars">⭐⭐⭐⭐⭐ (300)</div>

                                <p className="price">
                                    <span>$18.00</span> $12.00
                                </p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 12,
                                                name: "Dark Chocolate",
                                                price: 12,
                                                img: "https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=800",
                                                description: "Premium chocolate"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>

                                    <button className="wish-btn">♡</button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="product-section">

                        <div className="header">
                            <h2>Just Arrived</h2>
                            <button>View All</button>
                        </div>

                        <div className="product-row">

                            {/* 1 */}
                            <div className="card">
                                <img src="https://images.unsplash.com/photo-1519096845289-95806ee03a1a?q=80&w=800" alt="Fresh Mangoes" />
                                <p>Fresh Mangoes</p>
                                <div className="stars">⭐⭐⭐⭐⭐ (175)</div>
                                <p className="price"><span>$24.00</span> $18.00</p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 201,
                                                name: "Fresh Mangoes",
                                                price: 18,
                                                img: "https://images.unsplash.com/photo-1519096845289-95806ee03a1a?q=80&w=800",
                                                description: "Sweet mangoes"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>
                                </div>
                            </div>

                            {/* 2 */}
                            <div className="card">
                                <img src="https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?q=80&w=800" alt="Organic Papaya" />
                                <p>Organic Papaya</p>
                                <div className="stars">⭐⭐⭐⭐⭐ (185)</div>
                                <p className="price"><span>$24.00</span> $18.00</p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 202,
                                                name: "Organic Papaya",
                                                price: 18,
                                                img: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?q=80&w=800",
                                                description: "Fresh papaya"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>
                                </div>
                            </div>

                            {/* 3 */}
                            <div className="card">
                                <img src="https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=800" alt="Fresh Blueberries" />
                                <p>Fresh Blueberries</p>
                                <div className="stars">⭐⭐⭐⭐⭐ (220)</div>
                                <p className="price"><span>$30.00</span> $23.00</p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 203,
                                                name: "Fresh Blueberries",
                                                price: 23,
                                                img: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=800",
                                                description: "Fresh blueberries"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>
                                </div>
                            </div>

                            {/* 4 */}
                            <div className="card">
                                <img src="https://copilot.microsoft.com/th/id/BCO.d3f9793b-d2a2-4427-8f77-659972b829e2.png" alt="Organic Green Peas" />
                                <p>Organic Green Peas</p>
                                <div className="stars">⭐⭐⭐⭐⭐ (140)</div>
                                <p className="price"><span>$18.00</span> $13.00</p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 204,
                                                name: "Organic Green Peas",
                                                price: 13,
                                                img: "https://copilot.microsoft.com/th/id/BCO.d3f9793b-d2a2-4427-8f77-659972b829e2.png",
                                                description: "Fresh green peas"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>
                                </div>
                            </div>

                            {/* 5 */}
                            <div className="card">
                                <img src="https://copilot.microsoft.com/th/id/BCO.17504e7a-5cbd-476d-a1f3-ee9a884a0bd9.png" alt="Fresh Coconut" />
                                <p>Fresh Coconut</p>
                                <div className="stars">⭐⭐⭐⭐⭐ (205)</div>
                                <p className="price"><span>$26.00</span> $19.00</p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 205,
                                                name: "Fresh Coconut",
                                                price: 19,
                                                img: "https://copilot.microsoft.com/th/id/BCO.17504e7a-5cbd-476d-a1f3-ee9a884a0bd9.png",
                                                description: "Fresh coconut"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>
                                </div>
                            </div>

                            {/* 6 */}
                            <div className="card">
                                <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800" alt="Organic Mushrooms" />
                                <p>Organic Mushrooms</p>
                                <div className="stars">⭐⭐⭐⭐⭐ (160)</div>
                                <p className="price"><span>$21.00</span> $15.00</p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 206,
                                                name: "Organic Mushrooms",
                                                price: 15,
                                                img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800",
                                                description: "Fresh mushrooms"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>
                                </div>
                            </div>
                            {/* 7 */}
                            <div className="card">
                                <img src="https://ts3.mm.bing.net/th?id=OIP.1K1uBZvuodj8z0D_fhGGEQHaHa&pid=15.1&o=7&rm=3" alt="Fresh Carrots" />
                                <p>Fresh Carrots</p>
                                <div className="stars">⭐⭐⭐⭐⭐ (110)</div>
                                <p className="price"><span>$15.00</span> $10.00</p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 207,
                                                name: "Fresh Carrots",
                                                price: 10,
                                                img: "https://ts3.mm.bing.net/th?id=OIP.1K1uBZvuodj8z0D_fhGGEQHaHa&pid=15.1&o=7&rm=3",
                                                description: "Fresh carrots"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>
                                </div>
                            </div>

                            {/* 8 */}
                            <div className="card">
                                <img src="https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?q=80&w=800" alt="Fresh Broccoli" />
                                <p>Fresh Broccoli</p>
                                <div className="stars">⭐⭐⭐⭐⭐ (125)</div>
                                <p className="price"><span>$19.00</span> $14.00</p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 208,
                                                name: "Fresh Broccoli",
                                                price: 14,
                                                img: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?q=80&w=800",
                                                description: "Healthy broccoli"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>
                                </div>
                            </div>

                            {/* 9 */}
                            <div className="card">
                                <img src="https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=800" alt="Fresh Orange Juice" />
                                <p>Fresh Orange Juice</p>
                                <div className="stars">⭐⭐⭐⭐⭐ (220)</div>
                                <p className="price"><span>$20.00</span> $15.00</p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 209,
                                                name: "Fresh Orange Juice",
                                                price: 15,
                                                img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=800",
                                                description: "Fresh juice"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>
                                </div>
                            </div>

                            <div className="card">
                                <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800" alt="Fresh Bread" />
                                <p>Fresh Bread</p>
                                <div className="stars">⭐⭐⭐⭐⭐ (200)</div>
                                <p className="price"><span>$14.00</span> $9.00</p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 210,
                                                name: "Fresh Bread",
                                                price: 9,
                                                img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800",
                                                description: "Fresh bakery bread"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>
                                </div>
                            </div>

                            {/* 11 */}
                            <div className="card">
                                <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800" alt="Fresh Salad" />
                                <p>Fresh Salad</p>
                                <div className="stars">⭐⭐⭐⭐⭐ (230)</div>
                                <p className="price"><span>$18.00</span> $13.00</p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 211,
                                                name: "Fresh Salad",
                                                price: 13,
                                                img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800",
                                                description: "Healthy salad"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>
                                </div>
                            </div>

                            {/* 12 */}
                            <div className="card">
                                <img src="https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?q=80&w=800" alt="Fresh Pineapple" />
                                <p>Fresh Pineapple</p>
                                <div className="stars">⭐⭐⭐⭐⭐ (140)</div>
                                <p className="price"><span>$22.00</span> $16.00</p>

                                <div className="actions">
                                    <button
                                        className="cart-btn"
                                        onClick={() =>
                                            handleAdd({
                                                id: 212,
                                                name: "Fresh Pineapple",
                                                price: 16,
                                                img: "https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?q=80&w=800",
                                                description: "Fresh pineapple"
                                            })
                                        }
                                    >
                                        🛒 Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="blog-section">
                        <div className="blog-header">
                            <h2>Our Recent Blog</h2>
                            <a href="#" className="view-all">
                                View All
                            </a>
                        </div>
                        <div className="blog-container">
                            <div className="blog-card">
                                <img
                                    src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg"
                                    alt="Casual look ideas"
                                />
                                <div className="blog-info">
                                    <span className="date">22 Aug 2021</span>
                                    <span className="category">Tips &amp; Tricks</span>
                                    <h3>Top 10 casual look ideas to dress up your kids</h3>
                                    <p>
                                        Discover fun and stylish ways to dress your kids effortlessly.
                                    </p>
                                </div>
                            </div>
                            <div className="blog-card">
                                <img
                                    src="https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg"
                                    alt="Street wear trends"
                                />
                                <div className="blog-info">
                                    <span className="date">25 Aug 2021</span>
                                    <span className="category">Trending</span>
                                    <h3>Latest trends of wearing street wears supremely</h3>
                                    <p>
                                        Explore the hottest streetwear styles dominating fashion today.
                                    </p>
                                </div>
                            </div>
                            <div className="blog-card">
                                <img
                                    src="https://images.pexels.com/photos/1437586/pexels-photo-1437586.jpeg"
                                    alt="Comfortable clothes for women"
                                />
                                <div className="blog-info">
                                    <span className="date">28 Aug 2021</span>
                                    <span className="category">Inspiration</span>
                                    <h3>10 Different Types of comfortable clothes ideas for women</h3>
                                    <p>Get inspired by versatile and cozy outfit ideas for women.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="organic-banner">
                        <div className="banner-content">
                            <h2>Download Organic App</h2>
                            <p>Online Orders made easy, fast and reliable</p>
                            <div className="store-buttons">
                                <a href="#" className="app-store">
                                    <img
                                        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                        alt="Download on App Store"
                                    />
                                </a>
                                <a href="#" className="google-play">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                        alt="Get it on Google Play"
                                    />
                                </a>
                            </div>
                        </div>
                    </section>
                    <section className="search-tags">
                        <h2>People are also looking for</h2>
                        <div className="tags">
                            <span>Blue Diamond Almonds</span>
                            <span>Angie’s Boomchickapop Corn</span>
                            <span>Salty Kettle Corn</span>
                            <span>Chobani Greek Yogurt</span>
                            <span>Sweet Vanilla Yogurt</span>
                            <span>Foster Farms Takeout Crispy Wings</span>
                            <span>Warrior Blend Organic</span>
                            <span>Chicken Meatballs</span>
                            <span>Nature Valley Granola Bars</span>
                            <span>Quaker Oats</span>
                            <span>Organic Peanut Butter</span>
                            <span>Kind Protein Bars</span>
                            <span>Silk Almond Milk</span>
                            <span>Green Giant Veggie Tots</span>
                            <span>Beyond Meat Burger Patties</span>
                        </div>
                        <section className="features2">
                            <div className="feature-card">
                                <div className="icon">
                                    <i className="fas fa-truck" />
                                </div>
                                <h4>Free delivery</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                            </div>
                            <div className="feature-card">
                                <div className="icon">
                                    <i className="fas fa-lock" />
                                </div>
                                <h4>100% secure payment</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                            </div>
                            <div className="feature-card">
                                <div className="icon">
                                    <i className="fas fa-shield-alt" />
                                </div>
                                <h4>Quality guarantee</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                            </div>
                            <div className="feature-card">
                                <div className="icon">
                                    <i className="fas fa-check" />
                                </div>
                                <h4>Guaranteed savings</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                            </div>
                            <div className="feature-card">
                                <div className="icon">
                                    <i className="fas fa-gift" />
                                </div>
                                <h4>Daily offers</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        </>

    )
}

export default Home
