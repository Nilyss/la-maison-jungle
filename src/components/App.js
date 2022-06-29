import React from "react";
// Import Banner component
import Banner from "./Banner";

// Import Logo of website
import Logo from "../assets/leaf.png";

// import Cart from "./Cart";

// Import ShoppingList component
import ShoppingList from "./ShoppingList";

// Import Footer
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Banner>
        <img src={Logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      {/*<Cart />*/}
      <ShoppingList />
      <Footer />
    </div>
  );
}

export default App;
