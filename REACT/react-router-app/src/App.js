import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/products" element={<Products />} />
          {/* Here productId is a dynamic segment and it takes any value */}
          {/* The identifire which we specified here after the colon as a key in the params object which we get as  a const */}
          <Route
            path="/product-detail/:productId"
            element={<ProductDetails />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
