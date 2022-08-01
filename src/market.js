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
              <p className="col-sm-2 img-api">
                <img className="img" src={coin.image}></img>
              </p>
              <p className="col-sm-2">{coin.id} </p>

              {/* <p> Rs. {coin.market_cap}</p> */}
              <p className="col-sm-2">Rs. {coin.current_price} </p>
              <p className="col-sm-2">{coin.price_change_percentage_24h}</p>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Market;
