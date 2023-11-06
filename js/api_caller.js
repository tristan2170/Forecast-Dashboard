import {API_KEY} from '/js/config.js'
const api_key = API_KEY

var i = Math.floor(Math.random() * 50);
var j = Math.floor(Math.random() * 50);
var k = Math.floor(Math.random() * 50);

var city_codes = [];
var idx = 0;

// Date
const now = new Date();
const day = now.getDate();
const month = now.getMonth();
const options = {weekday: 'long'};
const dayOfWeek = now.toLocaleDateString(undefined, options);
const year = now.getFullYear();

const currDate = `${dayOfWeek}, ${day}/${month + 1}/${year}`;
document.getElementsByClassName("date")[0].innerHTML = currDate;

// Time
const options2 = { hour12: true, hour: '2-digit', minute: '2-digit' };
const locale = 'en-US';  // Adjust this based on the desired locale
const localizedTime = now.toLocaleTimeString(locale, options2);
document.getElementsByClassName("time")[0].innerHTML = localizedTime;


function updateKeys(){
    i = Math.floor(Math.random() * 50);
    j = Math.floor(Math.random() * 50);
    k = Math.floor(Math.random() * 50);
}

const tenMinsInMillis = 10 * 60 * 1000;
setInterval(updateKeys, tenMinsInMillis); 



// Fetch location codes 
const url0 = new URL('http://dataservice.accuweather.com/locations/v1/topcities/50?apikey='+api_key);
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
        console.log(item.Key);
        city_codes[idx] = item.Key;
        console.log(city_codes[idx]);
        idx+=1;
        
      });

    func1();
})




// Weather Location 1      
function func1(){
        console.log(i);
        console.log(city_codes[i]);
        // Fetches the location data for name, state, country
        const url1 = new URL(`http://dataservice.accuweather.com/locations/v1/${city_codes[i]}?apikey=`+api_key);
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
        const url2 = new URL(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${city_codes[i]}?apikey=`+api_key);
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
            document.getElementById("min1").innerHTML = `Low: ${min}` + '°';
            document.getElementById("max1").innerHTML = `High: ${max}` + '°';
        })
        .catch(error => {
        console.error('Fetch Operation Error:', error);
        });
    
        func2();
}


// Weather Location 2 
function func2() {
    
        // Fetches the location data for name, state, country
        const url1 = new URL(`http://dataservice.accuweather.com/locations/v1/${city_codes[j]}?apikey=`+api_key);
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
        const url2 = new URL(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${city_codes[j]}?apikey=`+api_key);
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
            document.getElementById("min2").innerHTML = `Low: ${min}`+ '°';
            document.getElementById("max2").innerHTML = `High: ${max}` + '°';
        })
        .catch(error => {
        console.error('Fetch Operation Error:', error);
        });

        func3();

} 


// Weather Location 3 
function func3(){
    
        // Fetches the location data for name, state, country
        const url1 = new URL(`http://dataservice.accuweather.com/locations/v1/${city_codes[k]}?apikey=`+api_key);
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
        const url2 = new URL(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${city_codes[k]}?apikey=`+api_key);
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
            document.getElementById("min3").innerHTML = `Low: ${min}` + '°';
            document.getElementById("max3").innerHTML = `High: ${max}` + '°';
        })
        .catch(error => {   
        console.error('Fetch Operation Error:', error);
        });

}
