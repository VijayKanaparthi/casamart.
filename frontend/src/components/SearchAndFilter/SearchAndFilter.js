import React, { Component } from "react"
import "./SearchAndFilter.css"

class SearchAndFilter extends Component {
  state = {
    showFilter: false,
    search: "",
    filters: {
      sort: "",
      priceRange: [],
      rating: "",
      categories: [],
    },
  }

  toggleFilter = () => {
    this.setState({ showFilter: !this.state.showFilter })
  }

  SearchInput = (event) => {
    const value = event.target.value
    if (value.trim() === "") {
      window.location.reload()
      return
    }
    this.props.onSearchNewin(value)
    this.setState({ search: value })
  }

  handleSearch = () => {
    const { search } = this.state
    if (search.trim() === "") {
      alert("Please enter a search term")
      return
    }
    this.props.onSearchNewin(search)
    this.setState({ search: "" })
  }

  clearSearch = () => {
    this.setState({ search: "" })
    this.props.onFilterChange(this.state.filters)
  }

  clearFilters = () => {
    this.setState(
      {
        filters: {
          sort: "",
          priceRange: [],
          rating: "",
          categories: [],
        },
        showFilter: false,
      },
      () => {
        this.props.onFilterChange(this.state.filters)
      }
    )
  }

  handleFilterChange = (type, value) => {
    const newFilters = { ...this.state.filters }

    if (type === "sort" || type === "rating") {
      newFilters[type] = value
    } else if (type === "categories") {
      if (newFilters.categories.includes(value)) {
        newFilters.categories = newFilters.categories.filter((v) => v !== value)
      } else {
        newFilters.categories.push(value)
      }
    }

    this.setState({ filters: newFilters }, () =>
      this.props.onFilterChange(this.state.filters)
    )
  }

  render() {
    const { search, showFilter, filters } = this.state

    return (
      <div className="search-filter-wrapper">
        <div className="search-filter-top">
          <div className="search-box">
            <input
              type="text"
              className="search-input"
              placeholder="Search for products..."
              value={search}
              onChange={this.SearchInput}
            />
            <button className="search-btn" onClick={this.handleSearch}>
              🔍
            </button>
            <button className="clear-btn" onClick={this.clearSearch}>
              Clear
            </button>
          </div>
          <button className="filter-btn" onClick={this.toggleFilter}>
            🧰 Filters
          </button>
        </div>

        <div className={`filter-sidebar ${showFilter ? "show" : ""}`}>
          <div className="filter-header">
            <h3>Apply Filters</h3>
            <button className="close-btn" onClick={this.toggleFilter}>
              ❌
            </button>
          </div>

          {/* Sort by budget */}
          <div className="filter-section">
            <h4>Sort by Budget</h4>
            <label>
              <input
                type="radio"
                name="sort"
                checked={filters.sort === "lowToHigh"}
                onChange={() => this.handleFilterChange("sort", "lowToHigh")}
              />
              Low to High
            </label>
            <label>
              <input
                type="radio"
                name="sort"
                checked={filters.sort === "highToLow"}
                onChange={() => this.handleFilterChange("sort", "highToLow")}
              />
              High to Low
            </label>
          </div>

          {/* Ratings */}
          <div className="filter-section">
            <h4>Ratings</h4>
            <label>
              <input
                type="radio"
                name="rating"
                checked={filters.rating === "4+"}
                onChange={() => this.handleFilterChange("rating", "4+")}
              />
              4★ & above
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                checked={filters.rating === "3+"}
                onChange={() => this.handleFilterChange("rating", "3+")}
              />
              3★ & above
            </label>
          </div>

          {/* Categories */}
          <div className="filter-section">
            <h4>Categories</h4>
            <label>
              <input
                type="checkbox"
                checked={filters.categories.includes("New Arrivals")}
                onChange={() =>
                  this.handleFilterChange("categories", "New Arrivals")
                }
              />
              New Arrivals
            </label>
            <label>
              <input
                type="checkbox"
                checked={filters.categories.includes("Clothing")}
                onChange={() =>
                  this.handleFilterChange("categories", "Clothing")
                }
              />
              Clothing
            </label>
            <label>
              <input
                type="checkbox"
                checked={filters.categories.includes("Shoes")}
                onChange={() => this.handleFilterChange("categories", "Shoes")}
              />
              Shoes
            </label>
            <label>
              <input
                type="checkbox"
                checked={filters.categories.includes("Gifts & Living")}
                onChange={() =>
                  this.handleFilterChange("categories", "Gifts & Living")
                }
              />
              Gifts & Living
            </label>
            <label>
              <input
                type="checkbox"
                checked={filters.categories.includes("On Sale")}
                onChange={() =>
                  this.handleFilterChange("categories", "On Sale")
                }
              />
              On Sale
            </label>
          </div>
          <button className="clear-filters" onClick={this.clearFilters}>
            Clear Filter
          </button>
        </div>

        {/* Backdrop */}
        {showFilter && (
          <div className="filter-backdrop" onClick={this.toggleFilter}></div>
        )}
      </div>
    )
  }
}

export default SearchAndFilter
