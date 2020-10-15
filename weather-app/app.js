const geoCode = require('./utils/geoCode');
const forecast = require('./utils/forecast');
//const url = 'http://api.weatherstack.com/current?access_key=07746ce00eae9f908a7badfc246ef166&query=53.204418,-6.109190';

geoCode(process.argv[2],(error,result) => {
     if (!process.argv[2]) {
          return console.log("please provide a location");
     }
     else if (error) {
          return console.log(error);
     }
     console.log('error:',error);
     console.log('result:',result);
     
     forecast(result.latitude, result.longitude, (error, forecastData) => {
          if (error) {
          return console.log(error);
          }
       console.log(result.location);
       console.log('Data', forecastData);
     });
});



