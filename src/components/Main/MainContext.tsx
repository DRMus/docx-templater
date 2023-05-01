import { ISheetData } from "@/interfaces";
import generateDocument from "@/utils/documentGenerator";
import { FormInstance } from "antd";
import { ReactNode, RefObject, createContext, useRef, useState } from "react";
import { read, utils, writeFile } from 'xlsx';

interface ContextProps {
  formRef: RefObject<FormInstance<any>>;
  sheetData: ISheetData | undefined;
  submitByRef: () => void;
  onSubmit: (e: any) => void;
  uploadExcel: () => void;
}

interface Props {
  children: ReactNode;
}

type TSheetToJson = {[key: string]: string}

export const MainContextValue = createContext<ContextProps>({
  formRef: { current: null },
  sheetData: undefined,
  submitByRef: () => {},
  onSubmit: () => {},
  uploadExcel: () => {},
});

const MainContextProvider = ({ children }: Props) => {

  const [sheetData, setSheetData] = useState<ISheetData>()

  const formRef = useRef<FormInstance<any>>(null);
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
    const data = utils.sheet_to_json<TSheetToJson>(wb.Sheets[wb.SheetNames[0]]);

    let dataFormat: ISheetData = {
      curators: new Set<string>(),
      groups: new Set<string>(),
      studentsByGroup: {},
    }
    
    data.forEach((item) => {
      Object.keys(item).forEach((key) => {
        if (key === "Кураторы") {
          dataFormat.curators.add(item[key]);
          return;
        }
        dataFormat.groups.add(key);
      })
    })

    dataFormat.groups.forEach((group) => {
      data.forEach((item) => {
        if (!dataFormat.studentsByGroup[group]) {
          dataFormat.studentsByGroup[group] = [];
        }
        item[group] && dataFormat.studentsByGroup[group].push({value: item[group], label: item[group]})
      })
    })

    setSheetData(dataFormat);
  };

  return (
    <MainContextValue.Provider
      value={{
        formRef,
        sheetData,
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
