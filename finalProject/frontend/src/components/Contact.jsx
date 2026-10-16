import React from 'react'

const Contact = () => {
  return (
    <>
  <section className="contact-hero">
    <div className="hero-content">
      <h1>Get In Touch</h1>
      <p>
        We’d love to hear from you. Whether you have questions about our organic
        products, delivery services, partnerships, or healthy lifestyle tips — 
        our team is always ready to help.
      </p>
      <a href="#contact-section">
        <button>Contact Now</button>
      </a>
    </div>
  </section>
  <section className="contact-main" id="contact-section">
    <div className="contact-left">
      <h1 className="small-title">CONTACT INFORMATION</h1>
      <h2>We Are Always Ready To Help You</h2>
      <p>
        Organic Store is dedicated to providing fresh, healthy, and naturally
        grown products directly from trusted farms.
      </p>
      <div className="contact-box">
        <i className="fa-solid fa-location-dot" />
        <div>
          <h3>Our Address</h3>
          <p>24 Green Valley Road, Organic City, India</p>
        </div>
      </div>
      <div className="contact-box">
        <i className="fa-solid fa-phone" />
        <div>
          <h3>Phone Number</h3>
          <p>+91 98765 43210</p>
          <p>+91 98765 11111</p>
        </div>
      </div>
      <div className="contact-box">
        <i className="fa-solid fa-envelope" />
        <div>
          <h3>Email Address</h3>
          <p>support@organic.com</p>
          <p>help@organic.com</p>
        </div>
      </div>
      <div className="contact-box">
        <i className="fa-solid fa-clock" />
        <div>
          <h3>Working Hours</h3>
          <p>Mon - Sat : 9:00 AM - 8:00 PM</p>
          <p>Sunday : 10:00 AM - 4:00 PM</p>
        </div>
      </div>
    </div>
    <div className="contact-right">
      <h2>Send Us A Message</h2>
      <form className="contact-form">
        <div className="input-row">
          <input type="text" placeholder="Your Name" required="" />
          <input type="email" placeholder="Your Email" required="" />
        </div>
        <div className="input-row">
          <input type="text" placeholder="Phone Number" />
          <input type="text" placeholder="Subject" />
        </div>
        <textarea
          placeholder="Write Your Message..."
          rows={8}
          defaultValue={""}
        />
        <button type="submit">Send Message</button>
      </form>
      <div className="form-extra">
        <h3>Why Contact Us?</h3>
        <ul>
          <li>🌱 Get personalized organic product advice</li>
          <li>🚚 Track your delivery status instantly</li>
          <li>💬 24/7 customer support available</li>
          <li>🤝 Partnership &amp; bulk order queries</li>
        </ul>
      </div>
    </div>
  </section>
  <section className="testimonial">
    <h3>What Our Customers Say</h3>
    <p>“Freshest organic veggies I’ve ever ordered!” – Priya</p>
    <p>“Fast delivery and great quality.” – Aman</p>
  </section>
  <section className="contact-features">
    <div className="feature-card">
      <i className="fa-solid fa-truck-fast" />
      <h3>Fast Delivery</h3>
      <p>
        We ensure your organic groceries reach your doorstep quickly and safely.
      </p>
    </div>
    <div className="feature-card">
      <i className="fa-solid fa-leaf" />
      <h3>100% Organic</h3>
      <p>
        Fresh and naturally grown products directly sourced from trusted farms.
      </p>
    </div>
    <div className="feature-card">
      <i className="fa-solid fa-headset" />
      <h3>24/7 Support</h3>
      <p>
        Our support team is available anytime to assist you with your questions.
      </p>
    </div>
  </section>
  <section className="faq-section">
    <h2>Frequently Asked Questions</h2>
    <div className="faq-container">
      <div className="faq-box">
        <h3>How long does delivery take?</h3>
        <p>
          Most orders are delivered within 24 hours depending on your location.
        </p>
      </div>
      <div className="faq-box">
        <h3>Are all products chemical-free?</h3>
        <p>
          Yes, all our products are carefully sourced from certified organic
          farms.
        </p>
      </div>
      <div className="faq-box">
        <h3>Can I track my order?</h3>
        <p>
          Yes, once your order is shipped you will receive tracking details.
        </p>
      </div>
      <div className="faq-box">
        <h3>Do you offer bulk orders?</h3>
        <p>
          Yes, we provide special pricing and support for bulk and business
          orders.
        </p>
      </div>
      <div className="faq-box">
        <h3>What payment methods do you accept?</h3>
        <p>We accept UPI, Debit/Credit Cards, Net Banking, and Wallets.</p>
      </div>
      <div className="faq-box">
        <h3>Is there a return policy?</h3>
        <p>
          Yes, you can return products within 7 days if they are unused and
          sealed.
        </p>
      </div>
    </div>
  </section>
  <section className="newsletter">
    <h2>Subscribe For Healthy Updates</h2>
    <p>
      Get organic lifestyle tips, healthy recipes, and special offers directly
      in your inbox.
    </p>
    <div className="newsletter-box">
      <input type="email" placeholder="Enter Your Email" />
      <button>Subscribe</button>
    </div>
  </section>
</>

  )
}

export default Contact
