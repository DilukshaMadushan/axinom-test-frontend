import { useState } from "react";
import "./index.css";
import ZipCard from "./ZipCard";

const UploadCard = ({ data, index, key }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div key={key}>
      <div
        className="uploadCardContainer"
        onClick={() => setIsSelected(!isSelected)}
      >
        <h2>
          {index + 1}. {data.uploadOwner}
        </h2>
        <h3>{JSON.stringify(data.zipFiles).slice(0, 200)}...</h3>
      </div>

      {isSelected && (
        <div>
          {data.zipFiles &&
            data.zipFiles.map((item, i) => {
              return <ZipCard data={item} index={i} key={String(i)} />;
            })}
        </div>
      )}
    </div>
  );
};

export default UploadCard;
