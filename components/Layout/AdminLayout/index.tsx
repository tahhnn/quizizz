import { ReactNode, Suspense } from "react";

import { Layout, theme } from "antd";
import Loader from "@/components/Loader";

const { Header, Content, Footer } = Layout;

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <h1 style={{ fontSize: 32, marginLeft: 20 }}>
            <strong>Quizizz</strong>{" "}
            <span style={{ fontStyle: "italic" }}>Community</span>
          </h1>
        </Header>
        <Content style={{ margin: "1rem 8rem" }}>
          <div>
            <Suspense fallback={<Loader />}>{children}</Suspense>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          &copy; {new Date().getFullYear()} by Quizizz. All right reserved.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
