import React from 'react'


const NsoCards = ({item, dropDown}) => {
    const [finalData, setFinalData] = useState({})


    const finalData = () => {
        let itemVals = [];
        if (dropDown === 'YoY1'){
             itemVals.push(item.PY_Green_POS_Cnt)
             itemVals.push(item.PY_Amber_POS_Cnt)
             itemVals.push(item.PY_Red_POS_Cnt)
             return itemVals;
        }
        if (dropDown === 'YoY2'){
            itemVals.push(item.PPV_Green_POS_Cnt)
            itemVals.push(item.PPV_Amber_POS_Cnt)
            itemVals.push(item.PPV_Red_POS_Cnt)
            return itemVals;
        }
        if (dropDown === 'YoY3'){
            itemVals.push(item.PPPV_Green_POS_Cnt)
             itemVals.push(item.PPPV_Amber_POS_Cnt)
             itemVals.push(item.PPPV_Red_POS_Cnt)
             return itemVals;
        }
    }

    const firstThresholdValue = ((item.CY_Green_POS_Cnt - finalData()[0])/finalData()[0])*100;
    const secondThresholdValue =((item.CY_Amber_POS_Cnt - finalData()[1])/finalData()[1])*100;
    const thirdThresholdValue = ((item.CY_Red_POS_Cnt - finalData()[2])/finalData()[2])*100;

    return (
        <div className="card">
            <div className="card-header">
                <span>{item.LOB}</span><span className='subTitle'> by business Case</span>
            </div>
            <div className="card-body">
                <div className="card-row">
                    <span>NSO POS</span>
                    <p><span className='indicator green'></span>{item.CY_Green_POS_Cnt}</p>
                    <span>{item.CY_Amber_POS_Cnt}</span>
                    <span>{item.CY_Red_POS_Cnt}</span>
                </div>
                <div className="card-row card-row2">
                    <span>YoY</span>
                    <span className='threshold-change negative'>{firstThresholdValue}%</span>
                    <span className='threshold-change positive'>{secondThresholdValue}%</span>
                    <span className='threshold-change positive'>{thirdThresholdValue}%</span>
                </div>
            </div>
        </div>

    )
}
export default NsoCards