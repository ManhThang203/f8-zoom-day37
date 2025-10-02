//   React
import { useEffect, useState } from "react";

const DataFetcher = ({ url, children }) => {
  // Trạng thái
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Call Api
  useEffect(() => {
    const timer = setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Error: ${res.status} ${res.statusText}`);
          }
          return res.json();
        })
        .then((json) => setData(json))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }, 2000); // delay 2 giây

    // Clean Up
    return () => clearTimeout(timer);
  }, [url]);

  return children({ data, loading, error });
};
export default DataFetcher;
