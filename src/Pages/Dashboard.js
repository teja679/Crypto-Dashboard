import React, { useEffect, useState } from 'react'
import DashboardWrapper from '../Components/DashboardPage/DashBoardWrapper/DashboardWrapper'
import Header from '../Components/HomePage/Header/Header'
import axios from 'axios'
const Dashboard = () => {
    const API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(API_URL, {crossDomain: true}).then((res) => {
            if(res.data){
                // console.log(res.data)
                setData(res.data)
            } else{
                console.log('error')
            }
        })

    },[])
    return (
    <div>
        <Header />
        <DashboardWrapper data={data} />
    </div>
  )
}

export default Dashboard