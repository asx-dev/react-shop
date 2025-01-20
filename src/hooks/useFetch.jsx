import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      try {
        const data = await fetch(url);
        const response = await data.json();
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };
    if (mounted) {
      fetchData();
    }
    () => {
      mounted = false;
    };
  }, [url]);

  return data;
};

export default useFetch;
