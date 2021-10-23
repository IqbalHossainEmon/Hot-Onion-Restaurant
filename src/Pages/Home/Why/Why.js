import React from "react";
import useWhy from "../../../hooks/useWhy";
import WhyCard from "../WhyCard/WhyCard";

const Why = () => {
  const [datas] = useWhy();

  return (
    <div className="px-20">
      <h1 className="text-4xl"> Why you choose us</h1>
      <p className="w-1/2 mt-4">
        Barton waited twenty always repair in within we do. An delighted
        offending curiosity my is dashwoods at. Bou prosperous increasing
        surrounded.
      </p>
      <div className="grid mt-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {datas.map((data) => (
          <WhyCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Why;
