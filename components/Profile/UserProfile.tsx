import { EditSvg, SchoolSvg } from "@/constants/svg-img";
import { Button, Layout, theme, Typography } from "antd";
import Icon from "@ant-design/icons";

import Image from "next/image";
import React, { useState } from "react";
import UserEditProfile from "./UserEditProfile";
import { set } from "react-hook-form";
const { Sider, Content } = Layout;
const { Text, Link } = Typography;

type Props = {};
const dataUser = {
  name: "John Tran",
  email: "johndoe@me.com",
  phone: "123456789",
  tag: "Student",
  img: "https://i.pravatar.cc/300",
};
const dataCount = [
  {
    id: 1,
    name: "QUIZZES",
    num: 4,
  },
  {
    id: 2,
    name: "COLLECTIONS",
    num: 2,
  },
  {
    id: 3,
    name: "MEMESETS",
    num: 2,
  },
];
const UserProfile = (props: Props) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [open, setOpen] = useState(false);

  return (
    <Layout style={{ backgroundColor: colorBgContainer, position: "relative" }}>
      <Content className=" content__content--profile-infor">
        <div className="">
          <Image
            style={{ borderRadius: 100 }}
            src={dataUser.img}
            width={150}
            height={150}
            alt="user image"
          />
        </div>

        <div className=" div__div--profile-infor">
          <div className="div__div--profile-nametag">
            <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              {dataUser.name}{" "}
              <span className="span__span--profile-tag">{dataUser.tag}</span>
            </p>
            <p style={{ color: "#8854C0" }}>{dataUser.email}</p>
          </div>
          <div className="div__div--profile-other">
            <p style={{ fontWeight: "bold" }}>
              <Icon component={SchoolSvg} /> Other
            </p>
            <p className="p__tag">University</p>
          </div>
        </div>
      </Content>
      <Sider
        className="sider__sider--profileSetting"
        style={{ backgroundColor: colorBgContainer }}
        width={"30%"}
      >
        <div className="div__div--button-wrapper">
          <Button
            icon={<Icon component={EditSvg} />}
            className="btn__btn--setting"
          >
            <Icon component={EditSvg} /> Share Profile
          </Button>
          <Button
            icon={<Icon component={EditSvg} />}
            className="btn__btn--setting" onClick={() => setOpen(true)}
          >
            Edit Profile
          </Button>
        </div>
        <div className="div__div--analytics">
          {dataCount.map((i, index) => {
            return (
              <>
                <div key={i.id} className="div__div--analytics-wrapper">
                  <p className="p__p-counter">{i.num}</p>
                  <p className="p__p-title-counter">{i.name}</p>
                </div>
              </>
            );
          })}
        </div>
      </Sider>
      <div className="div__div--menu">
        <ul className="ul__ul--menu">
          <li>Library</li>
          <li>Collections</li>
          <li>Meme sets</li>
        </ul>
      </div>
      <UserEditProfile open={open} setOpen={setOpen} />
    </Layout>
  );
};

export default UserProfile;
