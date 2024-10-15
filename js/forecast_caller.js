import {weather_api_key} from '/js/config.js'
const w_key = weather_api_key

var i = Math.floor(Math.random() * 50);
var j = Math.floor(Math.random() * 50);
var k = Math.floor(Math.random() * 50);

var city_codes = [];
var idx = 0;


function update_time_date()
{
    // Date
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth();
    const options = {weekday: 'long'};
    const dayOfWeek = now.toLocaleDateString(undefined, options);
    const year = now.getFullYear();

    const currDate = `${dayOfWeek}, ${month + 1}/${day}/${year}`;
    document.getElementsByClassName("date")[0].innerHTML = currDate;

    // Time
    const options2 = { hour12: true, hour: '2-digit', minute: '2-digit' };
    const locale = 'en-US';  // Adjust this based on the desired locale
    const localizedTime = now.toLocaleTimeString(locale, options2);
    document.getElementsByClassName("time")[0].innerHTML = localizedTime;
}
update_time_date(); // initial calling to set the values
setInterval(update_time_date, 1000); // time updates every second



// Fetch location codes 
const url0 = new URL('http://dataservice.accuweather.com/locations/v1/topcities/50?apikey='+w_key);
fetch(url0)
.then(response => {
    if (!response.ok)
    {
        throw new Error('Network Response Error');
    }

    return response.json();
})
.then(data => {

    data.forEach((item) => {
        
        city_codes[idx] = item.Key;
        idx+=1;
        
      });

    // Initial calls to set the weather values
    fetch_weather1();
    fetch_weather2();
    fetch_weather3();

})


function update_keys()
{
    i = Math.floor(Math.random() * 50);
    j = Math.floor(Math.random() * 50);
    k = Math.floor(Math.random() * 50);
}

function fetch_weather1()
{
        
        // Fetches the location data for name, state, country
        const url1 = new URL(`http://dataservice.accuweather.com/locations/v1/${city_codes[i]}?apikey=`+w_key);
        fetch(url1)
        .then(response => {
            if (!response.ok){
                throw new Error('Network Response Error');
            }

            return response.json();
        })
        .then(data => {
            let town = data.LocalizedName;
            let state = data.AdministrativeArea.LocalizedName;
            let country = data.Country.LocalizedName;

            let res = town + ', ' + state + ', ' + country;
            document.getElementById("location1").innerHTML = res;
        })
        

        // Fetch Request for weather info
        const url2 = new URL(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${city_codes[i]}?apikey=`+w_key);
        fetch(url2)
        .then(response => {
        if (!response.ok) {
            throw new Error('Network Response Error');
        }
            return response.json(); // Parse the response as JSON
        })
        .then(data => {
            
            let headline = data.Headline.Text;
            let min = data.DailyForecasts[0].Temperature.Minimum.Value;
            let max = data.DailyForecasts[0].Temperature.Maximum.Value;
        
            document.getElementById("headline1").innerHTML = headline;
            document.getElementById("min1").innerHTML = `Low ${min}` + '°';
            document.getElementById("max1").innerHTML = `High ${max}` + '°';
        })
        .catch(error => {
        console.error('Fetch Operation Error:', error);
        });
}


// Weather Location 2 
function fetch_weather2() {
    
        // Fetches the location data for name, state, country
        const url1 = new URL(`http://dataservice.accuweather.com/locations/v1/${city_codes[j]}?apikey=`+w_key);
        fetch(url1)
        .then(response => {
            if (!response.ok){
                throw new Error('Network Response Error');
            }

            return response.json();
        })
        .then(data => {
            let town = data.LocalizedName;
            let state = data.AdministrativeArea.LocalizedName;
            let country = data.Country.LocalizedName;

            let res = town + ', ' + state + ', ' + country;
            document.getElementById("location2").innerHTML = res;
        })



        // Fetch request for weather info
        const url2 = new URL(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${city_codes[j]}?apikey=`+w_key);
        fetch(url2)
        .then(response => {
        if (!response.ok) {
            throw new Error('Network Response Error');
        }
            return response.json(); // Parse the response as JSON
        })
        .then(data => {
            
            let headline = data.Headline.Text;
            let min = data.DailyForecasts[0].Temperature.Minimum.Value;
            let max = data.DailyForecasts[0].Temperature.Maximum.Value;
            
            document.getElementById("headline2").innerHTML = headline;
            document.getElementById("min2").innerHTML = `Low ${min}`+ '°';
            document.getElementById("max2").innerHTML = `High ${max}` + '°';
        })
        .catch(error => {
        console.error('Fetch Operation Error:', error);
        });

} 


// Weather Location 3 
function fetch_weather3(){
    
        // Fetches the location data for name, state, country
        const url1 = new URL(`http://dataservice.accuweather.com/locations/v1/${city_codes[k]}?apikey=`+w_key);
        fetch(url1)
        .then(response => {
            if (!response.ok){
                throw new Error('Network Response Error');
            }

            return response.json();
        })
        .then(data => {

            let town = data.LocalizedName;
            let state = data.AdministrativeArea.LocalizedName;
            let country = data.Country.LocalizedName;

            let res = town + ', ' + state + ', ' + country;
            document.getElementById("location3").innerHTML = res;
        })


        // Fetch request for weather info
        const url2 = new URL(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${city_codes[k]}?apikey=`+w_key);
        fetch(url2)
        .then(response => {
        if (!response.ok) {
            throw new Error('Network Response Error');
        }
            return response.json(); 
        })
        .then(data => {
            
            let headline = data.Headline.Text;
            let min = data.DailyForecasts[0].Temperature.Minimum.Value;
            let max = data.DailyForecasts[0].Temperature.Maximum.Value;
            
            document.getElementById("headline3").innerHTML = headline;
            document.getElementById("min3").innerHTML = `Low ${min}` + '°';
            document.getElementById("max3").innerHTML = `High ${max}` + '°';
        })
        .catch(error => {   
        console.error('Fetch Operation Error:', error);
        });

}

// Interval set to one minute for testing purposes
setInterval(function(){
    update_keys();
    fetch_weather1();
    fetch_weather2();
    fetch_weather3();
}, 60000); 

