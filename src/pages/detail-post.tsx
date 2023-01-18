import React, { useEffect, useState } from "react";
import { Divider, List, Tooltip } from "antd";
import More from "../components/categories/more";
import PostCard from "../components/post-card";
import "antd/dist/antd.css";
import Comment from "../components/comment";
import { IPost, posts } from "../model";
import { useParams } from "react-router-dom";

const DetailPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState<IPost | null>(null);
  useEffect(() => {
    if (id) {
      window.scrollTo({ top: 0 });
      const currentPost = posts.find((item) => item.id.toString() == id);
      if (currentPost) setPost(currentPost);
    }
  }, [id]);
  const source = () =>
    posts.map((item, index) => (
      <PostCard
        key={index}
        data={item}
        options={{
          imageStyle: "max-h-[170px]",
          titleStyle: "font-semibold mt-3",
          containerStyle: "mb-5",
        }}
      />
    ));

  const relativeSource = () =>
    posts.map((item, index) => (
      <PostCard
        key={index}
        data={item}
        options={{
          imageStyle: "max-h-[90px] w-full",
          titleStyle: "font-medium mt-3 text-sm",
          containerStyle: "mb-5",
        }}
      />
    ));

  const goodPostSource = () =>
    posts.map((item, index) => (
      <PostCard
        key={index}
        data={item}
        options={{
          imageStyle: "max-h-[152px] w-full",
          titleStyle: "font-medium mt-3 text-lg",
          containerStyle: "mb-5",
        }}
      />
    ));
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <section className="my-5">
      <div className="max-w-[60%] mx-auto">
        <div className="grid grid-cols-5">
          <div className="flex flex-col col-span-1 mt-6 max-h-min">
            {source()}
          </div>
          <div className="col-span-3 px-8">
            {post && (
              <>
                <div>
                  {/* Title */}
                  <div>
                    <div>
                      <h1 className="text-3xl font-bold">{post.title}</h1>
                      <button className="px-5 py-2 text-white bg-red-500 rounded">
                        Xóa bài viết
                      </button>
                    </div>
                    <div className="mt-1 flex justify-start items-center gap-x-2">
                      <span className="text-base text-green-600">by Admin</span>{" "}
                      -<span className="text-[#555] text-sm">{post.time}</span>
                    </div>
                  </div>
                  {/* Link  */}
                  <div className="mt-8">
                    <ul className="ml-10">
                      {post.sections.map((section, index) => (
                        <li
                          key={index}
                          className="mt-4"
                          style={{ listStyle: "circle" }}
                        >
                          <a
                            className="text-blue-500 hover:underline"
                            href={`#${index}`}
                          >
                            {section.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Main content */}
                  <div className="mt-5">
                    {post.sections.map((item, index) => (
                      <div key={index} className="py-5">
                        <h4 className="text-xl font-bold mb-3">
                          {(index + 1).toString() + ". " + item.title}
                        </h4>
                        <div>
                          <p className="text-[#444] font-light leading-6 ml-2 indent-10">
                            {item.content}
                          </p>
                        </div>
                        <div className="my-5 w-full text-center">
                          <img
                            src={item.image}
                            className="w-full h-auto max-h-96 rounded-md"
                            alt="Default"
                          />
                          <span className="mx-auto text-sm text-[#555] mt-2">
                            {item.title}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <Divider />

                {/* Comment here */}
                <div>
                  <form onSubmit={handleSubmit}>
                    <div className="w-full max-w-[25%] rounded mb-5">
                      <input
                        type="text"
                        placeholder="Tên của bạn ?"
                        className="w-full outline-none h-10 px-4 border border-solid border-[#aaa] rounded"
                      />
                    </div>
                    <div className="w-full ">
                      <input
                        type="text"
                        placeholder="Bình luận"
                        className="w-full border border-solid border-[#aaa] rounded-lg outline-none h-10 px-4"
                      />
                    </div>
                    <button
                      type="submit"
                      className="my-5 px-8 py-2 rounded bg-blue-500 text-white"
                    >
                      Bình luận
                    </button>
                  </form>
                </div>
                <Divider />
                <Comment />
                <div></div>
                <div>
                  <h3 className="text-xl font-bold text-black mt-10">
                    TIN LIÊN QUAN
                  </h3>
                  <div className="grid grid-cols-3 mt-6 gap-x-10">
                    {relativeSource()}
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="col-span-1 mt-6">
            <More />
          </div>
        </div>
        <div>
          <div className="w-full bg-yellow-400 py-3 mt-56 mb-10">
            <h3 className="ml-2 text-xl font-bold text-white">
              BÀI VIẾT HAY ĐƯNG BỎ LỠ
            </h3>
          </div>
          <div className="grid grid-cols-4 gap-8">{goodPostSource()}</div>
          <button className="px-10 py-3 rounded bg-blue-600 text-white font-medium mt-2">
            Xem thêm bài viết
          </button>
        </div>
      </div>
    </section>
  );
};

export default DetailPost;