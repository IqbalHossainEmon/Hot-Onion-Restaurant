import React from "react";

const Search = () => {
  return (
    <div className="bg-bg-food bg-cover bg-no-repeat flex justify-center items-center">
      <div className="my-48 text-center">
        <h1 className="text-5xl">Best food waiting for your belly</h1>
        <div className="mt-5 focus-within:ring-2 ring-gray-600 inline-block bg-white rounded-full">
          <input
            className="p-2 w-72 bg-transparent outline-none rounded-full "
            type="text"
            placeholder="Search food items"
          />
          <button className="bg-red-500 hover:bg-red-600 transition px-4 text-white py-2 h-auto ml-auto rounded-full">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
