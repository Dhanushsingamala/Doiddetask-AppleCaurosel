import React, { useEffect, useState } from "react";

const NsoCards = ({ item, dropDown }) => {
  const [cardData, setCardData] = useState({
    firstThresholdValue: 0,
    secondThresholdValue: 0,
    thirdThresholdValue: 0,
  });

  useEffect(() => {
    let itemVals = [];

    switch (dropDown) {
      case "YoY1":
        itemVals.push(item.PY_Green_POS_Cnt);
        itemVals.push(item.PY_Amber_POS_Cnt);
        itemVals.push(item.PY_Red_POS_Cnt);
        break;
      case "YoY2":
        itemVals.push(item.PPV_Green_POS_Cnt);
        itemVals.push(item.PPV_Amber_POS_Cnt);
        itemVals.push(item.PPV_Red_POS_Cnt);
        break;
      case "YoY3":
        itemVals.push(item.PPPV_Green_POS_Cnt);
        itemVals.push(item.PPPV_Amber_POS_Cnt);
        itemVals.push(item.PPPV_Red_POS_Cnt);
        break;
      default:
        return [];
    }

    let firstThresholdValue =
      ((item.CY_Green_POS_Cnt - itemVals[0]) / itemVals[0]) * 100;
    let secondThresholdValue =
      ((item.CY_Amber_POS_Cnt - itemVals[1]) / itemVals[1]) * 100;
    let thirdThresholdValue =
      ((item.CY_Red_POS_Cnt - itemVals[2]) / itemVals[2]) * 100;

    if (firstThresholdValue === Infinity) firstThresholdValue = "- ";
    if (secondThresholdValue === Infinity) secondThresholdValue = "- ";
    if (thirdThresholdValue === Infinity) thirdThresholdValue = "- ";

    setCardData({
      firstThresholdValue,
      secondThresholdValue,
      thirdThresholdValue,
    });
  }, [item, dropDown]);

  //   const finalData = () => {
  //     let itemVals = [];
  //     if (dropDown === "YoY1") {
  //       itemVals.push(item.PY_Green_POS_Cnt);
  //       itemVals.push(item.PY_Amber_POS_Cnt);
  //       itemVals.push(item.PY_Red_POS_Cnt);
  //       return itemVals;
  //     }
  //     if (dropDown === "YoY2") {
  //       itemVals.push(item.PPV_Green_POS_Cnt);
  //       itemVals.push(item.PPV_Amber_POS_Cnt);
  //       itemVals.push(item.PPV_Red_POS_Cnt);
  //       return itemVals;
  //     }
  //     if (dropDown === "YoY3") {
  //       itemVals.push(item.PPPV_Green_POS_Cnt);
  //       itemVals.push(item.PPPV_Amber_POS_Cnt);
  //       itemVals.push(item.PPPV_Red_POS_Cnt);
  //       return itemVals;
  //     }

  //     return [];
  //   };

  //   const firstThresholdValue =
  //     ((item.CY_Green_POS_Cnt - finalData()[0]) / finalData()[0]) * 100;
  //   const secondThresholdValue =
  //     ((item.CY_Amber_POS_Cnt - finalData()[1]) / finalData()[1]) * 100;
  //   const thirdThresholdValue =
  //     ((item.CY_Red_POS_Cnt - finalData()[2]) / finalData()[2]) * 100;

  return (
    <div className="card">
      <div className="card-header">
        <span>{item.LOB}</span>
        <span className="subTitle"> by business Case</span>
      </div>
      <div className="card-body">
        <div className="card-row">
          <span>NSO POS</span>
          <p>
            <span className="indicator green"></span>
            {item.CY_Green_POS_Cnt}
          </p>
          <span>{item.CY_Amber_POS_Cnt}</span>
          <span>{item.CY_Red_POS_Cnt}</span>
        </div>
        <div className="card-row card-row2">
          <span>YoY</span>
          <span className="threshold-change negative">
            {cardData.firstThresholdValue}%
          </span>
          <span className="threshold-change positive">
            {cardData.secondThresholdValue}%
          </span>
          <span className="threshold-change positive">
            {cardData.thirdThresholdValue}%
          </span>
        </div>
      </div>
    </div>
  );
};
export default NsoCards;
