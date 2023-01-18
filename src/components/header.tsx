import { BarsOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Divider, Dropdown, Input, MenuProps, Popconfirm } from "antd";
import React, { useState } from "react";
import CreateNewPost from "./create-new-post";
import { Link } from "react-router-dom";

const navList = [
  {
    label: "Địa điểm",
    children: [
      {
        label: "Thành phố Lạng Sơn",
        link: "21",
      },
      {
        label: "Huyện Bắc Sơn",
        link: "22",
      },
      {
        label: "Huyện Bình Gia",
        link: "23",
      },
      {
        label: "Huyện Cao Lộc",
        link: "24",
      },
      {
        label: "Huyện Chi Lăng",
        link: "25",
      },
      {
        label: "Huyện Đình Lập",
        link: "26",
      },
      {
        label: "Huyện Hữu Lũng",
        link: "27",
      },
      {
        label: "Huyện Lộc Bình",
        link: "28",
      },
      {
        label: "Huyện Tràng Định",
        link: "29",
      },
      {
        label: "Huyện Văn Lãng",
        link: "30",
      },
      {
        label: "Huyện Văn Quan",
        link: "31",
      },
    ],
  },
  {
    label: "Ẩm thực",
    children: [
      {
        label: "Đặc sản",
        link: "1",
      },
      {
        label: "Nhà hàng",
        link: "2",
      },
      {
        label: "Quán nước",
        link: "3",
      },
      {
        label: "Cách làm",
        link: "4",
      },
    ],
  },
  {
    label: "Làm đẹp",
    children: [
      {
        label: "Trang điểm",
        link: "5",
      },
      {
        label: "Làm tóc",
        link: "6",
      },
      {
        label: "Thời trang",
        link: "7",
      },
    ],
  },
  {
    label: "Nhà đẹp",
    children: [
      {
        label: "Villa",
        link: "8",
      },
      {
        label: "Nhà nghỉ",
        link: "9",
      },
      {
        label: "Khách sạn",
        link: "10",
      },
      {
        label: "Nội thất",
        link: "11",
      },
    ],
  },
  {
    label: "Trải nghiệm",
    children: [
      {
        label: "Leo núi",
        link: "12",
      },
      {
        label: "Hang Động",
        link: "13",
      },
      {
        label: "Sông suối",
        link: "14",
      },
      {
        label: "Cắm trại",
        link: "15",
      },
    ],
  },
  {
    label: "Sức khỏe",
    children: [
      {
        label: "Sân bóng",
        link: "16",
      },
      {
        label: "Phố đi bộ",
        link: "17",
      },
    ],
  },
  {
    label: "Khẩn cấp",
    children: [
      {
        label: "Bệnh viện",
        link: "18",
      },
      {
        label: "Cứu hỏa",
        link: "19",
      },
      {
        label: "113",
        link: "20",
      },
    ],
  },
];

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <header className="sticky top-0 shadow-md bg-white">
      <div className="flex justify-between items-center max-w-[60%] mx-auto">
        <div className="flex justify-start items-center gap-x-3">
          <div className="flex justify-start items-center gap-x-3">
            <Link to={"/"}>
              <img className="h-20" src="/images/logo.jpg" alt="" />
            </Link>
            <p className="text-3xl text-green-600 ml-5">Lạng Sơn</p>
          </div>
          <p className="text-xl text-green-600 font-medium border-l-2 border-solid border-black pl-3">
            Kênh khám phá giả trí của giới trẻ, thế giới du lịch
          </p>
        </div>
        {/* <p className="text-blue-500">Hotline: 0123456789</p> */}
        <button
          className="text-lg border border-solid border-green-500 rounded px-3 py-1 text-green-500"
          onClick={() => setOpenModal(true)}
        >
          Thêm bài viết mới
        </button>
        <Popconfirm
          icon={<UserOutlined />}
          className="
          px-4
          py-2
          rounded
          text-blue-500
          border
          border-solid
          border-blue-500"
          okText="Đăng nhập"
          cancelText="Hủy"
          title={
            <>
              <div className="space-y-2">
                <Input placeholder="User" />
                <Input placeholder="Password" />
              </div>
            </>
          }
        >
          Admin
        </Popconfirm>
      </div>
      <nav className="flex justify-between items-center max-w-[60%] mx-auto pr-3">
        <ul className="flex justify-around items-center flex-1">
          {navList!.map((nav, index) => (
            <Dropdown
              className="flex-1 text-center"
              menu={{
                items: nav.children.map((item, idx) => {
                  return {
                    key: idx,
                    label: (
                      <Link to={"/category/" + item.link}>{item.label}</Link>
                    ),
                  };
                }),
              }}
            >
              <p className="py-3 text-lg cursor-pointer hover:bg-gray-100">
                {nav.label}
              </p>
            </Dropdown>
          ))}
        </ul>
        <Button
          className=""
          type="text"
          icon={<BarsOutlined className="text-lg" />}
        />
        <Button type="text" icon={<SearchOutlined className="text-lg" />} />
      </nav>
      {openModal && (
        <CreateNewPost
          openModal={openModal}
          closeModal={() => setOpenModal((prev) => !prev)}
        />
      )}
    </header>
  );
};

export default Header;