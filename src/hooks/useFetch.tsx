import { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<object[]>([]);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setData(result.data.memes);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { error, loading, data };
};

export default useFetch;
