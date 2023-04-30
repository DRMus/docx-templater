import generateDocument from "@/utils/documentGenerator";
import getItemAntD, { MenuItem } from "@/utils/getItemAntD";
import { SaveOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useContext } from "react";
import { MainContextValue } from "./MainContext";

const SiderContent = () => {
  const {submitByRef} = useContext(MainContextValue)

  const items: MenuItem[] = [
    getItemAntD(
      "Сохранить",
      "1",
      submitByRef,
      <SaveOutlined />
    ),
  ];
  return (
    <>
      <div className="logo" />
      <Menu theme="dark" mode="inline" selectable={false} items={items} />
    </>
  );
};

export default SiderContent;
