import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Divider, List, Result, Tooltip } from "antd";
import More from "../components/categories/more";
import PostCard from "../components/post-card";
import "antd/dist/antd.css";
import Comment from "../components/comment";
import { IPost, posts } from "../model";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../context";
import CreateNewPost from "../components/create-new-post";

const DetailPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState<IPost | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const { login, setNewPost, posts } = useContext(ThemeContext);
  const [user, setUser] = useState(false);
  const currentPostRef = useRef(0);

  useEffect(() => {
    const hasUser = localStorage.getItem("user");
    hasUser && setUser(true);
  }, []);

  useEffect(() => {
    if (id) {
      if (Number(id) !== currentPostRef.current) {
        currentPostRef.current = Number(id);
        window.scrollTo({ top: 0 });
      }
      const currentPost = posts.find((item) => item.id.toString() == id);
      if (currentPost) setPost(currentPost);
    }
  }, [id, posts]);

  const leftPost = posts
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  const source = () =>
    leftPost.slice(0, 10).map((item, index) => (
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

  const relativePost = posts
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  const relativeSource = () =>
    relativePost.slice(0, 6).map((item, index) => (
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

  const goodPost = posts
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  const goodPostSource = () =>
    goodPost.slice(0, 8).map((item, index) => (
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
    const value = e.target.username?.value;
    const content = e.target.content.value;
    const hasUser = localStorage.getItem("user");
    if (!hasUser) {
      value && localStorage.setItem("user", value as string);
      setUser(true);
    }
    const p = posts.find((post) => post.id == Number(id));
    p?.comments.unshift({
      author: login ? "Admin" : hasUser ? hasUser : value,
      content: content,
      time: new Date().toDateString(),
    });
    if (!p) return;
    setNewPost(p);
    e.target.reset();
    // console.log({ e });
  };
  const handleDeletePost = () => {
    const newPost = posts.filter((p) => p.id.toString() !== id);
    // console.log({ newPost });

    setNewPost(newPost);
    window.location.reload();
  };
  const handleEditPost = () => {
    setOpenModal(true);
  };
  return (
    <section className="my-5">
      {post ? (
        <div className="max-w-[60%] mx-auto">
          <div className="grid grid-cols-5">
            <div className="flex flex-col col-span-1 mt-6 max-h-min">
              {source()}
            </div>
            <div className="col-span-3 px-8">
              {
                <>
                  <div>
                    {/* Title */}
                    <div>
                      <div>
                        <h1 className="text-3xl font-bold">{post.title}</h1>
                        {login && (
                          <div className="flex justify-start items-center gap-x-3 mt-6">
                            <button
                              onClick={handleEditPost}
                              className="px-5 py-2 text-white bg-red-500 rounded"
                            >
                              Chỉnh sửa bài viết
                            </button>
                            <button
                              onClick={handleDeletePost}
                              className="px-5 py-2 text-white bg-red-500 rounded"
                            >
                              Xóa bài viết
                            </button>
                          </div>
                        )}
                      </div>
                      <div className="mt-1 flex justify-start items-center gap-x-2">
                        <span className="text-base text-green-600">
                          by Admin
                        </span>{" "}
                        -
                        <span className="text-[#555] text-sm">{post.time}</span>
                      </div>
                    </div>
                    {/* Link  */}
                    <div className="mt-8">
                      <ul className="ml-10">
                        {post.sections.map((section, index) =>
                          section.title ? (
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
                          ) : null
                        )}
                      </ul>
                    </div>
                    {/* Main content */}
                    <div className="mt-5">
                      {post.sections.map((item, index) => (
                        <div id={index.toString()} key={index} className="py-5">
                          {item.title ? (
                            <h4 className="text-xl font-bold mb-3">
                              {(index + 1).toString() + ". " + item.title}
                            </h4>
                          ) : null}
                          <div>
                            <p className="text-[#444] font-light leading-6 ml-2 indent-10">
                              {item.content}
                            </p>
                          </div>
                          <div className="my-5 w-full text-center">
                            {item.image && (
                              <>
                                <img
                                  src={item.image}
                                  className="w-full h-auto max-h-96 rounded-md"
                                  alt="Default"
                                />
                                <span className="mx-auto text-sm text-[#555] mt-2">
                                  {item.title}
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Divider />

                  {/* Comment here */}
                  <div>
                    <form onSubmit={handleSubmit}>
                      {!user && (
                        <div className="w-full max-w-[25%] rounded mb-5">
                          <input
                            type="text"
                            name="username"
                            placeholder="Tên của bạn ?"
                            className="w-full outline-none h-10 px-4 border border-solid border-[#aaa] rounded"
                          />
                        </div>
                      )}
                      <div className="w-full ">
                        <input
                          name="content"
                          type="text"
                          placeholder="Bình luận"
                          className="w-full border border-solid border-[#aaa] rounded outline-none h-10 px-4"
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
                  <div>
                    {post.comments.map((comment, index) => (
                      <>
                        <Comment comment={comment} key={index} />
                        <Divider />
                      </>
                    ))}
                  </div>
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
              }
            </div>
            <div className="col-span-1 mt-6">
              <More
                relativePost={posts.slice(posts.length - 10, posts.length)}
              />
            </div>
          </div>
          <div>
            <div className="w-full bg-yellow-400 py-3 mt-56 mb-10">
              <h3 className="ml-2 text-xl font-bold text-white">
                BÀI VIẾT HAY ĐƯNG BỎ LỠ
              </h3>
            </div>
            <div className="grid grid-cols-4 gap-8">{goodPostSource()}</div>
          </div>
        </div>
      ) : (
        <Result
          status="404"
          title="404"
          subTitle="Không tìm thấy bài viết"
          extra={
            <button
              onClick={() => window.location.replace("/")}
              className="bg-blue-500 text-white px-5 py-1 rounded"
            >
              Quay lại trang chủ
            </button>
          }
        />
      )}
      {openModal && (
        <CreateNewPost
          openModal={openModal}
          post={post ? post : undefined}
          closeModal={() => setOpenModal((prev) => !prev)}
        />
      )}
    </section>
  );
};

export default DetailPost;
