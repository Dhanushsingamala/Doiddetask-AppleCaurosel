import React from 'react'
import "./style.scss"
import Firstcard from './Firstcard'
import AllCards from './AllCards'
import { allCardData } from './data'

const AllCard = ({ dropDown }) => {
  return (
    <div className='parent'>
      <Firstcard cname = {'all'} />
      <AllCards dropDown = {dropDown} color = {'green'} allCardData = {allCardData}/>
      <AllCards dropDown = {dropDown} color = {'amber'} allCardData = {allCardData}/>
      <AllCards dropDown = {dropDown} color = {'red'} allCardData = {allCardData}/>
    </div>
  )
}

export default AllCard