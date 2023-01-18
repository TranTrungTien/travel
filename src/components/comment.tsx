import { UserOutlined } from "@ant-design/icons";
import React from "react";

const Comment = () => {
  return (
    <div className="w-full">
      <div className="flex justify-start items-start gap-x-4 w-full">
        <div className="bg-[#ccc] w-12 h-12 flex justify-center items-center rounded-full">
          <UserOutlined className="text-3xl" />
        </div>
        <div className="flex justify-start items-start flex-col flex-1">
          <div className="flex justify-start items-center gap-x-4 mb-1">
            <span className="text-lg font-semibold text-[#444]">
              Hiiiiiiiiiiiiiiiiiiii
            </span>
            <span className="text-xs text-[#aaa]">24/12/2313</span>
          </div>
          <p className="flex-1 font-light text-[#666]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus natus voluptas illo itaque veritatis id earum dicta
            temporibus in quaerat totam perferendis officia dolorem quas,
            excepturi harum quo optio ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
