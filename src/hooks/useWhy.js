import { useEffect, useState } from "react";

const useWhy = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/whycard.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return [data];
};

export default useWhy;
