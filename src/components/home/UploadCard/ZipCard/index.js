import { useState } from "react";
import "./index.css";
import ZipContent from "./ZipContent";

const ZipCard = ({ data, index, key }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div key={key}>
      <div className="zipCard" onClick={() => setIsSelected(!isSelected)}>
        <h2>
          {index + 1}. {data.folderName} (Zip File)
        </h2>
        <h3>{JSON.stringify(data.content).slice(0, 150)}...</h3>
      </div>

      {isSelected && (
        <div>
          {data.content &&
            data.content.map((item, i) => {
              return <ZipContent data={item} index={index} key={String(i)} />;
            })}
        </div>
      )}
    </div>
  );
};

export default ZipCard;
