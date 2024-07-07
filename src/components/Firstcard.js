import React from 'react'
import "./style.scss"

const Firstcard = ({cname}) => {
  return (
    <>
      <div className={`metrics-card ${cname}`}>
      <div className="metric">
        <div className="metric-title">LFL</div>
        <div className="metric-value">426</div>
        <div className="metric-change">+11.8%</div>
      </div>
      <div className="metric">
        <div className="metric-title">NSO</div>
        <div className="metric-value">127</div>
        <div className="metric-change">+135.2%</div>
      </div>
      <div className="metric">
        <div className="metric-title">All</div>
        <div className="metric-value">553</div>
        <div className="metric-change">+27.1%</div>
      </div>
    </div>
    </>
  )
}

export default Firstcard