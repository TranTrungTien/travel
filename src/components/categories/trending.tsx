import React from "react";
import PostCard from "../post-card";
import { posts } from "../../model";

const Trending = () => {
  const source = () =>
    posts.map((item, index) => (
      <PostCard
        key={index}
        data={item}
        options={{
          imageStyle: "max-h-[170px]",
          titleStyle: "font-semibold mt-3",
        }}
      />
    ));
  return (
    <section className="gap-x-8 gap-y-16 grid grid-cols-4 my-4">
      {source()}
    </section>
  );
};

export default Trending;
