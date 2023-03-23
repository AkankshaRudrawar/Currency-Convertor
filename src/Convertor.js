import { useState, useEffect } from "react";
import { HiSwitchHorizontal } from "react-icons/hi";
import Dropdown from "react-dropdown";

const Convertor = ({ currency, from, setFrom }) => {
  const [to, setTo] = useState("usd");
  const [input, setInput] = useState(0);
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);
  const [Toggle, setToggle] = useState(false);

  useEffect(() => {
    setOptions(Object.keys(currency));
    convert();
  }, [currency]);

  const convert = () => {
    let rate = currency[to];
    setOutput(input * rate);
  };

  const flip = () => {
    let temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <>
      <div className="container">
        <div>
          <h2>Amount</h2>
          <input
            type="text"
            placeholder="Enter the amount"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div>
          <h2>From</h2>
          <Dropdown
            options={options}
            onChange={(e) => {
              setFrom(e.value);
            }}
            value={from}
            placeholder="From"
          />
        </div>
        <div className="flip">
          <HiSwitchHorizontal
            size="25px"
            onClick={() => {
              flip();
            }}
          />
        </div>
        <div>
          <h2>To</h2>
          <Dropdown
            options={options}
            onChange={(e) => {
              setTo(e.value);
            }}
            value={to}
            placeholder="To"
          />
        </div>
      </div>
      <div className="btn">
        <button
          onClick={() => {
            convert();
            setToggle(true);
          }}
        >
          Convert
        </button>
      </div>

      <div className="output">
        {Toggle ? (
          <>
            <p>The Converted Amount is : </p>
            <p>{input + " " + from + " = " + output.toFixed(2) + " " + to}</p>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Convertor;