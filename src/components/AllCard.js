import React from "react";
import "./style.scss";
import Firstcard from "./Firstcard";
import AllCards from "./AllCards";
import { allCardData } from "./data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const AllCard = ({ dropDown }) => {
  const settings = {
    // className: "slider variable-width",
    dots: false,
    infinite: false,
    centerMode: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: false,
    prevArrow: <h1>⬅️</h1>,
    nextArrow: <h1>➡️</h1>,
  };

  function transformDataByColor(data) {
    const colors = ["Green", "Amber", "Red"];
    const periods = ["CY", "PY", "PQ", "PPV", "PPPV"];

    return colors.map((color) => {
      const colorData = { color: color, programs: [] };

      data.forEach((program) => {
        const programData = {
          Program_Name: program.Program_Name,
          Best_Threshold_PSW: program.Best_Threshold_PSW,
          Better_Threshold_PSW: program.Better_Threshold_PSW,
        };

        periods.forEach((period) => {
          programData[`${period}_${color}_POS_Cnt`] =
            program[`${period}_${color}_POS_Cnt`];
        });

        colorData.programs.push(programData);
      });

      return colorData;
    });
  }

  const transformedData = transformDataByColor(allCardData);
  // console.log(JSON.stringify(transformedData, null, 2));

  return (
    <div className="parent">
      <Slider {...settings}>
        <Firstcard dropDown = {dropDown} cname={"all"} />
        {transformedData.map((item, idx) => (
          <AllCards
            dropDown={dropDown}
            color={item.color}
            allCardData={item.programs}
          />
        ))}
      </Slider>
    </div>
  );
};

export default AllCard;
