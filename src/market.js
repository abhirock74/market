import React, { useEffect, useState } from "react";
import "./img.css";

function Market() {
  const [data, setData] = useState([]);

  const fetchApi = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR`;
    const response = await fetch(url);
    const resJson = await response.json();
    setData(resJson);
    console.log(resJson);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      {data.map((coin) => {
        return (
          <>
            <div className="container">
              <p>
                <img className="img" src={coin.image}></img>
              </p>
              <p>{coin.id} </p>

              {/* <p> Rs. {coin.market_cap}</p> */}
              <p>Rs. {coin.current_price} </p>
              <p>{coin.price_change_percentage_24h}</p>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Market;
