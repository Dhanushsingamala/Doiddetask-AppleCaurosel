import React from "react";

const AllCards = ({ allCardData, color, dropDown }) => {
  const temp = (color, name) => {
    if (color === "green") {
      const data = allCardData.find((item) => item.Program_Name === name);
      let value = (
        ((data.CY_Green_POS_Cnt - data.PY_Green_POS_Cnt) /
          data.PY_Green_POS_Cnt) *
        100
      ).toFixed(2);
      return value;
    }
    if (color === "amber") {
      const data = allCardData.find((item) => item.Program_Name === name);
      let value = (
        ((data.CY_Amber_POS_Cnt - data.PY_Amber_POS_Cnt) /
          data.PY_Amber_POS_Cnt) *
        100
      ).toFixed(2);
      return value;
    }
    if (color === "red") {
      const data = allCardData.find((item) => item.Program_Name === name);
      let value = (
        ((data.CY_Red_POS_Cnt - data.PY_Red_POS_Cnt) / data.PY_Red_POS_Cnt) *
        100
      ).toFixed(2);
      return value;
    }
  };

  return (
    <div className="threshold-card">
      <div className="card-header">
        PSW POS <span className="subtitle">by threshold level</span>
      </div>
      <div className="card-content">
        {allCardData?.map((item, idx) => (
          <div className="threshold-item" key={idx}>
            <span className={`indicator ${color}`}></span>
            <span className="threshold-label">
              {item.Program_Name} &gt; 80k
            </span>
            <span className="threshold-value">4</span>
            <span className="threshold-change positive">
              {temp(color, "APP")}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCards;
