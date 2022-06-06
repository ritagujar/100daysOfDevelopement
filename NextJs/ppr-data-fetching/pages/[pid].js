import path from "path";
import fs from "fs/promises";

function ProductDetailPage(props) {
  const { loadedProducts } = props;

  return (
    <>
      <h1>{loadedProducts.title}</h1>
      <p>{loadedProducts.description}</p>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.pid;

  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      loadedProducts: product,
    },
  };
}

export default ProductDetailPage;
