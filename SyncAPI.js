const fs = require("fs");
const http = require("http");
const https = require("https");
const querystring = require("querystring");
const {client_id, scope} = require("./auth/credentials.json");
const { EventEmitter } = require("stream");

const myEmitter = new EventEmitter();

const server = http.createServer();
const port = 3000;
server.on("listening", listening_handler);


server.listen(port);
function listening_handler(){
    console.log(`Now Listening on Port ${port}`);
}

server.on("request", connection_handler);

function connection_handler(req, res)
{
    myEmitter.on('func1Called', func2);

    console.log(`New Request for ${req.url} from ${req.socket.remoteAddress}`);

    if(req.url === "/"){
        const authorization_endpoint = "https://github.com/login/oauth/authorize";
        let uri = querystring.stringify({client_id, scope});
        res.writeHead(302, {Location: `${authorization_endpoint}?${uri}`}).end();
        
    }
    else if (req.url.startsWith("/authorized")){
        func1();
    }

    
    function func1() {
        const url1 = new URL("http://dataservice.accuweather.com/forecasts/v1/daily/1day/329592?apikey=FMqiTOppnOx6Umwe5KiAN3iOWo90VGhF");
        http.get(url1, function(res){
            
            let data = "", json_data;
            res.on('data', (stream) => {
                data += stream;
            });
        
            res.on('end', function() {
                json_data = JSON.parse(data);
                let jsonobj1 = json_data.DailyForecasts[0].Temperature.Minimum.Value;
                let jsonobj2 = json_data.DailyForecasts[0].Temperature.Maximum.Value;
                let jsonobj3 = json_data.DailyForecasts[0].Day.IconPhrase;
                let jsonobj4 = json_data.DailyForecasts[0].Night.IconPhrase;
                let x = JSON.stringify(jsonobj1);
                let y = JSON.stringify(jsonobj2);
                let z = JSON.stringify(jsonobj3);
                let beta = JSON.stringify(jsonobj4);
                console.log(`Today's low is: ${x}`);
                console.log(`Today's high is: ${y}`);
                console.log(`Today will be ${z}`);
                console.log(`Tonight will be ${beta}`);
                console.log('\xa0')
            });          
        });  

        myEmitter.emit('func1Called')
    }

    function func2() {
        const url2 = new URL("https://api.adviceslip.com/advice");
        https.get(url2, function(res){
            
            let data = "", json_data;
            res.on('data', (stream) => {
                data += stream;
            });
        
            res.on('end', function() {
                json_data = JSON.parse(data);
                let jsonobj = json_data.slip.advice;
                let x = JSON.stringify(jsonobj) 
                console.log(`A piece of advice for today is, ${x}`);
            });          
        });  
    }

}