import React from "react"
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min"

import "./App.css"
import LandingPage from "./components/LandingPage/LandingPage"
import Signup from "./components/Signup/Signup"
import Login from "./components/Login/Login"
import Home from "./components/Home/Home"
import Newin from "./components/Newin/Newin"
import Clothing from "./components/Clothing/Clothing"
import Products from "./components/Products/Products"
import ReactContext from "./Context/ReactContext"
import Cart from "./components/Cart/Cart"
import ProductDetails from "./components/ProductDetails/ProductDetails"

class App extends React.Component {
  state = {
    isSidebarOpen: false,
    cartList: [],
  }

  setCartList = (product) => {
    this.setState((prevState) => ({
      cartList: [...prevState.cartList, product],
    }))
  }

  removeItem = (item) => {
    this.setState((prevState) => ({
      cartList: prevState.cartList.filter(
        (cartItem) => cartItem.id !== item.id
      ),
    }))
  }

  toggleSidebar = () => {
    this.setState((preState) => ({
      isSidebarOpen: !preState.isSidebarOpen,
    }))
  }

  logout = () => {
    alert("Logout Successfully")
    window.location.href = "/"
  }

  clearCart = () => {
    this.setState({ cartList: [] })
  }

  render() {
    const { isSidebarOpen, cartList } = this.state
    return (
      <div className="App">
        <ReactContext.Provider
          value={{
            isSidebarOpen,
            cartList,
            toggleSidebar: this.toggleSidebar,
            logout: this.logout,
            setCartList: this.setCartList,
            removeItem: this.removeItem,
            clearCart: this.clearCart,
          }}
        >
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/newin" component={Newin} />
            <Route exact path="/clothing" component={Clothing} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/newin/:id" component={ProductDetails} />
            <Route exact path="/cloths/:id" component={ProductDetails} />
            {/* Add more routes as needed */}
          </Switch>
        </ReactContext.Provider>
      </div>
    )
  }
}

export default App
