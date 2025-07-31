import React, { Component } from "react"
import "./ProductDetails.css"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"

import CommentsSection from "../CommentsSection/CommentsSection"
import { withRouter } from "react-router-dom"
import ReactContext from "../../Context/ReactContext"

class ProductDetails extends Component {
  state = { product: [], errorMsg: "", error: false }

  componentDidMount() {
    this.fetchProductDetails()
  }

  fetchProductDetails = async () => {
    const { pathName } = this.props.location.state || {}
    const { id } = this.props.match.params

    const response = await fetch(
      `https://casamart-new-backend.onrender.com/${pathName}/${id}`
    )

    if (response.ok === true) {
      const data = await response.json()

      const gotProduct = {
        id: data.data._id,
        name: data.data.name,
        price: data.data.price,
        discountPrice: data.data.discount_price,
        rating: data.data.rating,
        image: data.data.image,
        description: data.data.description,
        deliveryTime: data.data.delivery_time,
        category: data.data.category,
        availability: data.data.availability,
      }
      this.setState({ product: gotProduct, error: false })
    } else {
      this.setState({ errorMsg: "404: Item Not Found", error: true })
    }
  }

  render() {
    const { errorMsg, error } = this.state
    return (
      <ReactContext.Consumer>
        {(value) => {
          const { setCartList } = value
          const { product } = this.state

          const add = () => {
            setCartList(product)
          }

          return (
            <div className="product">
              <Navbar />
              <Sidebar />
              <div className="product-main-content">
                <button
                  className="back-button"
                  onClick={() => this.props.history.goBack()}
                >
                  ←
                </button>
                <h1 style={{ marginBottom: "10px" }}>
                  🆕 New In Product Details
                </h1>
                <p style={{ marginLeft: "10px" }}>
                  Check out the latest arrivals in our collection!
                </p>
              </div>
              {error === true ? (
                <div className="error-message-product">
                  <h2>{errorMsg}</h2>
                </div>
              ) : (
                <>
                  <div className="product-details-container">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />

                    <div className="product-info">
                      <h2>{product.name}</h2>
                      <p className="rating">
                        {"⭐".repeat(Math.floor(product.rating)) +
                          "⭐"
                            .repeat(5 - Math.floor(product.rating))
                            .replace(/⭐/g, "☆")}
                        (9k)
                      </p>
                      <p>
                        <strong>Price:</strong>{" "}
                        <span style={{ textDecoration: "line-through" }}>
                          ₹{product.price}
                        </span>
                      </p>
                      <p>
                        <strong>Discount Price:</strong> ₹
                        {product.discountPrice}
                      </p>
                      <p>
                        <strong>
                          Availability:
                          {product.availability ? (
                            <span style={{ color: "green", marginLeft: "5px" }}>
                              In Stock
                            </span>
                          ) : (
                            <span style={{ color: "red", marginLeft: "5px" }}>
                              Out of Stock
                            </span>
                          )}
                        </strong>
                      </p>
                      <p>
                        <strong>Delivery Time: </strong> {product.deliveryTime}{" "}
                        days
                      </p>
                      <p className="description">
                        {product.description} This is a beautiful and trending
                        product. Crafted with quality and comfort in mind. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      {product.availability !== true ? (
                        <button className="buy-now-button-disabled" disabled>
                          Buy Now
                        </button>
                      ) : (
                        <button className="buy-now-button" onClick={add}>
                          Buy Now
                        </button>
                      )}
                      <button className="add-to-button-details" onClick={add}>
                        Add To Cart
                      </button>
                    </div>
                  </div>

                  <CommentsSection />
                </>
              )}
            </div>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default withRouter(ProductDetails)
