import { useContext } from "react";
import { ThemeContext } from "../../context";
import PostCard from "../post-card";

const Relative = () => {
  const { posts } = useContext(ThemeContext);

  const randomPost = posts
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  const source = () =>
    randomPost.slice(0, 12).map((item, index) => (
      <PostCard
        data={item}
        key={index}
        options={{
          imageStyle: "max-h-[75px] min-h-[75px]",
          titleStyle: "font-medium text-sm",
          containerStyle: "flex flex-row justify-start items-start gap-x-3",
        }}
      />
    ));
  return <section className="gap-6 grid grid-cols-3 my-4">{source()}</section>;
};

export default Relative;
