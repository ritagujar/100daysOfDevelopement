// http://localhost:3000/client/hey

import { useRouter } from "next/router";

function ClientProjectPage() {
  const router = useRouter();

  console.log(router.query);

  // Navigate Programatically
  function loadProjectHandler() {
    // router.push("/client/max/projecta");

    // or

    router.push({
      pathname: "/client/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projecta" },
    });
  }

  return (
    <div>
      <h1>The Client Project Page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectPage;
