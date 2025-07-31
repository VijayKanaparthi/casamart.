import React, { Component } from "react"
import "./Home.css"
import SearchAndFilter from "../SearchAndFilter/SearchAndFilter"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import { Vortex } from "react-loader-spinner"
import ReactContext from "../../Context/ReactContext"
import { Link } from "react-router-dom"

const contants = {
  initial: "INITIAL",
  loading: "LOADING",
  success: "SUCCESS",
  error: "ERROR",
}

class Home extends Component {
  state = {
    isSidebarOpen: false,
    allProducts: [],
    products: [],
    status: contants.initial,
  }

  componentDidMount() {
    this.fetchProducts()
  }

  fetchProducts = async () => {
    this.setState({ status: contants.loading })
    try {
      const response = await fetch(
        "https://casamart-new-backend.onrender.com/all-products"
      )
      if (!response.ok) throw new Error("Network response was not ok")

      const data = await response.json()
      const backendProducts = data.data.map((item) => {
        const source =
          item.category.toLowerCase() === "newin" ? "newin" : "cloths"

        return {
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
          source: source, // ✅ add this properly
        }
      })

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

  handleSearchInput = (searchTerm) => {
    if (searchTerm.trim() === "") {
      alert("Please enter a search term")
      return
    }
    const { allProducts } = this.state

    const filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

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
                        to={{
                          pathname: `/${product.source}/${product.id}`, // example: /newin/64a5e12....
                          state: {
                            pathName: product.source,
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
      <div className="newin-loading-view">
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
      <div className="newin-error-view">
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
      <div className="home-page">
        {/* Navbar */}
        <Navbar />
        {/* Sidebar */}
        <Sidebar />
        {/* Main content */}
        <main className="main-content">
          <h1 style={{ textAlign: "center" }}>Welcome to CasaMart</h1>
          <div className="main-container">
            <div className="card card-offer">
              <h2>🔥 GET UP TO 50% OFF</h2>
            </div>

            <div
              className="card card-bg"
              style={{
                backgroundImage: `url("https://plus.unsplash.com/premium_photo-1670415392937-db5feca6c41c?w=600&auto=format&fit=crop&q=60")`,
              }}
            >
              <div className="card-text">
                <h3>Winter Weekends</h3>
                <p>Keep it casual</p>
              </div>
            </div>

            <div
              className="card card-bg"
              style={{
                backgroundImage: `url("https://media.istockphoto.com/id/1279108197/photo/variety-of-womens-fashion-comfortable-shoes-of-all-seasons-on-a-light-background-top-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=egrXx_zXNkFg74KkmrRwmCywJD4YcP3NWchqYkLoHPM=")`,
              }}
            >
              <div className="card-text">
                <p>Trending Footwear Picks</p>
              </div>
            </div>

            <div
              className="card card-bg"
              style={{
                backgroundImage: `url("https://res.cloudinary.com/dhalfd5xj/image/upload/v1753253854/13077_i5trb6.jpg")`,
              }}
            >
              <div className="card-text">
                <h3>New-In Knitwear</h3>
                <p>Layers. On. Layers.</p>
                <p>Festival Fire Cracker Collections</p>
              </div>
            </div>
          </div>
          {/* Search Bar  */}
          <SearchAndFilter
            onSearchNewin={this.handleSearchInput}
            onFilterChange={this.handleFilterChange}
          />
          {this.state.status === "SUCCESS" ? (
            <h1 style={{ textAlign: "center" }}>Trending 🔥</h1>
          ) : (
            ""
          )}

          {this.renderViews()}
        </main>
      </div>
    )
  }
}
export default Home
