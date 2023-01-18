import React from "react";
import { IPost } from "../model";
import { Link } from "react-router-dom";

type IProps = {
  data: IPost;
  options?: {
    imageStyle?: string;
    titleStyle?: string;
    desc?: {
      descStyle?: string;
      isShow?: boolean;
    };
    containerStyle?: string;
  };
};

const PostCard = (props: IProps) => {
  return (
    <div
      className={`${
        props.options?.containerStyle || "max-w-[400px] flex flex-col"
      }`}
    >
      {props.data.sections[0].image && (
        <div className={`flex-1 ${props.options?.imageStyle} overflow-hidden`}>
          <Link to={"/details/" + props.data.id}>
            <img
              src={props.data.sections[0].image}
              alt=""
              className={`rounded object-cover object-center w-full h-full`}
            />
          </Link>
        </div>
      )}
      <div className="flex-1">
        <h2
          className={`${props.options?.titleStyle} hover:underline hover:text-blue-900`}
        >
          <Link to={"/details/" + props.data.id}>{props.data.title}</Link>
        </h2>
        {props.options?.desc?.isShow && (
          <p className={props.options?.desc?.descStyle + " clip"}>
            {props.data.sections[0].content}
          </p>
        )}
      </div>
    </div>
  );
};

export default PostCard;
