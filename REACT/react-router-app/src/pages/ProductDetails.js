import { useParams } from "react-router";
import React from "react";

const ProductDetails = () => {
  // This Hook return an params object which we can store in a constant.
  // And this object contains a key value pairs
  // Where the key are the dynamic segments leading to that page
  // In this exp productId is a key which we get here.

  const params = useParams();
  console.log(params.productId);

  return (
    <section>
      <h1>Product Details</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetails;
