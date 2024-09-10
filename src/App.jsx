import { useState, useEffect } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const conversionRate = currencyInfo[to];
  const option = Object.keys(currencyInfo);

  const swap = () => {
    const tempFrom = from;
    const tempTo = to;
    setFrom(tempTo);
    setTo(tempFrom);
    setAmount(convertedAmount);
  };

  const convert = () => {
    if (conversionRate) {
      setConvertedAmount(amount * conversionRate);
    }
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat bg-gray-100"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/396547/pexels-photo-396547.jpeg)`,
      }}
    >
      <div className="w-full max-w-lg mx-auto border border-gray-300 rounded-lg shadow-lg p-8 bg-white/80 backdrop-blur-lg">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          {/* From Currency InputBox */}
          <div className="mb-4">
            <InputBox
              label="From"
              amount={amount}
              currencyOption={option}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(value) => setAmount(Number(value))}
            />
          </div>

          {/* Swap Button */}
          <div className="text-center my-4">
            <button
              type="button"
              className="inline-block px-4 py-2 bg-black text-white rounded-md shadow hover:bg-red-500 transition-colors"
              onClick={swap}
            >
              Swap
            </button>
          </div>

          {/* To Currency InputBox */}
          <div className="mb-6">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOption={option}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>

          {/* Convert Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-black transition-colors"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
