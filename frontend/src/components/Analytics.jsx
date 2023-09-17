import React from 'react'
import analysisGraph from '../assets/images/analysis-graph.png'
// import Chart from 'chart.js/auto';
const Analytics = () => {
  return (
    <div className='mw-100 px-5'>
        <img src={analysisGraph} alt="a graph" className='w-100 object-fit-cover '/>
    </div>
  )
}

export default Analytics