import React, { createContext, useEffect, useState } from "react";
import { IPost, postsList } from "./model";
import { IDBPDatabase, openDB } from "idb";

type IContext = {
  login: boolean;
  posts: IPost[];
  changeLogin: (value: boolean) => void;
  setNewPost: (value: IPost | IPost[]) => void;
  editPost: (value: IPost) => void;
  delPost: (id?: number) => void;
};
export const ThemeContext = createContext<IContext>({
  login: false,
  posts: [],
  changeLogin: (value: boolean) => undefined,
  setNewPost: (value: IPost | IPost[]) => undefined,
  editPost: (value: IPost) => undefined,
  delPost: (id?: number) => undefined,
});

type IProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: IProps) => {
  const [login, setLogin] = useState(false);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [db, setDb] = useState<IDBPDatabase<any>>();
  useEffect(() => {
    const createDB = async () => {
      const db = await openDB("travelDB", 1, {
        upgrade(db) {
          db.createObjectStore("travel-store", {
            keyPath: "id",
            autoIncrement: true,
          });
        },
      });
      const tx = db.transaction("travel-store", "readwrite");
      const store = tx.objectStore("travel-store");
      // const postListPromise = postsList.map(async (post) => {
      //   await store.add(post);
      // });
      // await Promise.all(postListPromise);
      const newPostWithId = await store.getAll();
      setDb(db);
      setPosts(newPostWithId.sort((b, a) => a.id - b.id));
    };
    createDB();
  }, []);
  useEffect(() => {
    const isLogin = Boolean(localStorage.getItem("isLogined"));

    setLogin(isLogin);
  }, []);

  const changeLogin = (value: boolean): any => {
    setLogin(value);
  };
  const setNewPost = async (value: IPost | IPost[]) => {
    let newPost: IPost[] = [];
    if (!db) return;
    const tx = db.transaction("travel-store", "readwrite");
    const store = tx.objectStore("travel-store");
    if (Array.isArray(value)) {
      newPost = value;
    } else {
      newPost = [value];
    }
    await Promise.all(
      newPost.map(async (post) => {
        await store.add(post);
      })
    );
    const allPost = await store.getAll();
    tx.commit();
    setPosts(allPost.sort((b, a) => a.id - b.id));
  };

  const editPost = async (post: IPost) => {
    if (!db) return;
    const tx = db.transaction("travel-store", "readwrite");
    const store = tx.objectStore("travel-store");
    await store.put(post);
    const posts = (await store.getAll()) as IPost[];
    tx.commit();
    setPosts(posts?.sort((b, a) => a.id! - b.id!));
  };

  const delPost = async (id?: number) => {
    if (!db || !id) return;
    const tx = db.transaction("travel-store", "readwrite");
    const store = tx.objectStore("travel-store");
    await store.delete(id);
    const posts = await store.getAll();
    setPosts(posts?.sort((b, a) => a.id - b.id));
  };
  return (
    <>
      <ThemeContext.Provider
        value={{ login, changeLogin, posts, setNewPost, editPost, delPost }}
      >
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeProvider;
