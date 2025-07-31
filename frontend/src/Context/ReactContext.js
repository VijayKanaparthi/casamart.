import React from "react"

const ReactContext = React.createContext({
  isSidebarOpen: false,
  toggleSidebar: () => {},
  logout: () => {},
  cartList: [],
  setCartList: () => {},
})
export default ReactContext
