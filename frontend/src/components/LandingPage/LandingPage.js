import React, { Component } from "react"
import "./LandingPage.css"
import { Link } from "react-router-dom"

class LandingPage extends Component {
  render() {
    return (
      <div>
        {/* Navbar  */}
        <nav className="landing-page-navbar">
          <div className="logo-container">
            <h1>
              Casamart<span style={{ color: "red", fontSize: "35px" }}>.</span>
            </h1>
          </div>

          <input type="checkbox" id="menu-toggle" className="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">
            &#9776;
          </label>

          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#categories">Categories</a>
            </li>
            <li>
              <a href="#offers">Combo Offers</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>

          <div className="auth-buttons">
            <Link to="/signup" className={{ color: "white" }}>
              <button className="signup-btn">Sign Up</button>
            </Link>
            <Link to="/login" className={{ color: "white" }}>
              <button className="login-btn">Login</button>
            </Link>
          </div>
        </nav>
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-text">
            <h1>Your One-Stop Shop for Home Essentials</h1>
            <p>
              Explore top-quality kitchen, cleaning, and utility products
              specially curated for Indian homes.
            </p>
            <button className="hero-btn">Start Shopping</button>
          </div>
          <div className="hero-image">
            <img
              src="https://res.cloudinary.com/dhalfd5xj/image/upload/v1753104397/Hero_jcfj73.png"
              alt="Hero"
            />
          </div>
        </div>
        {/* Popular Categories */}
        <div className="popular-container">
          <h2 className="section-heading">Popular Categories</h2>
          <div className="cards-wrapper">
            <div className="category-card">
              <img
                src="https://media.istockphoto.com/id/1217234710/photo/render-image-of-a-modern-kitchen-interior.jpg?b=1&s=612x612&w=0&k=20&c=av4NXSJNPv59nPdGIcuWTqFcCCcSrcr1YbIMi5uo8Ek="
                alt="Kitchen Essentials"
              />
              <h3>Kitchen Essentials</h3>
              <p>
                Upgrade your cooking experience with our stylish and functional
                kitchen products perfect for modern homes.
              </p>
            </div>

            <div className="category-card">
              <img
                src="https://media.istockphoto.com/id/1155881063/photo/taking-the-needed-tool-to-begin-repairs.jpg?b=1&s=612x612&w=0&k=20&c=5pRbuhNkjHz30ermra2ZKz45TmGanfdACqP01sHrgIM="
                alt="Cleaning Tools"
              />
              <h3>Cleaning Tools</h3>
              <p>
                Discover advanced cleaning tools that help you keep your home
                spotless effortlessly and efficiently.
              </p>
            </div>

            <div className="category-card">
              <img
                src="https://images.pexels.com/photos/682933/pexels-photo-682933.jpeg"
                alt="Electronics"
              />
              <h3>Electronics</h3>
              <p>
                Explore high-quality electronics for your home and entertainment
                needs, curated for performance and value.
              </p>
            </div>

            <div className="category-card">
              <img
                src="https://media.istockphoto.com/id/1036286830/photo/directly-above-shot-of-text-on-blue-wood.jpg?b=1&s=612x612&w=0&k=20&c=fdZeLLFIPz6yVRjnLFnnMiAhKXobG0vX4eHnUoh8j-8="
                alt="Combo Offers"
              />
              <h3>Combo Offers</h3>
              <p>
                Save big with our exciting combo deals – perfect bundles for
                your new home with added discounts!
              </p>
            </div>
          </div>
        </div>
        {/* Customer Feedback */}
        <section className="customer-feedback">
          <h2>What Our Customers Say</h2>
          <div className="feedback-container">
            <div
              className="feedback-card"
              style={{
                backgroundImage:
                  "url('https://plus.unsplash.com/premium_photo-1700824489477-2cf2ec67de38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8')",
              }}
            >
              <div className="feedback-content">
                <h3>Priya S.</h3>
                <p>
                  "CasaMart made moving so much easier! Loved the combo deals
                  for my kitchen and living room."
                </p>
              </div>
            </div>

            <div
              className="feedback-card"
              style={{
                backgroundImage:
                  "url('https://plus.unsplash.com/premium_photo-1700824489703-df414fe1010f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D')",
              }}
            >
              <div className="feedback-content">
                <h3>Arjun R.</h3>
                <p>
                  "The products are affordable and top quality. Customer support
                  is very helpful and fast."
                </p>
              </div>
            </div>

            <div
              className="feedback-card"
              style={{
                backgroundImage:
                  "url('https://plus.unsplash.com/premium_photo-1683133258128-8f2125652c82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D')",
              }}
            >
              <div className="feedback-content">
                <h3>Sneha M.</h3>
                <p>
                  "Highly recommend CasaMart! Especially the cleaning tools and
                  offers section. Totally worth it!"
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="footer">
          <div className="footer-container">
            {/* Logo and Address */}
            <div className="footer-left">
              <img
                src="https://res.cloudinary.com/dhalfd5xj/image/upload/v1753103485/logo_qfvold.png"
                alt="CasaMart Logo"
                className="footer-logo"
              />
              <p className="footer-address">
                CasaMart Pvt. Ltd. <br />
                No. 45, T. Nagar, <br />
                Chennai, Tamil Nadu - 600017
              </p>
            </div>

            {/* Links */}
            <div className="footer-center">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#categories">Categories</a>
                </li>
                <li>
                  <a href="#combo">Combo Offers</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="footer-right">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                    alt="Facebook"
                  />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                    alt="Twitter"
                  />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                    alt="Instagram"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2025 CasaMart. All rights reserved.</p>
          </div>
        </footer>
      </div>
    )
  }
}

export default LandingPage
