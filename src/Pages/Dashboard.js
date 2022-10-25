import React, { useEffect, useState } from 'react'
import DashboardWrapper from '../Components/DashboardPage/DashBoardWrapper/DashboardWrapper'
import Header from '../Components/HomePage/Header/Header'
import axios from 'axios'
import NorthRoundedIcon from "@mui/icons-material/NorthRounded";
import Search from '../Components/DashboardPage/Search';
import Loader from '../Components/mui_components/Loader/Loader';
import PaginationComponent from '../Components/mui_components/PaginationComponent';

const Dashboard = () => {
    const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState("")
    const [filteredCoins, setFilteredCoins] = useState([]);

    useEffect(() => {
        if (search) {
            setFilteredCoins(
                data?.filter(
                    (coin) =>
                        coin.name.toLowerCase().includes(search.toLowerCase()) ||
                        coin.symbol.toLowerCase().includes(search.toLowerCase())
                )
            );
        } else {
            // setFilteredCoins(data.slice((page - 1) * 10, (page - 1) * 10 + 10));
        }
    }, [search]);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };
    const handlePageChange = (e, value) => {
        setPage(value);
        console.log("valueee", value);
        setFilteredCoins(data.slice((value - 1) * 12, (value - 1) * 12 + 12));
        console.log("filteredCoins", filteredCoins);
        topFunction();
      };
    
    useEffect(() => {
        axios.get(API_URL, { crossDomain: true }).then((res) => {
            if (res.data) {
                // console.log(res.data);
                setData(res.data);
                setFilteredCoins(
                  res.data.slice((page - 1) * 12, (page - 1) * 12 + 12)
                );
                setLoading(false)
            } else {
                console.log('error')
            }
        })
    }, [])
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
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Header />
                    <Search handleChange={handleChange} />
                    <DashboardWrapper data={filteredCoins} />
                    {!search && <PaginationComponent page={page}
                    handlePageChange={handlePageChange} />}
                    <NorthRoundedIcon
                        className="top-button"
                        id="top-button"
                        onClick={() => {
                            topFunction();
                        }}
                    />
                </>
            )}
        </>
    )
}

export default Dashboard