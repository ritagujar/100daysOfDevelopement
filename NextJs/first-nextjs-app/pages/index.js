// http://localhost:3000

import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/client">Client</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
