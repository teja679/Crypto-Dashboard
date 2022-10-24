import React, { useEffect, useState } from 'react'
import DashboardWrapper from '../Components/DashboardPage/DashBoardWrapper/DashboardWrapper'
import Header from '../Components/HomePage/Header/Header'
import axios from 'axios'
import { API_URL } from '../Constants'

const Dashboard = () => {
  
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