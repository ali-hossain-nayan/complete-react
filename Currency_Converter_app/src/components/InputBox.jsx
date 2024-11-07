import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId(); //useId is a hooks for generating uniques id and that can be passed
  //to accessibility attributes for html elements.

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block" 
        >
          {label}
        </label>
        <input
          id={amountInputId} //binding the id with the input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable} //disable false rakh dea feheley se
          value={amount}
          //js take the value as string thats why wrap Number
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          //for avoiding possible crash we use && onAmountChange if its exist onAmountChange
          //then the onAmountChange method call hoga
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          //same as onAmountChange but here dont use Number bcz we dont  need use NUmber  which is
          //default string so as it is.
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            //For the better performance in loop need to pass a key
            <option key={currency} value={currency}>
              {currency}
              {/* show the select currency name */}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
