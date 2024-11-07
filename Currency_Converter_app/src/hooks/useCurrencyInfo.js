import {useEffect, useState} from "react"


function useCurrencyInfo(currency){//all hooks take the optional argument but this custom
    //hooks ko ham currencyinfo argument deta ho.
    const [data, setData] = useState({})//json data for hold use useState()and we pass
    //{} as a parameter so that if data doesnt come into api then dont crashhh
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())//api convert into json bcz most time api is string
        //so we have to convert it into json(javascript object notation)human readable easy
        .then((res) => setData(res[currency]))//for access object all time not use .(use [])
        console.log(data);
    }, [currency])//here we use useEffect because if dependency currency change then
    //the function have to run again...
    console.log(data);
    return data
}

export default useCurrencyInfo;