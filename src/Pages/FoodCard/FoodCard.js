import React from "react";

const FoodCard = ({ data }) => {
  const { img, price, body, name } = data;
  return (
    <div className="flex hover:shadow-lg mt-6 flex-col justify-center items-center">
      <img className="w-40" src={img} alt="" />
      <h4 className="font-semibold text-xl">{name}</h4>
      <p>{body}</p>
      <h3 className="text-3xl">$ {price}</h3>
    </div>
  );
};

export default FoodCard;
