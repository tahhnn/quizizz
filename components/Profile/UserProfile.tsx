import { EditSvg, SchoolSvg } from "@/constants/svg-img";
import { Button, Layout, Skeleton, theme, Typography } from "antd";
import Icon from "@ant-design/icons";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import UserEditProfile from "./UserEditProfile";
import { set } from "react-hook-form";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/utils/supabaseClient";
import { pathMenu } from "@/constants/pathmenu";
const { Sider, Content } = Layout;
const { Text, Link } = Typography;

type Props = {};

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
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState(0);
  const { user } = useAuth();

  const handleUpdateAvatar = async (e) => {
    try {
      const file = e.target.files[0];
      const file_path = `${user?.user_metadata.provider_id}/${file.name}`;

      const { error, data } = await supabase.storage
        .from("avatars")
        .upload(file_path, file);
      if (error) {
        throw error;
      }
      const { data: publicURL } = supabase.storage
        .from("avatars")
        .getPublicUrl(file_path);

      const { data: updateData, error: updateError } = await supabase
        .from("users")
        .update({ avatar: publicURL.publicUrl })
        .eq("googleId", userData.googleId);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSetUserData = async () => {
    try {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("googleId", user?.user_metadata.provider_id)
        .single();

      if (error) {
        console.error("Error fetching user data:", error);
        return;
      }

      setUserData(data);
    } catch (error) {
      console.error("Error in handleSetUserData:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await handleSetUserData();
    };

    fetchData();
  }, [user]);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [userData]);

  return (
    <Layout style={{ backgroundColor: colorBgContainer, position: "relative" }}>
      {loading ? (
        <Skeleton />
      ) : (
        <>
          <Content className=" content__content--profile-infor">
            <div className="div__div--img-profile relative">
              <img
                className="img__img--profile-infor"
                style={{ borderRadius: 100 }}
                src={userData?.avatar}
                width={150}
                height={150}
                alt="user image"
              />
              <input
                className="absolute top-0 w-[100%] h-[100%] opacity-0 cursor-pointer"
                type="file"
                title="Change your avatar"
                onChange={(e) => {
                  handleUpdateAvatar(e);
                }}
              />
              <div className="div__div--btn-edit">
                <Button
                  className="btn__btn--setting font-bold"
                  onClick={() => setOpen(true)}
                >
                  <Icon component={EditSvg} /> Edit Profile
                </Button>
              </div>
            </div>

            <div className=" div__div--profile-infor">
              <div className="div__div--profile-nametag">
                <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  {userData?.name}{" "}
                  <span className="span__span--profile-tag uppercase">
                    {userData?.email ? "Verified" : "Unverified"}
                  </span>
                </p>
                <p style={{ color: "#8854C0" }}>{userData?.email}</p>
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
                className="btn__btn--setting"
                onClick={() => setOpen(true)}
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
        </>
      )}

      <div className="div__div--menu">
        <ul className="ul__ul--menu ">
          {pathMenu.map((item) => {
            return (
              <li
                className={`li__li-tabmenu ${
                  tab === item.id && "li__li--active"
                }`}
                onClick={() => setTab(item.id)}
                key={item.id}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
      <UserEditProfile userData={userData} open={open} setOpen={setOpen} />
    </Layout>
  );
};

export default UserProfile;
