import { Route, Routes } from "react-router-dom";
import Products from "./Products";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Routes>
        <Route path="/new-user" element={<Products />} />
      </Routes>
    </section>
  );
};

export default Welcome;
