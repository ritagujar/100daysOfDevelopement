// http://localhost:3000/client

import Link from "next/link";

function ClientPage() {
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "manu", name: "Manuel" },
  ];

  return (
    <div>
      <h1>The Client Page</h1>
      {/* <ul>
        <li>
          <Link href="/client/max">Maximilian</Link>
        </li>
        <li>
          <Link href="/client/manu">Manuel</Link>
        </li>
      </ul> */}

      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/client/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientPage;
