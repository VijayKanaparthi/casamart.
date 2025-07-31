import React, { Component } from "react"
import "./Navbar.css"
import ReactContext from "../../Context/ReactContext"
import { Link } from "react-router-dom"

class Navbar extends Component {
  render() {
    return (
      <ReactContext.Consumer>
        {(value) => {
          const { toggleSidebar, logout, cartList } = value
          const toggleSidebarOpen = () => {
            toggleSidebar()
          }

          const logoutClicked = () => {
            logout()
          }

          return (
            <header className="home-navbar">
              <div className="home-navbar-left">
                <Link
                  to="/home"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <h1>
                    Casamart
                    <span style={{ color: "red", fontSize: "35px" }}>.</span>
                  </h1>
                </Link>
              </div>
              <div className="home-navbar-right">
                <Link
                  to="/cart"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <span className="icon">
                    🛒
                    <span className={cartList.length > 0 ? "cart-count" : ""}>
                      {cartList.length > 0 ? cartList.length : ""}
                    </span>
                  </span>
                </Link>
                <button className="logout-btn" onClick={logoutClicked}>
                  Logout
                </button>
                <button className="hamburger" onClick={toggleSidebarOpen}>
                  ☰
                </button>
              </div>
            </header>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}
export default Navbar
