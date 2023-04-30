import generateDocument from "@/utils/documentGenerator";
import { FormInstance } from "antd";
import { ReactNode, RefObject, createContext, useRef } from "react";
import { read, utils, writeFile } from 'xlsx';

interface ContextProps {
  formRef: RefObject<FormInstance<any>>;
  submitByRef: () => void;
  onSubmit: (e: any) => void;
  uploadExcel: () => void;
}

interface Props {
  children: ReactNode;
}

export const MainContextValue = createContext<ContextProps>({
  formRef: { current: null },
  submitByRef: () => {},
  onSubmit: () => {},
  uploadExcel: () => {},
});

const MainContextProvider = ({ children }: Props) => {
  const formRef = useRef<FormInstance<any>>(null);

  const fileFormRef = useRef<HTMLFormElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const submitByRef = () => {
    formRef.current?.submit();
  };

  const onSubmit = (e: any) => {
    console.log(e);
    generateDocument({
      fio_cur: "John",
      group_name: "Doe",
      date_format_MY: "0652455478",
      date_format_Y: "New Website",
    });
  };

  const uploadExcel = () => {
    if (!fileRef.current) {
      return;
    }
    fileRef.current.click();
  };

  const fileOnChange = async (e: any) => {
    const file = e.target.files[0] as File;
    const arrayBuf = await file.arrayBuffer();
    const wb = read(arrayBuf);
    console.log(wb);
  };

  return (
    <MainContextValue.Provider
      value={{
        formRef,
        submitByRef,
        onSubmit,
        uploadExcel,
      }}
    >
      <input
        type="file"
        name="excel"
        id="file"
        accept=".xlsx,.xls"
        hidden
        ref={fileRef}
        onChange={fileOnChange}
      />

      {children}
    </MainContextValue.Provider>
  );
};

export default MainContextProvider;
