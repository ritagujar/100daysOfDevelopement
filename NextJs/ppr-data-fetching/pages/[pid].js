import path from "path";
import fs from "fs/promises";

function ProductDetailPage(props) {
  const { loadedProducts } = props;

  //   We have write this fallback check if we set fallback to true
  // If we set fallback to blocking we dont need this fallback check
  //   if (!loadedProducts) {
  //     return <p>Loading....</p>;
  //   }

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

export async function getStaticPaths() {
  return {
    paths: [{ params: { pid: "p1" } }],

    fallback: "blocking",
  };
}

export default ProductDetailPage;
