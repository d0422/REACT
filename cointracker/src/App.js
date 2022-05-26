import {useState, useEffect} from "react";

function App() {
  const [loading, setloading]=useState(true);
  const [coins, setcoins]=useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response)=> response.json())
    .then((json)=>{
      setcoins(json);
      setloading(false);
    });
  }, []);
  return (
    <div>
      <h1>Coin Tracker ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> :
      <select>
        {coins.map((coin) => (
        <option>
          {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
          </option>))}
        </select>
        }

    </div>
  );
}

export default App;
