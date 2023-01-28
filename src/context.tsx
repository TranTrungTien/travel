import React, { createContext, useEffect, useState } from "react";
import { IPost } from "./model";

type IContext = {
  login: boolean;
  posts: IPost[];
  changeLogin: (value: boolean) => void;
  setNewPost: (value: IPost | IPost[]) => void;
  editPost: (value: IPost) => void;
};
export const ThemeContext = createContext<IContext>({
  login: false,
  posts: [],
  changeLogin: (value: boolean) => undefined,
  setNewPost: (value: IPost | IPost[]) => undefined,
  editPost: (value: IPost) => undefined,
});

type IProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: IProps) => {
  const [login, setLogin] = useState(false);
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    const postList = localStorage.getItem("posts");
    postList && setPosts(JSON.parse(postList));

    const isLogin = Boolean(localStorage.getItem("isLogined"));

    setLogin(isLogin);
  }, []);
  const changeLogin = (value: boolean): any => {
    setLogin(value);
  };
  const setNewPost = (value: IPost | IPost[]): any => {
    let newPost: IPost[] = [];
    if (Array.isArray(value)) {
      newPost = value;
    } else {
      newPost = [value, ...posts];
    }
    localStorage.setItem("posts", JSON.stringify(newPost));
    setPosts(newPost);
  };

  const editPost = (post: IPost) => {
    const posts = JSON.parse(localStorage.getItem("posts") || "{}") as IPost[];
    const index = posts.findIndex((item) => item.id === post.id);
    posts[index] = post;
    localStorage.setItem("posts", JSON.stringify(posts));
    setPosts(posts);
  };

  return (
    <>
      <ThemeContext.Provider
        value={{ login, changeLogin, posts, setNewPost, editPost }}
      >
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeProvider;
