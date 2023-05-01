export type TFormItem = "date" | "text" | "range" | "number" | "select"
export type TDateRange = "year" | "quarter" | "month"
import { DefaultOptionType } from "antd/es/select";


export interface IStudentsByGroup {
  [group: string]: DefaultOptionType[];
}

export interface ISheetData {
  curators: Set<string>;
  groups: Set<string>;
  studentsByGroup: IStudentsByGroup
}

export interface IContentData {
  curators: DefaultOptionType[];
  groups: DefaultOptionType[];
  studentsByGroup: IStudentsByGroup
}