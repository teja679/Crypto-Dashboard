import React from "react";
import List from "../DashboardPage/List/List";

function CoinPageList({ coin, delay }) {
  return (
    <div className="line-page-div">
      <List coin={coin} delay={delay} />
    </div>
  );
}

export default CoinPageList;
