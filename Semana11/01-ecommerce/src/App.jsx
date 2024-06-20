import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import AllProductView from "./views/AllProductView";
import Navbar from "./components/Navbar";
import ProductDetailView from "./views/ProductDetailView";
// import Counter from "./components/Counter";

const App = () => {
  return (
    <div>
      <Router>
        <CartContextProvider>
          {/* <Counter /> */}
          <Navbar />
          <Routes>
            <Route path="/" element={<AllProductView />} />
            <Route path="/product/:id" element={<ProductDetailView />} />
          </Routes>
        </CartContextProvider>
      </Router>
    </div>
  )
}

export default App;
