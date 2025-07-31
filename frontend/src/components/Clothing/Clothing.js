import React, { Component } from "react"
import "./Clothing.css"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import SearchAndFilter from "../SearchAndFilter/SearchAndFilter"
import { Vortex } from "react-loader-spinner"
import ReactContext from "../../Context/ReactContext"
import { Link } from "react-router-dom"

const contants = {
  initial: "INITIAL",
  loading: "LOADING",
  success: "SUCCESS",
  error: "ERROR",
}

class Clothing extends Component {
  state = { products: [], status: contants.initial, allProducts: [] }

  componentDidMount() {
    this.fetchCloths()
  }

  fetchCloths = async () => {
    this.setState({ status: contants.loading })
    try {
      const response = await fetch(
        "https://casamart-new-backend.onrender.com/cloths",
        {
          method: "GET",
        }
      )
      if (!response.ok) throw new Error("Network response was not ok")
      const data = await response.json()

      const backendProducts = data.data.map((item) => ({
        id: item._id,
        name: item.name,
        price: item.price,
        description: item.description,
        category: item.category,
        discountPrice: item.discount_price,
        rating: item.rating,
        availability: item.availability,
        deliveryTime: item.delivery_time,
        image: item.image,
      }))
      this.setState({
        allProducts: backendProducts,
        products: backendProducts,
        status: contants.success,
      })
    } catch (error) {
      console.error("Error fetching products:", error)
      this.setState({ products: [], status: contants.error })
    }
  }

  handleSearchInput = (searchTerm) => {
    if (searchTerm.trim() === "") {
      alert("Please enter a search term")
      return
    }
    const { products } = this.state
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    this.setState({ products: filteredProducts })
  }

  handleFilterChange = (filters) => {
    const { allProducts } = this.state
    let filtered = [...allProducts]

    // Filter by categories
    if (filters.categories.length > 0) {
      filtered = filtered.filter((item) =>
        filters.categories.includes(item.category)
      )
    }

    // Filter by rating
    if (filters.rating === "4+") {
      filtered = filtered.filter((item) => item.rating >= 4)
    } else if (filters.rating === "3+") {
      filtered = filtered.filter((item) => item.rating >= 3)
    }

    // Sort
    if (filters.sort === "lowToHigh") {
      filtered.sort((a, b) => a.discountPrice - b.discountPrice)
    } else if (filters.sort === "highToLow") {
      filtered.sort((a, b) => b.discountPrice - a.discountPrice)
    }

    this.setState({ products: filtered })
  }

  renderSuccessView = () => {
    return (
      <ReactContext.Consumer>
        {(value) => {
          const { setCartList } = value
          const add = (product) => {
            setCartList(product)
          }
          return (
            <>
              {this.state.products.length === 0 ? (
                <div className="no-products">
                  <h2 style={{ marginBottom: "10px" }}>No products found</h2>
                  <p>Please try a different search term.</p>
                </div>
              ) : (
                <div className="newin-main-container">
                  {this.state.products.map((product) => {
                    const stars =
                      "⭐".repeat(Math.floor(product.rating)) +
                      "☆".repeat(5 - Math.floor(product.rating))
                    return (
                      <Link
                        key={product.id}
                        to={{
                          pathname: `/cloths/${product.id}`,
                          state: {
                            pathName: "cloths",
                          },
                        }}
                        style={{ textDecoration: "none" }}
                      >
                        <div className="newin-card" key={product.id}>
                          <img src={product.image} alt={product.name} />
                          <h3>{product.name}</h3>
                          <p className="rating-stars">
                            {stars}
                            {Math.ceil(Math.random() * 10)}k
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
                                <span style={{ color: "green" }}>In Stock</span>
                              ) : (
                                <span style={{ color: "red" }}>
                                  Out of Stock
                                </span>
                              )}
                            </strong>
                          </p>
                          <p>
                            <strong>Delivery Time:</strong>{" "}
                            {product.deliveryTime}
                          </p>
                          <button
                            className="newin-add-to-cart"
                            onClick={(event) => {
                              event.stopPropagation()
                              event.preventDefault()
                              add(product)
                            }}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              )}
            </>
          )
        }}
      </ReactContext.Consumer>
    )
  }

  renderLoadingView = () => {
    return (
      <div className="clothing-loading-view">
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
        />
      </div>
    )
  }

  renderErrorView = () => {
    return (
      <div className="clothing-error-view">
        <img
          src="https://media.istockphoto.com/id/1348157796/vector/website-under-construction-page-web-page-under-construction-website-under-maintenance-page.jpg?s=612x612&w=0&k=20&c=vJCWlc0t7pZY3b41LciyKsXQAtcDlMqzq2M7zOsl5rI="
          alt="Failure"
        />
      </div>
    )
  }

  renderViews = () => {
    const { status } = this.state
    switch (status) {
      case contants.loading:
        return this.renderLoadingView()
      case contants.success:
        return this.renderSuccessView()
      case contants.error:
        return this.renderErrorView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="clothing">
        <Navbar />
        <Sidebar />
        <div className="clothing-main-content">
          <h1 style={{ marginBottom: "10px" }}>👗 Clothing</h1>
          <p style={{ marginLeft: "10px" }}>
            Discover our latest clothing collection!
          </p>

          <SearchAndFilter
            onSearchNewin={this.handleSearchInput}
            onFilterChange={this.handleFilterChange}
          />

          {this.renderViews()}
        </div>
      </div>
    )
  }
}
export default Clothing
