const http = require("http");
const https = require("https");
const config = require("js/config.js")
const api_key = config.API_KEY

// Weather Location 1 (Flushing)
func1();
function func1(){
    const url = new URL(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/329592?apikey=${api_key}`);
    http.get(url, function(accuweather_res){
        
        let data = "", json_data;
        accuweather_res.on('data', (stream) => {
            data += stream;
        });
    
        accuweather_res.on('end', function() {
            json_data = JSON.parse(data);
            let date = JSON.stringify(json_data.Headline.EffectiveDate);
            let headline = JSON.stringify(json_data.Headline.Text);
            let min = JSON.stringify(json_data.DailyForecasts[0].Temperature.Minimum.Value);
            let max = JSON.stringify(json_data.DailyForecasts[0].Temperature.Maximum.Value);
        
            document.getElementById("date1").value = date;
            document.getElementById("headline1").value = headline;
            document.getElementById("min1").value = min;
            document.getElementById("max1").value = max;
        });          
    });  
    func2();
}// End of func1 


// Weather Location 2 (Lake Success)
function func2() {
    const url = new URL(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/2126230?apikey=${api_key}`);
    https.get(url, function(advice_res){

        let data = "", json_data;
        advice_res.on('data', (stream) => {
            data += stream;
        });
    
        advice_res.on('end', function() {
            json_data = JSON.parse(data);
            let date = JSON.stringify(json_data.Headline.EffectiveDate);
            let headline = JSON.stringify(json_data.Headline.Text);
            let min = JSON.stringify(json_data.DailyForecasts[0].Temperature.Minimum.Value);
            let max = JSON.stringify(json_data.DailyForecasts[0].Temperature.Maximum.Value);

            document.getElementById("date2").value = date;
            document.getElementById("headline2").value = headline;
            document.getElementById("min2").value = min;
            document.getElementById("max2").value = max;

        });  
    });
    func3();
}//End of func2 


// Weather Location 3 (Bayside)
function func3(){
    const url = new URL(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/329570?apikey=${api_key}`);
    http.get(url, function(accuweather_res){
        
        let data = "", json_data;
        accuweather_res.on('data', (stream) => {
            data += stream;
        });
    
        accuweather_res.on('end', function() {
            let date = JSON.stringify(json_data.Headline.EffectiveDate);
            let headline = JSON.stringify(json_data.Headline.Text);
            let min = JSON.stringify(json_data.DailyForecasts[0].Temperature.Minimum.Value);
            let max = JSON.stringify(json_data.DailyForecasts[0].Temperature.Maximum.Value);

            document.getElementById("date3").value = date;
            document.getElementById("headline3").value = headline;
            document.getElementById("min3").value = min;
            document.getElementById("max3").value = max;
        });          
    });  
}// End of func3