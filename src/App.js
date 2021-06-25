import React, { Fragment, useState } from "react";
import Header from "./Compenents/Layout/Header";
import ProductSummary from "./Compenents/Layout/ProductSummary";
import Products from "./Compenents/Products/Products";
import Cart from "./Compenents/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [ShowCart, ShowcartState] = useState(false);

  const OnShowCartHandler = () => {
    ShowcartState(true);
  };

  const OnHideCartHandler = () => {
    ShowcartState(false);
  };

  return (
    <CartProvider>
      {ShowCart && <Cart onHideCart={OnHideCartHandler} />}
      <Header onShowCart={OnShowCartHandler} />
      <ProductSummary />
      <min>
        <Products />
      </min>
    </CartProvider>
  );
}

export default App;
