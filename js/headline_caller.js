import { finance_api_key } from "/js/config.js";
const f_key = finance_api_key;

var i = Math.floor(Math.random() * 50);
var j = Math.floor(Math.random() * 50);
var k = Math.floor(Math.random() * 50);
let news_list = [];
const url = new URL ('https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey='+f_key);

fetch(url)
.then(response => {
    if (!response.ok)
    {
        throw new Error('Network Response Error');
    }
    return response.json();
})
.then(data => {

    let res = data["feed"];
    for(const idx in res)
    {
        if(res[idx]["title"].length > 130)
        {
            let new_title = res[idx]["title"].substring(0, 130);
            new_title = `${new_title}`+`...`;
            let x = [new_title, res[idx]["source"], res[idx]["url"]];
            news_list.push(x);
        }
        else
        {
            let x = [res[idx]["title"], res[idx]["source"], res[idx]["url"]];
            news_list.push(x);
        }

    }

        
    function update_articles(){
        i = Math.floor(Math.random() * 50);
        j = Math.floor(Math.random() * 50);
        k = Math.floor(Math.random() * 50);

    }

    function set_elements()
    {
        document.getElementById("title1").innerHTML = news_list[i][0];
        document.getElementById("source1").innerHTML = news_list[i][1];
        document.getElementById("url1").innerHTML = "Read Full Story Here";
        // Sets the hyperlink location to the news article
        document.getElementById("url1").href = news_list[i][2];
        // Sets the article to open in new tab
        document.getElementById("url1").target = "_blank";
        
        
        document.getElementById("title2").innerHTML = news_list[j][0];
        document.getElementById("source2").innerHTML = news_list[j][1];
        document.getElementById("url2").innerHTML = "Read Full Story Here";
        // Sets the hyperlink location to the news article
        document.getElementById("url2").href = news_list[j][2];
        // Sets the article to open in new tab
        document.getElementById("url2").target = "_blank";


        document.getElementById("title3").innerHTML = news_list[k][0];
        document.getElementById("source3").innerHTML = news_list[k][1];
        document.getElementById("url3").innerHTML = "Read Full Story Here";
        // Sets the hyperlink location to the news article
        document.getElementById("url3").href = news_list[k][2];
        // Sets the article to open in new tab
        document.getElementById("url3").target = "_blank";

    }
    set_elements(); // initial call to set the values

    // Interval set to 30 mins for testing purposes
    setInterval(function(){
        update_articles();
        set_elements();
    }, 1800000); 

    
})

