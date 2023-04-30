import { DatePicker, Form, Input, InputNumber } from "antd";

import "dayjs/locale/ru";
import locale from "antd/es/date-picker/locale/ru_RU";
import { TDateRange, TFormItem } from "@/interfaces";

import styles from "./DocxContent.module.scss";

interface Props {
  name: string;
  type: TFormItem;
  placeholder?: string;
  dateFormat?: string;
  pickerType?: TDateRange;
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
        <Input placeholder={props.placeholder} size="small" />
      ) : props.type === "number" ? (
        <InputNumber  placeholder={props.placeholder} size="small" style={{width: 50}} controls={false}/>
      ) : props.type === "date" ? (
        <DatePicker locale={locale} format={dateFormat} picker={props.pickerType} size="small" />
      ) : props.type === "range" ? (
        <DatePicker.RangePicker
          picker={props.pickerType}
          locale={locale}
          format={dateFormat}
          size="small"
        />
      ) : null}
    </Form.Item>
  );
};

export default FormItemInput;
