import { UserOutlined } from "@ant-design/icons";
import React from "react";
import { IComment } from "../model";
type Props = {
  comment: IComment;
};

const Comment = ({ comment }: Props) => {
  return (
    <div className="w-full">
      <div className="flex justify-start items-start gap-x-4 w-full">
        <div className="bg-[#ccc] w-12 h-12 flex justify-center items-center rounded-full">
          <UserOutlined className="text-3xl" />
        </div>
        <div className="flex justify-start items-start flex-col flex-1">
          <div className="flex justify-start items-center gap-x-4 mb-1">
            <span className="text-lg font-semibold text-[#444]">
              {comment.author}
            </span>
            <span className="text-xs text-[#aaa]">{comment.time}</span>
          </div>
          <p className="flex-1 font-light text-[#666]">{comment.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
