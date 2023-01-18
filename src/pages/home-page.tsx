import React from "react";
import PostCard from "../components/post-card";
import { Button } from "antd";
import { posts } from "../model";

const HomePage = () => {
  const source = () =>
    posts.map((item, index) => (
      <PostCard
        key={index}
        data={item}
        options={{
          desc: {
            isShow: true,
            descStyle: "text-sm font-light leading-6 text-[rgb(61,69,92)]",
          },
          imageStyle: "max-h-[170px]",
          titleStyle: "my-2 text-xl font-bold hover:text-blue-800 ",
        }}
      />
    ));
  return (
    <>
      <main className="mx-auto max-w-[60%] gap-x-8 gap-y-20 grid grid-cols-3 my-10">
        {source()}
      </main>
      <div className="w-full flex justify-center mb-20">
        <button className="bg-blue-500 text-white px-8 py-2 rounded-md">
          Xem thêm
        </button>
      </div>
    </>
  );
};

export default HomePage;
