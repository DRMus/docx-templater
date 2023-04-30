import React, { useContext } from "react";
import "dayjs/locale/ru";
import locale from "antd/es/date-picker/locale/ru_RU";
import { DatePicker, Form } from "antd";
import { MainContextValue } from "../Main/MainContext";

const dateFormat = "DD.MM.YYYY"

const DocxContent = () => {
  const {formRef, onSubmit} = useContext(MainContextValue)
  return (
    <div style={{ padding: 24, minHeight: 360, background: "white" }}>
      <Form onFinish={onSubmit} ref={formRef}>
        <Form.Item name="date" style={{display: "inline-block", margin: "0"}}>
          <DatePicker name="date" locale={locale} format={dateFormat}/>
        </Form.Item>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati porro nihil doloribus molestias harum non quae debitis in consectetur quod, aliquid consequatur, amet ducimus voluptates! Error deleniti ea, adipisci aliquam culpa, doloribus nisi consequatur eaque, sit ratione placeat pariatur excepturi?
      </Form>
    </div>
  );
};

export default DocxContent;
