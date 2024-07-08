import React from "react";
import { round } from "lodash";

const AllCards = ({ allCardData, color, dropDown }) => {
  const temp = (color, data) => {
    if (color === "Green") {
      let value = (
        ((data.CY_Green_POS_Cnt - data.PY_Green_POS_Cnt) /
          data.PY_Green_POS_Cnt) *
        100
      ).toFixed(2);
      return `${round(value, 2)} %`;
    }
    if (color === "Amber") {
      let value = (
        ((data.CY_Amber_POS_Cnt - data.PY_Amber_POS_Cnt) /
          data.PY_Amber_POS_Cnt) *
        100
      ).toFixed(2);
      if (value === "NaN" || value === Infinity) return "-";
      return `${round(value, 2)} %`;
    }
    if (color === "Red") {
      let value = (
        ((data.CY_Red_POS_Cnt - data.PY_Red_POS_Cnt) / data.PY_Red_POS_Cnt) *
        100
      ).toFixed(2);
      if (value === "NaN" || value === Infinity) return "-";
      return `${round(value, 2)} %`;
    }
  };

  const getLabel = (name, high, low) => {
    switch (color) {
      case "Green":
        return `${name} > ${high / 1000}K`;
      case "Amber":
        return `${name} = ${high / 1000}K - ${low / 1000}K `;
      case "Red":
        return `${name} < ${low / 1000}K`;
      default:
        return "";
    }
  };

  const getThresholdValue = (item) => {
    switch (color) {
      case "Green":
        return `${item.CY_Green_POS_Cnt}`;
      case "Amber":
        return `${item.CY_Amber_POS_Cnt}`;
      case "Red":
        return `${item.CY_Red_POS_Cnt}`;
      default:
        return "";
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
              {getLabel(
                item.Program_Name,
                item.Best_Threshold_PSW,
                item.Better_Threshold_PSW
              )}
              {/* {item.Program_Name} &gt; 80k */}
            </span>
            <span className="threshold-value">{getThresholdValue(item)}</span>
            <span className="threshold-change positive">
              {temp(color, item)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCards;
