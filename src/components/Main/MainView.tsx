import generateDocument from "@/utils/documentGenerator";
import getItemAntD, { MenuItem } from "@/utils/getItemAntD";
import { SaveOutlined } from "@ant-design/icons";
import { FormInstance, Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Header, Content, Footer } from "antd/es/layout/layout";
import { useRef, useState } from "react";
import DocxContent from "../Docx/DocxContent";

import styles from "./Main.module.scss";
import SiderContent from "./SiderContent";
import MainContextProvider from "./MainContext";

const MainView = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [isSiderBreakpoint, setIsSiderBreakpoint] = useState(false);

  return (
    <MainContextProvider>
      <Layout style={{ height: "100%" }} hasSider>
        <Sider
          collapsible
          collapsed={collapsed}
          width={220}
          breakpoint="lg"
          collapsedWidth={"0"}
          onBreakpoint={(broken) => {
            setIsSiderBreakpoint(broken);
          }}
          onCollapse={(value, type) => {
            if (type !== "responsive") {
              setCollapsed(value);
            }
          }}
          style={{
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: 100,
          }}
        >
          <SiderContent />
        </Sider>
        <Layout style={{ position: "relative", overflow: "auto", height: "100%" }}>
          <Header style={{ padding: 0, background: "white" }} />
          <Content style={{ margin: "24px 16px 0", height: "fit-content" }}>
            <DocxContent />
            <Footer style={{ textAlign: "center", opacity: 0.5 }}>
              ULSTU ©2023 Created by Bondarenko D.D. & Muslimov D.R.
            </Footer>
          </Content>

          {!collapsed && <div className={styles.darkBlock} onClick={() => setCollapsed(true)} />}
        </Layout>
      </Layout>
    </MainContextProvider>
  );
};

export default MainView;
