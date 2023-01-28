import PostCard from "../post-card";

const More = ({ relativePost }: { relativePost: any[] }) => {
  const randomPost = relativePost
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  const source = () =>
    randomPost.slice(0, 8).map((item, index) => (
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
