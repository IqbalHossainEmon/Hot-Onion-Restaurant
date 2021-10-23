import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

const WhyCard = ({ data }) => {
  const { img, title, headerImg, description } = data;
  return (
    <div>
      <img src={img} alt="" />
      <div className="flex mt-2 px-4">
        <img className="w-10 h-10" src={headerImg} alt="" />
        <div className="ml-3">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="mt-4">{description}</p>
          <button className="text-blue-600 mt-2 group hover:bg-gray-200 rounded-full transition duration-500 font-semibold px-2">
            See more
            <FontAwesomeIcon
              className="text-green-500 ml-2 group-hover:text-green-900 transition-all duration-500"
              icon={faArrowCircleRight}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyCard;
