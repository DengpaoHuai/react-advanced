import { useEffect, useState } from "react";

const useFetch = <TData>(url: string) => {
  const [data, setData] = useState<null | TData>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data: TData) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("Error fetching data");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
