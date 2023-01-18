import React, { useEffect, useState } from "react";
import Categories from "../components/categories";
import PostCard from "../components/post-card";
import More from "../components/categories/more";
import { Pagination } from "antd";
import { IPost, categories, posts } from "../model";
import { useParams } from "react-router-dom";

const CategoriesPage = () => {
  const [postsOfCategory, setPostsOfCategory] = useState<null | IPost[]>(null);
  const [category, setCategory] = useState("");
  const source = () =>
    postsOfCategory &&
    postsOfCategory.map((item, index) => (
      <PostCard
        key={index}
        data={item}
        options={{
          desc: {
            isShow: true,
            descStyle: "text-sm font-light leading-6 text-[rgb(61,69,92)] ",
          },
          imageStyle: "max-h-[170px] max-w-[260px]",
          titleStyle: "mb-2 text-2xl font-bold hover:text-blue-800 ",
          containerStyle: "flex flex-row mb-10 gap-x-4",
        }}
      />
    ));
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      const pOfC = posts.filter((p) => p.category === parseInt(id));
      const cate = categories.find((c) => c.value === parseInt(id));
      console.log(pOfC);

      setPostsOfCategory(pOfC || null);
      setCategory(cate?.label || "");
    }
  }, [id]);

  return (
    <main className="">
      <div className="w-full h-20 bg-[#efefef]">
        <div className="mx-auto max-w-[60%] flex justify-start h-full items-center">
          <h1 className="text-2xl font-semibold">{category}</h1>
        </div>
      </div>
      <div className="mx-auto max-w-[60%] mb-10">
        <Categories />
        <div className="mt-16 flex justify-between items-start">
          <div className="max-w-[calc(100%-100%/3-20px)] mr-5">
            {source()}
            <div className="w-full">
              <Pagination
                total={100}
                current={1}
                pageSize={5}
                className="ml-auto max-w-max"
              />
            </div>
          </div>
          <div className="max-w-[calc(100%/3)]">
            <More />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CategoriesPage;
