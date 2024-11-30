import { finance_api_key } from "/js/config.js";
const f_key = finance_api_key; 


// USD to JPY
const url1 = new URL('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey='+f_key);

// EUR to USD
const url2 = new URL('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=EUR&to_currency=USD&apikey='+f_key);

// USD to CHF
const url3 = new URL('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=CHF&apikey='+f_key);


fetch(url1)
.then(response => {

    if (!response.ok)
        {
            throw new Error('Network Response Error');
        }
        return response.json();
})
.then(data => {
    
    let res = data["Realtime Currency Exchange Rate"];
    let from_curr = res["1. From_Currency Code"];
    let to_curr = res["3. To_Currency Code"];
    let exch = res["5. Exchange Rate"];

    document.getElementById("curr-pair1").innerHTML = `${from_curr}/${to_curr}`;
    document.getElementById("exch-rate1").innerHTML = exch;
})


fetch(url2)
.then(response => {

    if (!response.ok)
        {
            throw new Error('Network Response Error');
        }
        return response.json();
})
.then(data => {
    
    let res = data["Realtime Currency Exchange Rate"];
    let from_curr = res["1. From_Currency Code"];
    let to_curr = res["3. To_Currency Code"];
    let exch = res["5. Exchange Rate"];

    document.getElementById("curr-pair2").innerHTML = `${from_curr}/${to_curr}`;
    document.getElementById("exch-rate2").innerHTML = exch;
})


fetch(url3)
.then(response => {

    if (!response.ok)
        {
            throw new Error('Network Response Error');
        }
        return response.json();
})
.then(data => {
    
    let res = data["Realtime Currency Exchange Rate"];
    let from_curr = res["1. From_Currency Code"];
    let to_curr = res["3. To_Currency Code"];
    let exch = res["5. Exchange Rate"];

    document.getElementById("curr-pair3").innerHTML = `${from_curr}/${to_curr}`;
    document.getElementById("exch-rate3").innerHTML = exch;
})