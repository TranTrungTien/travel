import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import DetailPost from "./pages/detail-post";
import CategoriesPage from "./pages/categories-page";

const routesPath = [
  {
    link: "/",
    elem: <HomePage />,
  },
  {
    link: "/details/:id",
    elem: <DetailPost />,
  },
  {
    link: "/category/:id",
    elem: <CategoriesPage />,
  },
];

const Routers = () => {
  return (
    <Routes>
      {routesPath.map((route, index) => {
        return <Route key={index} path={route.link} element={route.elem} />;
      })}
    </Routes>
  );
};

export default Routers;
