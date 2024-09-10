import React from "react";

const InputBox = ({
  label,
  amount,
  currencyOption,
  onCurrencyChange,
  selectCurrency,
  onAmountChange,
  amountDisable,
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-gray-700 font-semibold mb-2">{label}</label>
      <div className="flex items-center space-x-4">
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 bg-white shadow focus:outline-none"
        >
          {currencyOption.map((option) => (
            <option key={option} value={option}>
              {option.toUpperCase()}
            </option>
          ))}
        </select>
        <input  
          type="number"
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
          disabled={amountDisable}
          className="border border-gray-300 rounded-md px-4 py-2 shadow focus:outline-none w-full"
          placeholder="Enter amount"
        />
      </div>
    </div>
  );
};

export default InputBox;
