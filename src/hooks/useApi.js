import { useCallback, useEffect, useState } from "react";

function useApi(url) {
  // State
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Callback ghi nhơ hàm nếu deps thay đổi sẽ tao 1 hàm mới với tham chiếu mới cho hàm đó ở context khác
  const fetchData = useCallback(() => {
    if (!url) return;

    // Reset dữ liệu trước khi fetch
    setData([]);
    setLoading(true);
    setError(null);

    // Delay 2 giây trước khi fetch
    const timer = setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) throw Error("Failed to fetch");
          return res.json();
        })
        .then((json) => setData(json))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }, 2000);

    // clear timeout nếu unmount sớm
    return () => clearTimeout(timer);
  }, [url]);

  useEffect(() => {
    const api = fetchData();
    return api;
  }, [fetchData]);

  return { data, loading, error, fetchData };
}

export default useApi;
