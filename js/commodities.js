import { finance_api_key } from "/js/config.js";
const f_key = finance_api_key; 

const oil_url = new URL ('https://www.alphavantage.co/query?function=WTI&interval=daily&apikey='+f_key);
const gas_url = new URL ('https://www.alphavantage.co/query?function=NATURAL_GAS&daily=daily&apikey='+f_key);
const copper_url = new URL ('https://www.alphavantage.co/query?function=COPPER&interval=daily&apikey='+f_key);

fetch(oil_url)
.then(response => {
    if (!response.ok)
    {
        throw new Error('Network Response Error');
    }

    return response.json();
})
.then(data => {

    let unit = data["unit"];
    let date_value = data["data"];
    let date = date_value[0]["date"];
    let value = date_value[0]["value"];

    document.getElementById("date1").innerHTML = `As of ${date}`;
    document.getElementById("value1").innerHTML = value;
    document.getElementById("unit1").innerHTML = unit;

})



fetch(gas_url)
.then(response => {
    if (!response.ok)
    {
        throw new Error('Network Response Error');
    }

    return response.json();
})
.then(data => {

    let unit = data["unit"];
    let date_value = data["data"];
    let date = date_value[0]["date"];
    let value = date_value[0]["value"];

    document.getElementById("date2").innerHTML = `As of ${date}`;
    document.getElementById("value2").innerHTML = value;
    document.getElementById("unit2").innerHTML = unit;

})


fetch(copper_url)
.then(response => {
    if (!response.ok)
    {
        throw new Error('Network Response Error');
    }

    return response.json();
})
.then(data => {

    let unit = data["unit"];
    let date_value = data["data"];
    let date = date_value[0]["date"];
    let value = date_value[0]["value"];

    document.getElementById("date3").innerHTML = `As of ${date}`;
    document.getElementById("value3").innerHTML = value;
    document.getElementById("unit3").innerHTML = unit;


})

