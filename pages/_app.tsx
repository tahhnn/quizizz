import Head from "next/head";
import type { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import type { ThemeConfig } from "antd";
import { ConfigProvider } from "antd";

import "@/styles/globals.scss";

import { AdminLayout, RootLayout } from "@/components/Layout";

import { SWRProvider } from "@/providers/swr-provider";
import { GlobalProvider } from "@/context/GlobalContext";
import { AuthProvider } from "@/context/AuthContext";

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: "#1890ff",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();

  const Layout = pathname.startsWith("/admin") ? AdminLayout : RootLayout;

  return (
    <>
      <Head>
        <title>Quizizz</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <SWRProvider>
        <GlobalProvider>
          <AuthProvider>
            <ConfigProvider theme={theme}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ConfigProvider>
          </AuthProvider>
        </GlobalProvider>
      </SWRProvider>
    </>
  );
}
