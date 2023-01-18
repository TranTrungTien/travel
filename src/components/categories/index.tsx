import React from "react";
import Trending from "./trending";
import Relative from "./relative";

const Categories = () => {
  return (
    <div>
      <Trending />
      <div className="h-10"></div>
      <Relative />
    </div>
  );
};

export default Categories;
