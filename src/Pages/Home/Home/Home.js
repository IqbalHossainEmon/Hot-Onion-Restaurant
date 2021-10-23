import React from "react";
import Search from "../Search/Search";
import Why from "../Why/Why";
import Foods from "./Foods/Foods";

const Home = () => {
  return (
    <div>
      <Search />
      <Foods />
      <Why />
    </div>
  );
};

export default Home;
