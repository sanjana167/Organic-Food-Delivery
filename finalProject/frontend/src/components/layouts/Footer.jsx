import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-box">
                        <h2 className="logo">Social</h2>
                       <div className="social-icon">
  <a href="#"><i className="fab fa-facebook-f"></i> Facebook</a>

  <a href="#"><i className="fab fa-twitter"></i> Twitter</a>

  <a href="#"><i className="fab fa-youtube"></i> YouTube</a>

  <a href="#"><i className="fab fa-instagram"></i> Instagram</a>
</div>
</div>
                    <div className="footer-box">
                        <h3>Organic</h3>
                        <p>About us</p>
                        <p>Conditions</p>
                        <p>Our Journals</p>
                        <p>Careers</p>
                        <p>Affiliate Programme</p>
                        <p>Ultras Programme</p>
                    </div>
                    <div className="footer-box">
                        <h3>Quick Links</h3>
                        <p>Offers</p>
                        <p>Stores</p>
                        <p>Track Order</p>
                        <p>Shop</p>
                        <p>Info</p>
                    </div>
                    <div className="footer-box">
                        <h3>Customer Service</h3>
                        <p>FAQ</p>
                        <p>Contact</p>
                        <p>Privacy Policy</p>
                        <p>Returns &amp; Refunds</p>
                        <p>Cookie Guidelines</p>
                        <p>Delivery Information</p>
                    </div>
                    <div className="footer-box">
                        <h3>Subscribe Us</h3>
                        <p>Subscribe to our newsletter to get updates about our grand offers.</p>
                        <div className="subscribe">
                            <input type="email" placeholder="Email Address" />
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
                <p className="copy">
                    © 2026 Organic. All rights reserved{" "}
                    <span>| Sustainably sourced, ethically made</span>
                </p>
            </footer>

        </>
    )
}

export default Footer
