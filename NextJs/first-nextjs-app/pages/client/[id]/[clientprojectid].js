// http://localhost:3000/client/hey/hello

import { useRouter } from "next/router";

function SelectClientProjectPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>The Project page for a specific project for a selected Client.</h1>
    </div>
  );
}

export default SelectClientProjectPage;
