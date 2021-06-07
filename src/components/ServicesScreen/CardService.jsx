import React from "react";

export const CardService = ({ serviceTitle, pictureValue, contentValue }) => {
  return (
    <div className="CardDiv">
      <div className="CardHeader">
        <h3 className="CardTitle">{serviceTitle}</h3>
      </div>
      <div className="">
        <img src={pictureValue} alt={serviceTitle} className="ImgService" />
      </div>
    </div>
  );
};
