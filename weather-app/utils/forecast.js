const request = require('postman-request');

const forecast = (long,lat,callback) => {
     const url = 'http://api.weatherstack.com/current?access_key=07746ce00eae9f908a7badfc246ef166&query='+lat+','+long;
     request({url:url,json:true},(error,response) => {
          const {weather_descriptions,temperature,feelslike} = response.body.current;
          const [forecast,] = weather_descriptions;
               if(error){
                    callback('unable to connect to server!');
               } else if (response.body.error){
                    callback('weather forecast not found');
               } else {
                    callback(undefined,{
                         forecast,
                         temperature,
                         feelslike
                    });
               }
          });

     };
     
module.exports = forecast;