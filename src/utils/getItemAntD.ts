import { MenuProps } from "antd";

export type MenuItem = Required<MenuProps>["items"][number];

export default function getItemAntD(
  label: React.ReactNode,
  key: React.Key,
  onClick: () => void,
  icon: React.ReactNode,
  title?: string,
): MenuItem {
  return {
    key,
    icon,
    label,
    title,
    onClick
  } as MenuItem;
}
