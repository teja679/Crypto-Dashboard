import React from 'react'
import {Bar, Line} from 'react-chartjs-2'
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = ({ chartData, options }) => {
  return (
    <div>
         <Line data={chartData} options={options} />
    </div>
  )
}

export default LineChart