import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SingleProduct from "./components/SingeProduct";
import ProductPage from "./components/ProductPage";

export default function App() {
  return (
      <main className="bg max-w-2xl mx-auto md:max-w-7xl">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-page/:id" element={<SingleProduct />} />
          <Route path="/product-page" element={<ProductPage />} />
        </Routes>
      </main>
  );
}
