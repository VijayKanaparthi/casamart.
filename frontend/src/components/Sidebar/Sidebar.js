import React, { Component } from "react"
import "./Sidebar.css"
import ReactContext from "../../Context/ReactContext"
import { Link, withRouter } from "react-router-dom"

class Sidebar extends Component {
  render() {
    const { location } = this.props
    const path = location.pathname
    const lastSegment = path.split("/").filter(Boolean).pop() // "products"

    return (
      <ReactContext.Consumer>
        {(value) => {
          const { isSidebarOpen, logout } = value

          const logoutClicked = () => {
            logout()
          }

          return (
            <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
              <h1 className="sidebar-title">🌟Explore</h1>
              <ul className="sidebar-links">
                <Link
                  className={lastSegment === "home" ? "blue" : ""}
                  to="/home"
                  style={{ textDecoration: "none" }}
                >
                  <li>✨ Home</li>
                </Link>
                <Link
                  className={lastSegment === "newin" ? "blue" : ""}
                  to="/newin"
                  style={{ textDecoration: "none" }}
                >
                  <li>🆕 New In</li>
                </Link>
                <Link
                  to="/clothing"
                  className={lastSegment === "clothing" ? "blue" : ""}
                  style={{ textDecoration: "none" }}
                >
                  <li>👕 Clothing</li>
                </Link>

                <Link
                  to="/products"
                  className={lastSegment === "products" ? "blue" : ""}
                  style={{ textDecoration: "none" }}
                >
                  <li>📦 Products</li>
                </Link>

                <li
                  onClick={() =>
                    alert("This tab represents a sample layout for reference")
                  }
                >
                  👟 Shoes
                </li>
                <li
                  onClick={() =>
                    alert("This tab represents a sample layout for reference")
                  }
                >
                  🎁 Gifts & Living
                </li>
                <li
                  onClick={() =>
                    alert("This tab represents a sample layout for reference")
                  }
                >
                  ❓ Help Center
                </li>
              </ul>
              <div>
                <button
                  className="sidebar-mobile-button"
                  onClick={logoutClicked}
                >
                  Logout
                </button>
              </div>
            </aside>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default withRouter(Sidebar)
