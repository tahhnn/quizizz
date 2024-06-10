import { Layout, theme } from "antd";
import React, { useEffect } from "react";
import UserProfile from "../../../components/Profile/UserProfile";
import UserCollection from "../../../components/Profile/UserCollection";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";

type Props = {};

const Profile = (props: Props) => {
  const { user, loading } = useAuth();
  const router = useRouter();
  console.log(user);

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/login");
      }
    }
  }, [user, router]);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      <Layout
        style={{
          padding: 24,
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
          marginBottom: 24,
          minWidth: "100%",
        }}
      >
        <UserProfile />
      </Layout>{" "}
      <Layout
        style={{
          minHeight: 360,

          marginBottom: 24,
        }}
      >
        <UserCollection />
      </Layout>{" "}
    </>
  );
};

export default Profile;
