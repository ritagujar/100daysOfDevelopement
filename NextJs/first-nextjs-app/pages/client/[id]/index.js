// http://localhost:3000/client/hey

import { useRouter } from "next/router";

function ClientProjectPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>The Client Project Page</h1>
    </div>
  );
}

export default ClientProjectPage;
