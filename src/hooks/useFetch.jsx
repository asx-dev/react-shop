import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      try {
        const data = await fetch(url);
        const response = await data.json();
        setData(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (mounted) {
      fetchData();
    }
    () => {
      mounted = false;
    };
  }, [url]);

  return { data, isLoading };
};

export default useFetch;
