import { Pagination } from "antd";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Categories from "../components/categories";
import More from "../components/categories/more";
import PostCard from "../components/post-card";
import { ThemeContext } from "../context";
import { IPost, categories } from "../model";

const CategoriesPage = () => {
  const [postsOfCategory, setPostsOfCategory] = useState<null | IPost[]>(null);
  const [page, setPage] = useState(5);
  const { id } = useParams();

  const { posts } = useContext(ThemeContext);
  const [category, setCategory] = useState("");
  const source = () =>
    postsOfCategory &&
    postsOfCategory.slice(0, page).map((item, index) => (
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
  useEffect(() => {
    if (id) {
      const pOfC = posts.filter((p) => p.category === parseInt(id));
      const cate = categories.find((c) => c.value === parseInt(id));
      setPostsOfCategory(pOfC || null);
      setCategory(cate?.label || "");
    }
  }, [id, posts]);

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
                total={postsOfCategory?.length}
                hideOnSinglePage
                current={page / 5}
                pageSize={5}
                className="ml-auto max-w-max"
              />
            </div>
          </div>
          <div className="max-w-[calc(100%/3)]">
            <h2 className="text-xl my-3">Tin liên quan</h2>
            {postsOfCategory && <More relativePost={postsOfCategory} />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CategoriesPage;
