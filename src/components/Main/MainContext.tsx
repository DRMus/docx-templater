import generateDocument from "@/utils/documentGenerator";
import { FormInstance } from "antd";
import React, { createContext, useRef } from "react";

interface ContextProps {
  formRef: React.RefObject<FormInstance<any>>;
  submitByRef: () => void,
  onSubmit: (e: any) => void
}

interface Props {
  children: React.ReactNode
}

export const MainContextValue = createContext<ContextProps>({
  formRef: { current: null },
  submitByRef: () => {},
  onSubmit: () => {}
});

const MainContextProvider = ({children}: Props) => {
  const formRef = useRef<FormInstance<any>>(null);

  const submitByRef = () => {
    formRef.current?.submit()
  }

  const onSubmit = (e: any) => {
    console.log(e);
    generateDocument({
      fio_cur: "John",
      group_name: "Doe",
      date_format_MY: "0652455478",
      date_format_Y: "New Website",
    });
  }
  return (
    <MainContextValue.Provider
      value={{
        formRef,
        submitByRef,
        onSubmit
      }}
    >
      {children}
    </MainContextValue.Provider>
  );
};

export default MainContextProvider;
