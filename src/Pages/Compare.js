import axios from "axios";
import React, { useEffect, useState } from "react";
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
import { SelectCoins } from "../Components/ComparePage/SelectCoins/SelectCoins";
import { ListFlex } from "../Components/ComparePage/ListFlex/ListFlex";
import { CompareGraph } from "../Components/ComparePage/CompareGraph/CompareGraph";

function Compare() {
    const [crypto1, setCrypto1] = useState('bitcoin')
    const [crypto2, setCrypto2] = useState('bitcoin')
    const [days, setDays] = useState(30);
    const [type, setType] = useState("prices");
    const [crypto1Desc, setCrypto1Desc] = useState("")
    const [crypto2Desc, setCrypto2Desc] = useState("")

    return (
        <>
            <Header />
            <SelectCoins 
                crypto1={crypto1} crypto2={crypto2}
                setCrypto1={setCrypto1} setCrypto2={setCrypto2}
                days={days} setDays={setDays}
            />
            <ListFlex 
                crypto1={crypto1} crypto2={crypto2}
                setCrypto1Desc={setCrypto1Desc}
                setCrypto2Desc={setCrypto2Desc}
            />
            <CompareGraph 
                crypto1={crypto1} crypto2={crypto2}
                days={days} type={type} setType={setType}
            />
            <CoinPageDesc name={crypto1} desc={crypto1Desc} />
            <CoinPageDesc name={crypto1} desc={crypto2Desc} />
        </>
    )
}

export default Compare;
