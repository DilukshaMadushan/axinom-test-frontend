import { useEffect, useState } from "react";
import "./index.css";

const ZipContent = ({ data, index, key }) => {
  const [fileName, setFileName] = useState("default");

  useEffect(() => {
    if (data.name) {
      const pathArr = data.name.split("/");
      setFileName(pathArr[pathArr.length - 1]);
    }
  }, [data]);

  return (
    <div className="zipContent" key={key}>
      <div className="zipContentTopRow">
        <h2>{data.name}</h2>
        <a href={"data:file/file;base64," + data.data} download={fileName}>
          Download
        </a>
      </div>

      <h3>base64 Encoded file: {data.data}</h3>
    </div>
  );
};

export default ZipContent;
