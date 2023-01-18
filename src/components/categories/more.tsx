import React from "react";
import PostCard from "../post-card";
import { posts } from "../../model";

const More = () => {
  const source = () =>
    posts.map((item, index) => (
      <PostCard
        key={index}
        data={item}
        options={{
          imageStyle: "h-[65px] max-w-[75px]",
          titleStyle: "font-medium text-sm",
          containerStyle:
            "flex flex-row justify-start items-start gap-x-3 mb-3",
        }}
      />
    ));
  return <section>{source()}</section>;
};

export default More;
