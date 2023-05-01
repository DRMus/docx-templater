import generateDocument from "@/utils/documentGenerator";
import getItemAntD, { MenuItem } from "@/utils/getItemAntD";
import { FileAddOutlined, SaveOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useContext, useMemo } from "react";
import { MainContextValue } from "./MainContext";

const SiderContent = () => {
  const { submitByRef, uploadExcel } = useContext(MainContextValue);

  const items: MenuItem[] = useMemo(
    () => [
      getItemAntD("Добавить excel файл", "1", uploadExcel, <FileAddOutlined />),
      getItemAntD("Сохранить", "2", submitByRef, <SaveOutlined />),
    ],
    []
  );
  return (
    <>
      <div className="logo" />
      <Menu theme="dark" mode="inline" selectable={false} items={items} />
    </>
  );
};

export default SiderContent;
