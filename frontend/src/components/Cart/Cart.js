import React, { Component } from "react"
import "./Cart.css"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import ReactContext from "../../Context/ReactContext"
import { Link } from "react-router-dom"

class Cart extends Component {
  render() {
    return (
      <ReactContext.Consumer>
        {(value) => {
          const { cartList, removeItem, clearCart } = value

          const remove = (item) => {
            removeItem(item)
          }

          const clear = () => {
            clearCart()
          }

          if (cartList.length > 0) {
            return (
              <div className="cart-main-content">
                <Navbar />
                <Sidebar />
                <div style={{ flex: 2 }} className="cart-mobile">
                  <h1 style={{ marginBottom: "10px" }}>🛒 Your Cart</h1>
                  <p style={{ marginLeft: "10px", marginBottom: "10px" }}>
                    Review your selected items before checkout!
                  </p>
                  {cartList.map((item, index) => (
                    <div key={index} className="cart-item">
                      <img src={item.image} alt={item.name} />
                      <div className="cart-item-details">
                        <h2>{item.name}</h2>
                        <p className="rating-stars">
                          {"⭐".repeat(Math.floor(item.rating)) +
                            "☆".repeat(5 - Math.floor(item.rating))}
                          <span style={{ color: "black" }}>
                            {Math.ceil(Math.random() * 10)}k
                          </span>
                        </p>
                        <p>Price: ₹{item.price}</p>
                        <button
                          className="cart-remove-btn"
                          onClick={() => {
                            alert("Item removed from cart")
                            remove(item)
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                  <Link to="/home" style={{ textDecoration: "none" }}>
                    <button className="cart-add-items-btn">
                      Add More Items
                    </button>
                  </Link>
                </div>

                <div className="cart-summary">
                  <h3>🧾 Order Summary</h3>
                  <p>Total Items: {cartList.length}</p>
                  <p>
                    Total Price: ₹
                    {cartList
                      .reduce((acc, curr) => acc + parseFloat(curr.price), 0)
                      .toFixed(2)}
                  </p>
                  <button onClick={() => alert("Proceeding to checkout...")}>
                    Checkout
                  </button>
                  <button
                    style={{ backgroundColor: "#ccc", color: "#000" }}
                    onClick={clear}
                  >
                    Clear Cart
                  </button>
                  <div className="payment-methods">
                    <p>We accept:</p>
                    <div className="payment-icons">
                      <img
                        src="https://img.icons8.com/?size=100&id=w0MU3YDSYG7T&format=png&color=000000"
                        alt="GPay"
                      />
                      <img
                        src="https://img.icons8.com/?size=100&id=68067&format=png&color=000000"
                        alt="Paytm"
                      />

                      <img
                        src="https://img.icons8.com/?size=100&id=5JTcb83oDGrE&format=png&color=000000"
                        alt="RuPay"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          return (
            <div className="cart2">
              <Navbar />
              <Sidebar />
              <div className="cart-main-content2">
                <h1 style={{ marginBottom: "10px" }}>🛒 Your Cart</h1>
                <p style={{ marginLeft: "10px", marginBottom: "10px" }}>
                  Review your selected items before checkout!
                </p>

                <p style={{ marginLeft: "10px" }}>
                  Your cart is currently empty. Add items from the products
                  page.
                </p>
                <Link to="/home" style={{ textDecoration: "none" }}>
                  <button className="cart-add-items-btn2">Add Items</button>
                </Link>
              </div>
            </div>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}
export default Cart
