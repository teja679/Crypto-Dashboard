import React, { useEffect, useState } from 'react'
import { API_URL } from '../Constants'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'

const CoinPage = () => {
    const [searchParams] = useSearchParams();
    const [data, setData] = useState([])


    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
          {
            data: [],
            borderWidth: 2,
            fill: false,
            tension: 0.25,
            backgroundColor: "transparent",
            borderColor: "#3a80e9",
            pointRadius: 0,
          },
        ],
      });
    
      const options = {
        plugins: {
          legend: {
            display: false,
          },
        },
      }


    useEffect(() => {
        if(searchParams){
            getData();
        
    },[searchParams])

    const getData = () => {
        axios.get(API_URL, {crossDomain: true}).then((res) => {
            if(res.data){
                // console.log(res.data)
                setData(res.data)
            } else{
                console.log('error')
            }
        })
    }
  return (
    <div>CoinPage</div>
  )
}

export default CoinPage