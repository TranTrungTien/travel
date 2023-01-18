import React from "react";

const Footer = () => {
  return (
    <div className="border-t border-solid border-[#cecece]">
      <div className="flex justify-start items-start max-w-[80%] mx-auto py-3">
        <div className="flex justify-start items-center">
          <img className="" src="/images/logo.jpg" alt="" />
          <p className="text-4xl text-green-600 ml-5">Lạng Sơn</p>
        </div>
        <div className="max-w-[60%] mx-auto">
          <p className="text-green-500 mb-4">
            Kênh khám phá và trải nghiệm của giới trẻ, những chuyến đi dài tuổi
            trẻ, khám phá thiên nhiên, trải nghiệm leo núi, ẩm thực cuộc sống
            bốn phương
          </p>
          <div className="grid grid-cols-4">
            <p>Bắc Sơn</p>
            <p>Bình Gia</p>
            <p>Cao Lộc</p>
            <p>Lộc Bình</p>
            <p>Hữu Lũng</p>
            <p>Chi Lăng</p>
            <p>Văn Quan</p>
            <p>Văn Lãng</p>
            <p>Tràng Định</p>
          </div>
        </div>
      </div>
      <div className="py-4 bg-[#eee]">
        <p className="text-sm font-light mx-auto max-w-max">
          Copyright © 2022 all rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
