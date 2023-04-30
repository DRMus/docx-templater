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
      <Layout style={{ height: "100%" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          width={150}
          breakpoint="lg"
          collapsedWidth={isSiderBreakpoint ? "0" : "60px"}
          onBreakpoint={(broken) => {
            setIsSiderBreakpoint(broken);
          }}
          onCollapse={(value, type) => {
            if (type !== "responsive") {
              setCollapsed(value);
            }
          }}
        >
          <SiderContent />
        </Sider>
        <Layout style={{ position: "relative" }}>
          <Header style={{ padding: 0, background: "white" }} />
          <Content style={{ margin: "24px 16px 0" }}>
            <DocxContent />
          </Content>
          <Footer style={{ textAlign: "center", opacity: 0.5 }}>
            ULSTU ©2023 Created by Bondarenko D.D. & Muslimov D.R.
          </Footer>
          {!collapsed && <div className={styles.darkBlock} />}
        </Layout>
      </Layout>
    </MainContextProvider>
  );
};

export default MainView;
