import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { convertNumbers } from "../Components/functions/convertNumbers";
import { getCoinData } from '../Components/functions/getCoinData'
import { getPrices } from '../Components/functions/getPrices'
import { getDaysArray } from '../Components/functions/getDaysArray'
import Loader from "../Components/mui_components/Loader/Loader";
import CoinPageDesc from "../Components/CoinPageComponents/CoinPageDesc";
import CoinPageList from "../Components/CoinPageComponents/CoinPageList";
import Header from "../Components/HomePage/Header/Header";
import SelectDays from "../Components/CoinPageComponents/SelectDays";
import LineChart from "../Components/mui_components/LineChart/LineChart";
import { getPriorDate } from "../Components/functions/getPriorDate";
import ColorToggleButton from "../Components/mui_components/Toggle/Toggle";

function CoinPage() {
  const [highPrice, setHighPrice] = useState()
  const [lowPrice, setLowPrice] = useState()
  const [searchParams] = useSearchParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [loadingChart, setLoadingChart] = useState(true);
  const [coin, setCoin] = useState({});
  const [days, setDays] = useState(30);
  const [prices, setPrices] = useState([]);
  const [type, setType] = useState("prices");
  const today = new Date();
  const priorDate = new Date(new Date().setDate(today.getDate() - days));

  useEffect(() => {
    if (searchParams) {
      getData();
    }
  }, [searchParams]);

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        borderWidth: 2,
        fill: false,
        tension: 0.25,
        backgroundColor: "#3a80e9",
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
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      y: {
        ticks:
          type == "market_caps"
            ? {
                callback: function (value) {
                  return "$" + convertNumbers(value);
                },
              }
            : type == "total_volumes"
            ? {
                callback: function (value) {
                  return convertNumbers(value);
                },
              }
            : {
                callback: function (value, index, ticks) {
                  return "$" + value.toLocaleString();
                },
              },
      },
    },
  };

  const getData = async () => {
    const response_data = await getCoinData(searchParams, true);
    setData(response_data);
    const prices_data = await getPrices(response_data.id, days, type);
    setPrices(prices_data);
    var dates = getDaysArray(priorDate, today);

    setChartData({
      labels: dates,
      datasets: [
        {
          data: prices_data?.map((data) => data[1]),
          borderWidth: 2,
          fill: false,
          tension: 0.25,
          backgroundColor: "#3480e9",
          borderColor: "#3a80e9",
          pointRadius: 0,
        },
      ],
    });
    setLoadingChart(false);
    setLoading(false);
    setHighPrice(response_data.market_data.high_24h.usd)
    setLowPrice(response_data.market_data.low_24h.usd)
    // console.log(highPrice)
    console.log(response_data.market_data.high_24h.usd)
    console.log(response_data.market_data.low_24h.usd)
    // console.log(coin.name)

    setCoin({
      id: response_data.id,
      name: response_data.name,
      symbol: response_data.symbol,
      image: response_data.image.large,
      price_change_percentage_24h:
        response_data.market_data.price_change_percentage_24h,
      total_volume: response_data.market_data.total_volume.usd,
      current_price: response_data.market_data.current_price.usd,
      market_cap: response_data.market_data.market_cap.usd,
    });
    console.log(response_data)
  };
  

  const handleChange = async (event) => {
    setDays(event.target.value);
    const prices_data = await getPrices(data.id, event.target.value, type);
    setPrices(prices_data);
    const priorDate = getPriorDate(event.target.value);
    var dates = getDaysArray(priorDate, today);
    setChartData({
      labels: dates,
      datasets: [
        {
          data: prices_data?.map((data) => data[1]),
        },
      ],
    });
  };

  return (
    <>
      {loading && loadingChart ? (
        <Loader />
      ) : (
         <>
           <Header />
           <CoinPageList coin={coin} delay={2} />
           <div className="coin-page-div">
            <div className="data-div">
              <p style={{ margin: 0 }}>
                Price Change in the last
                <SelectDays days={days} handleChange={handleChange} />
              </p>
              <div className="data">
                <p>24h High: <span>{highPrice.toFixed(2)}</span> </p> 
                <p> 24h Low : <span>{lowPrice.toFixed(2)}</span></p>
              </div>
            </div>
             <div className="toggle-flex">
               <ColorToggleButton
                 type={type}
                 setType={setType}
                 days={days}
                 chartData={chartData}
                 setChartData={setChartData}
                 id={data.id}
               />
             </div>
             <LineChart chartData={chartData} options={options} />
           </div>
           <CoinPageDesc name={data.name} desc={data.description.en} />
         </>
       )}
     </>
  );
}

export default CoinPage;
