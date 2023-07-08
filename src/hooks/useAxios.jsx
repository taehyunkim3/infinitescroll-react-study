import axios from "axios";
import { useCallback, useState } from "react";

const useAxios = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useCallback(() => {
    const axiosData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(res);
      } catch (error) {
        console.log("error" + error);
      } finally {
        setLoading(false);
      }
    };
    axiosData(url);
  }, [url]);

  return { data, loading };
};

export default useAxios;
