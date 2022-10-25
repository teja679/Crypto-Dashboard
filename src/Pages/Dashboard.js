import React, { useEffect, useState } from 'react'
import DashboardWrapper from '../Components/DashboardPage/DashBoardWrapper/DashboardWrapper'
import Header from '../Components/HomePage/Header/Header'
import axios from 'axios'
import NorthRoundedIcon from "@mui/icons-material/NorthRounded";

const Dashboard = () => {
    const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
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
    let mybutton = document.getElementById("top-button");

    window.onscroll = function () {
      scrollFunction();
    };
  
    function scrollFunction() {
      if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }
    return (
    <div>
        <Header />
        <DashboardWrapper data={data} />
        <NorthRoundedIcon
            className="top-button"
            id="top-button"
            onClick={() => {
              topFunction();
            }}
          />
    </div>
  )
}

export default Dashboard