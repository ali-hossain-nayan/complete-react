import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("bdt");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from); //here we storde the api datas into cunrrencyInfo

  const options = Object.keys(currencyInfo); //extract keys from the api object so that we can use it in options which options (currency) we needed..

  const swap = () => {
    //swap function use for opposite the amount to converted amount..reverse
    setFrom(to); //convert from ko to
    setTo(from); //to ko from
    setConvertedAmount(amount); //convertedAmount ko amount
    setAmount(convertedAmount); //amount ko convertedAmount
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]); //covert the given amount into target amount
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/15030871/pexels-photo-15030871/free-photo-of-monochrome-photo-of-man-wearing-black-sweater.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault(); //its a form when submit it will go somewhere
              //but we didnt need it bcz we just call convert() functon
              //and this convert function functionality already we have done
              //above convert function
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-green-800 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={from}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
