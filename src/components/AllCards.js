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
        <div className="threshold-item">
          <span className="indicator green"></span>
          <span className="threshold-label">APP &gt; 80k</span>
          <span className="threshold-value">4</span>
          <span className="threshold-change positive">
            {temp(color, "APP")}%
          </span>
        </div>
        <div className="threshold-item">
          <span className="indicator red"></span>
          <span className="threshold-label">APR &gt; 50K</span>
          <span className="threshold-value">116</span>
          <span className="threshold-change negative">
            {temp(color, "APR")}%
          </span>
        </div>
        <div className="threshold-item">
          <span className="indicator green"></span>
          <span className="threshold-label">Mono AAR &gt; 38K</span>
          <span className="threshold-value">183</span>
          <span className="threshold-change positive">
            {temp(color, "Mono AAR")}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default AllCards;
