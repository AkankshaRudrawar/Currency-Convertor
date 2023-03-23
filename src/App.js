import { useEffect, useState } from "react";
import Axios from "axios";
import Convertor from "./Convertor";
import "react-dropdown/style.css";
import "./App.css";

function App() {
  const [currency, setcurrency] = useState([]);
  const [from, setFrom] = useState("inr");
  useEffect(() => {
    Axios.get(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`
    ).then((response) => {
      setcurrency(response.data[from]);
    });
  }, [from]);

  return (
    <div className="App">
      <div className="heading">
        <h1>Currency converter App</h1>
      </div>
      <Convertor currency={currency} from={from} setFrom={setFrom} />
    </div>
  );
}
export default App;