import { useContext } from "react";
import { ThemeContext } from "../../context";
import PostCard from "../post-card";

const Trending = () => {
  const { posts } = useContext(ThemeContext);
  const randomPost = posts
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  const source = () =>
    randomPost.slice(0, 8).map((item, index) => (
      <PostCard
        key={index}
        data={item}
        options={{
          imageStyle: "max-h-[170px] min-h-[170px]",
          titleStyle: "font-semibold mt-3",
        }}
      />
    ));
  return (
    <div className="mt-10">
      <h2 className="text-2xl">Trending</h2>
      <section className="gap-x-8 gap-y-16 grid grid-cols-4 my-4">
        {source()}
      </section>
    </div>
  );
};

export default Trending;
