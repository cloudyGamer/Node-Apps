const geoCode = require('./utils/geoCode');
const forecast = require('./utils/forecast');
//const url = 'http://api.weatherstack.com/current?access_key=07746ce00eae9f908a7badfc246ef166&query=53.204418,-6.109190';

geoCode(process.argv[2],(error,{latitude,longitude,location} = {}) => {
     if (!process.argv[2]) {
          return console.log("please provide a location");
     }
     else if (error) {
          return console.log(error);
     }
     //console.log('error:',error);
     //console.log('result:',result);
     
     forecast(latitude, longitude, (error, forecastData) => {
          if (error) {
          return console.log(error);
          }
       console.log(location);
       console.log('Data', forecastData);
     });
});

//const sum = (num1,num2,callback) => {
//     setTimeout(() => {
//          const total = num1 + num2;
//          callback(total);
//     },2000);
//     };
//     
//sum(1,2,(total) => {console.log(total);});

//const geoCode = (address,callback) => {
//     const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoibWFwYm94cmFjZXIiLCJhIjoiY2tkY3Y4aGRqMG9yaDJ5bmI0bGpqcjZnZSJ9._monxVHYf4s5qKbeS5F2nw&limit=1";
//};
//
//geoCode("philadelphia",(error,data) => {
//     
//     });


