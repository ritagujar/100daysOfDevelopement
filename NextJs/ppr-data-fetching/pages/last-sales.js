import { useState, useEffect } from "react";
import useSWR from "swr";

function LastSalesPage() {
  const [sales, setSales] = useState();
  //   const [isLoading, setIsLoading] = useState(false);

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(
    "https://ppr-data-fetching-default-rtdb.firebaseio.com/sales.json",
    fetcher
  );

  useEffect(() => {
    if (data) {
      const transformData = [];

      for (const key in data) {
        transformData.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }

      setSales(transformData);
    }
  }, [data]);

  //   useEffect(() => {
  //     setIsLoading(true);
  //     fetch("https://ppr-data-fetching-default-rtdb.firebaseio.com/sales.json")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const transformData = [];

  //         for (const key in data) {
  //           transformData.push({
  //             id: key,
  //             username: data[key].username,
  //             volume: data[key].volume,
  //           });
  //         }

  //         setSales(transformData);
  //         setIsLoading(false);
  //       });
  //   }, []);

  //   if (isLoading) {
  //     <p>Loading...</p>;
  //   }

  if (error) {
    return <p>Faild to load.</p>;
  }

  if (!data || !sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales?.map((sale) => (
        <li key={sale.id}>
          {sale.username} - {sale.volume}
        </li>
      ))}
    </ul>
  );
}

export default LastSalesPage;
