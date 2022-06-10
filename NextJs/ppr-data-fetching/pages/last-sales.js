import { useState, useEffect } from "react";
import useSWR from "swr";

function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);
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

  if (!data && !sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales?.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://ppr-data-fetching-default-rtdb.firebaseio.com/sales.json"
  );

  const data = await response.json();

  const transformData = [];

  for (const key in data) {
    transformData.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }

  return {
    props: { sales: transformData },
    // revalidate: 10,
  };
}

export default LastSalesPage;
