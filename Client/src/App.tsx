import loadFile from "./utils/loadFile";
import "./App.css";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import { saveAs } from "file-saver";

function App() {
  const loadCallback = (err: Error, data: string) => {
    if (err) {
      throw err;
    }
    var zip = new PizZip(data);
    var doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });
    doc.setData({
      fio_cur: "John",
      group_name: "Doe",
      date_format_MY: new Date(),
      date_format_Y: "New Website",
    });
    try {
      // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
      doc.render();
    } catch (e) {
      throw e;
    }
    var out = doc.getZip().generate({
      type: "blob",
      mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    }); //Output the document using Data-URI
    saveAs(out, "output.docx");
  };

  const generateFile = () => {
    loadFile("./template.docx", loadCallback);
  };

  return (
    <div className="App">
      <button className="px-3 py-1 border-2 border-zinc-700 rounded-md" onClick={generateFile}>
        Создать документ
      </button>
    </div>
  );
}

export default App;
