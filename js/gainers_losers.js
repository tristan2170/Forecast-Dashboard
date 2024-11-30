import { finance_api_key } from "/js/config.js";
const f_key = finance_api_key; 

const url = new URL('https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey='+f_key);

let gainers = []; 
let losers = [];

var i = Math.floor(Math.random() * 20);
var j = Math.floor(Math.random() * 20);
var k = Math.floor(Math.random() * 20);

fetch(url)
.then(response =>{
    if (!response.ok)
        {
            throw new Error('Network Response Error');
        }
        return response.json();
})
.then(data => {

    let res_gain = data["top_gainers"];
    let res_lose = data["top_losers"];

    for(const idx in res_gain)
    {
        let x = [res_gain[idx]["ticker"], res_gain[idx]["change_percentage"]]; // x = [ticker, percentage change]
        gainers.push(x);
    }
    

    for(const idx in res_lose)
    {
        let x = [res_lose[idx]["ticker"], res_lose[idx]["change_percentage"]];  // x = [ticker, percentage change]
        losers.push(x); 
    }

    function update_tickers()
    {
        var i = Math.floor(Math.random() * 20);
        var j = Math.floor(Math.random() * 20);
        var k = Math.floor(Math.random() * 20);
    }

    function set_elements()
    {
        document.getElementById("gain-tick1").innerHTML = gainers[i][0];
        document.getElementById("gain-percen1").innerHTML= gainers[i][1];

        document.getElementById("gain-tick2").innerHTML = gainers[j][0];
        document.getElementById("gain-percen2").innerHTML= gainers[j][1];

        document.getElementById("gain-tick3").innerHTML = gainers[k][0];
        document.getElementById("gain-percen3").innerHTML= gainers[k][1];


        document.getElementById("lose-tick1").innerHTML = losers[i][0];
        document.getElementById("lose-percen1").innerHTML= losers[i][1];

        document.getElementById("lose-tick2").innerHTML = losers[j][0];
        document.getElementById("lose-percen2").innerHTML= losers[j][1];

        document.getElementById("lose-tick3").innerHTML = losers[k][0];
        document.getElementById("lose-percen3").innerHTML= losers[k][1];

    }
    set_elements() // Initial call to set elements

    // Interval set to 30 mins for testing purposes
    setInterval(function(){
        update_tickers();
        set_elements();
    }, 1800000);


})