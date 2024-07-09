import React from 'react'
import "./style.scss"
import { bento } from "./data";

const Firstcard = ({ cname, dropDown }) => {

  const data = bento[0];

  function calculateValues(dropDown) {
    const data = bento[0];

    let nsoDenominator, lflDenominator, allDenominator;

    switch (dropDown) {
      case 'YOY1':
        nsoDenominator = data.PY_NSO_POS_Cnt;
        lflDenominator = data.PY_LFL_POS_Cnt;
        allDenominator = data.PY_ALL_POS_Cnt;
        break;
      case 'YOY2':
        nsoDenominator = data.PPY_NSO_POS_Cnt;
        lflDenominator = data.PPY_LFL_POS_Cnt;
        allDenominator = data.PPY_ALL_POS_Cnt;
        break;
      case 'YOY3':
        nsoDenominator = data.PPPY_NSO_POS_Cnt;
        lflDenominator = data.PPPY_LFL_POS_Cnt;
        allDenominator = data.PPPY_ALL_POS_Cnt;
        break;
      default:
        return [0, 0, 0];
    }
    const nsoValue = ((data.CY_NSO_POS_Cnt - nsoDenominator) / nsoDenominator) * 100;
    const lflValue = ((data.CY_LFL_POS_Cnt - lflDenominator) / lflDenominator) * 100;
    const allValue = ((data.CY_All_POS_Cnt - allDenominator) / allDenominator) * 100;

    console.log(nsoValue , "@@@@@@@@")

    return [nsoValue, lflValue, allValue];
  }


  // const calculatedValues = calculateValues(dropDown);

  return (
    <>
      <div className={`metrics-card ${cname}`}>
        <div className="metric">
          <div className="metric-title">LFL</div>
          <div className="metric-value">{data.CY_LFL_POS_Cnt}</div>
          <div className="metric-change">{calculateValues(dropDown)[1]}</div>
        </div>
        <div className="metric">
          <div className="metric-title">NSO</div>
          <div className="metric-value">{data.CY_NSO_POS_Cnt}</div>
          <div className="metric-change">{calculateValues(dropDown)[0]}</div>
        </div>
        <div className="metric">
          <div className="metric-title">All</div>
          <div className="metric-value">{data.CY_All_POS_Cnt}</div>
          <div className="metric-change">{calculateValues(dropDown)[2]}</div>
        </div>
      </div>
    </>
  )
}

export default Firstcard