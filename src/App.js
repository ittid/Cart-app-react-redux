import { Route, Routes } from "react-router-dom";
import NavbarItems from "./components/Navbar";
import Product from "./components/Product";
import Cart from "./components/Cart";
// https://fakestoreapi.com/products/

function App() {
  return (
    <div className="App">
      <NavbarItems />
      <Routes>
        <Route path="/" element={<Product />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
