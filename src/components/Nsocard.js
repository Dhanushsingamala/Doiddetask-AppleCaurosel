import React from 'react'
import "./style.scss"
import Firstcard from './Firstcard'
import { nsoCardData } from './data'
import NsoCards from './NsoCards'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Nsocard = ({dropDown}) => {

  // const settings = {
  //   // className: "slider variable-width",
  //   dots: false,
  //   infinite: false,
  //   centerMode: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   variableWidth: false,
  //   // nextArrow: <h1>Here</h1>,
  //   // prevArrow: <h1>There</h1>
  // };

  return (
    <div className='parent'>
      {/* <Slider {...settings}> */}
        <Firstcard cname = {'nso'}/>
        {nsoCardData.map((item, idx)=> (
          <NsoCards dropDown = {dropDown} key={idx} item={item}/>
        ))} 
      {/* </Slider> */}
    </div>
  )
}

export default Nsocard