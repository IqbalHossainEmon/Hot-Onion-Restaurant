import React, { useEffect, useState } from "react";
import FoodCard from "../../FoodCard/FoodCard";

const Breakfast = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("/breakfast.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <div className="grid px-24 grid-cols-3 gap-x-20">
        {data && data.map((x) => <FoodCard key={x.id} data={x} />)}
      </div>
    </div>
  );
};

export default Breakfast;
