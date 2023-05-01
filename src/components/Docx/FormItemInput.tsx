import { DatePicker, Form, Input, InputNumber, Select } from "antd";

import "dayjs/locale/ru";
import locale from "antd/es/date-picker/locale/ru_RU";
import { TDateRange, TFormItem } from "@/interfaces";

import styles from "./DocxContent.module.scss";
import { DefaultOptionType } from "antd/es/select";

interface Props {
  name: string;
  type: TFormItem;
  placeholder?: string;
  dateFormat?: string;
  pickerType?: TDateRange;
  selectOptions?: DefaultOptionType[];
  selectWidth?: number | string;
  selectMode?: "multiple" | "tags" | undefined;
  onChange?: (e?: any) => void;
}

const dateFormatDay = "DD.MM.YYYY";
const dateFormatMouth = "MMMM YYYY";
const dateFormatYear = "YYYY";

const FormItemInput = (props: Props) => {
  let dateFormat: string = props.dateFormat || "";

  if (!dateFormat) {
    switch (props.pickerType) {
      case "month":
        dateFormat = dateFormatMouth;
        break;
      case "year":
        dateFormat = dateFormatYear;
        break;
      default:
        dateFormat = dateFormatDay;
        break;
    }
  }

  return (
    <Form.Item name={props.name} className={styles.docxInput}>
      {props.type === "text" ? (
        <Input placeholder={props.placeholder} size="small" onChange={props.onChange} />
      ) : props.type === "number" ? (
        <InputNumber
          placeholder={props.placeholder}
          size="small"
          type="number"
          style={{ width: 50 }}
          controls={false}
          onChange={props.onChange}
        />
      ) : props.type === "date" ? (
        <DatePicker
          locale={locale}
          format={dateFormat}
          picker={props.pickerType}
          size="small"
          onChange={props.onChange}
        />
      ) : props.type === "range" ? (
        <DatePicker.RangePicker
          picker={props.pickerType}
          locale={locale}
          format={dateFormat}
          size="small"
          onChange={props.onChange}
        />
      ) : props.type === "select" ? (
        <Select
          mode={props.selectMode}
          placeholder={props.placeholder}
          size="small"
          style={{ minWidth: props.selectWidth || 200, maxWidth: "fit-content" }}
          options={props.selectOptions}
          onChange={props.onChange}
          maxTagTextLength={5}
        />
      ) : null}
    </Form.Item>
  );
};

export default FormItemInput;
