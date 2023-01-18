import React from "react";
import PostCard from "../post-card";
import { posts } from "../../model";

const Relative = () => {
  const source = () =>
    posts.map((item, index) => (
      <PostCard
        data={item}
        key={index}
        options={{
          imageStyle: "max-h-[75px]",
          titleStyle: "font-medium text-sm",
          containerStyle: "flex flex-row justify-start items-start gap-x-3",
        }}
      />
    ));
  return <section className="gap-6 grid grid-cols-3 my-4">{source()}</section>;
};

export default Relative;
