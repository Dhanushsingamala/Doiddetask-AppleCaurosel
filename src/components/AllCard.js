import React from 'react'
import "./style.scss"
import Firstcard from './Firstcard'
import AllCards from './AllCards'
import { allCardData } from './data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";


const AllCard = ({ dropDown }) => {

  const settings = {
    // className: "slider variable-width",
    dots: false,
    infinite: false,
    centerMode: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: false,
    prevArrow: <h1>⬅️</h1>,
    nextArrow: <h1>➡️</h1>,
  };

  return (
    <div className='parent'>
       <Slider {...settings}>
      <Firstcard cname = {'all'} />
      <AllCards dropDown = {dropDown} color = {'green'} allCardData = {allCardData}/>
      <AllCards dropDown = {dropDown} color = {'amber'} allCardData = {allCardData}/>
      <AllCards dropDown = {dropDown} color = {'red'} allCardData = {allCardData}/>
      </Slider>
    </div>
  )
}

export default AllCard