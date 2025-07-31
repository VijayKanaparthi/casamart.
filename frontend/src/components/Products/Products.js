import React, { Component } from "react"
import "./Products.css"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"

class Products extends Component {
  render() {
    return (
      <div className="products">
        <Navbar />
        <Sidebar />
        <div className="products-main-content">
          <h1 style={{ marginBottom: "10px" }}>🛍️ Products</h1>
          <p style={{ marginLeft: "10px" }}>
            Explore our diverse range of products!
          </p>
        </div>
        <div className="products-main-content">
          <div className="sample-page-container">
            <div className="sample-badge">🎨 SAMPLE PAGE!</div>
            <div className="sample-emoji">🚧 🎭 🚧</div>
            <h1 className="sample-title">This page is just for</h1>
            <div className="sample-demo-badge">DEMONSTRATION</div>
            <div className="sample-sparkles">✨ 🎪 ✨</div>
          </div>
        </div>
      </div>
    )
  }
}
export default Products
