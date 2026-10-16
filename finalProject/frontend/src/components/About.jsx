import React from 'react'

const About = () => {
  return (
   <>
  <section className="about-hero">
    <div className="about-overlay" />
    <div className="about-content">
      <h1>About Organic</h1>
      <p>
        Freshness, purity, and healthy living — directly from farms to your
        home. We are committed to providing the best organic products with love
        and care.
      </p>
      <button onclick="scrollToAbout()">Explore More</button>
    </div>
  </section>
  <section className="about-section">
    <div className="about-container">
      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1000&auto=format&fit=crop"
          alt=""
        />
      </div>
      <div className="about-text">
        <h2>Who We Are</h2>
        <p>
          Organic is a trusted online organic grocery and healthy lifestyle
          brand. We started with a simple dream — to make healthy and
          chemical-free food accessible to every family.
        </p>
        <p>
          Our products are carefully selected from certified organic farms. We
          work directly with farmers to ensure quality, freshness, and fair
          pricing.
        </p>
        <p>
          From fruits and vegetables to dairy products, grains, juices, and
          healthy snacks — we deliver everything fresh to your doorstep.
        </p>
      </div>
    </div>
  </section>
  <section className="features-section">
    <h2>Why Choose Us</h2>
    <div className="features-container">
      <div className="feature-card">
        <i className="fa-solid fa-leaf" />
        <h3>100% Organic</h3>
        <p>
          All our products are naturally grown without harmful chemicals or
          pesticides.
        </p>
      </div>
      <div className="feature-card">
        <i className="fa-solid fa-truck-fast" />
        <h3>Fast Delivery</h3>
        <p>
          We ensure quick and safe delivery so your products stay fresh and
          healthy.
        </p>
      </div>
      <div className="feature-card">
        <i className="fa-solid fa-heart" />
        <h3>Healthy Living</h3>
        <p>
          We help families choose better food and healthier lifestyles every
          day.
        </p>
      </div>
      <div className="feature-card">
        <i className="fa-solid fa-earth-americas" />
        <h3>Eco Friendly</h3>
        <p>
          Sustainable packaging and eco-conscious farming practices protect our
          planet.
        </p>
      </div>
    </div>
  </section>
  <section className="story-section">
    <div className="story-text">
      <h2>Our Journey</h2>
      <p>
        Organic started as a small local initiative focused on helping nearby
        farmers sell fresh organic produce directly to customers.
      </p>
      <p>
        Over the years, we have grown into a trusted organic marketplace serving
        thousands of happy customers.
      </p>
      <p>
        Our team believes that food should nourish the body naturally. That's
        why every product is checked carefully before delivery.
      </p>
      <p>
        Today, Organic continues to support local farming communities while
        promoting sustainable agriculture and healthy lifestyles.
      </p>
    </div>
    <div className="story-image">
      <img
        src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1000&auto=format&fit=crop"
        alt=""
      />
    </div>
  </section>
  <section className="team-section">
    <h2>Meet Our Team</h2>
    <div className="team-container">
      <div className="team-card">
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop"
          alt=""
        />
        <h3>Rahul Sharma</h3>
        <p>Founder &amp; CEO</p>
      </div>
      <div className="team-card">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
          alt=""
        />
        <h3>Priya Verma</h3>
        <p>Marketing Head</p>
      </div>
      <div className="team-card">
        <img
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop"
          alt=""
        />
        <h3>Aman Singh</h3>
        <p>Operations Manager</p>
      </div>
    </div>
  </section>
  <section className="stats-section">
    <div className="stat-box">
      <h1>10K+</h1>
      <p>Happy Customers</p>
    </div>
    <div className="stat-box">
      <h1>500+</h1>
      <p>Organic Products</p>
    </div>
    <div className="stat-box">
      <h1>100+</h1>
      <p>Partner Farms</p>
    </div>
    <div className="stat-box">
      <h1>24/7</h1>
      <p>Customer Support</p>
    </div>
  </section>
  <section className="testimonial-section">
    <h2>What Our Customers Say</h2>
    <div className="testimonial-container">
      <div className="testimonial-card">
        <p>
          “Amazing quality products and very fast delivery. My family loves the
          fresh vegetables and fruits.”
        </p>
        <h4>- Neha Kapoor</h4>
      </div>
      <div className="testimonial-card">
        <p>
          “Organic has completely changed the way we shop for groceries. Highly
          recommended for healthy living.”
        </p>
        <h4>- Arjun Mehta</h4>
      </div>
      <div className="testimonial-card">
        <p>
          “Best organic store online. Great packaging and excellent service.”
        </p>
        <h4>- Simran Kaur</h4>
      </div>
    </div>
  </section>
  <section className="newsletter-section">
    <h2>Subscribe To Our Newsletter</h2>
    <p>
      Get updates about healthy recipes, organic products, and exclusive offers.
    </p>
    <div className="newsletter-box">
      <input type="email" placeholder="Enter your email" />
      <button>Subscribe</button>
    </div>
  </section>
</>

  )
}

export default About
