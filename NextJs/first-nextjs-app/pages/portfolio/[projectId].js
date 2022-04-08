// http://localhost:3000/portfolio/anything

import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>Portfolio Project Page</h1>
    </div>
  );
}

export default PortfolioProjectPage;