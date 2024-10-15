# Forecast Dashboard
## Overview
* The goal of this application is to provide a news related dashboard, displayed to the user as a landing page. 
* This application makes references to the Accuweather API service and the Alphavantage API service. Once data is received from these requests, it's parsed into arrays and rendered to the user via the Javascript DOM. 

## Setup / The APIs
#### Accuweather 
* To make requests to the Accuweather service you need an API key, which is provided upon registering an account and registering your application. This key must be used in every/any request. 
#### Alphavantage
* Requests to the Alphavantage service also require an API key, which is provided to you at the completion of the account registration process. This key must be used in every/any request. 
#### Configuration
* Please create a file titled 'config.js'. This is the file that will be referenced for the api keys.       
E.g.
```js
const weather_api_key = 'your_key_here';
const finance_api_key = 'your_key_here'; 

export {weather_api_key};
export {finance_api_key};
```
Be sure to include the export statements.
