const request = require('postman-request');
const url = 'http://api.weatherstack.com/current?access_key=07746ce00eae9f908a7badfc246ef166&query=53.204418,-6.109190';
//request(
//  { url:url, json:true },(error,response) => {
//     console.log(`
//     Forecast:
//     ${response.body.current.weather_descriptions[0]}
//     current temperature:
//     ${response.body.current.temperature}
//     Feels Like
//     ${response.body.current.feelslike}`);
//
//  });
  
  //call to mapBox
  const geoCode = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWFwYm94cmFjZXIiLCJhIjoiY2tkY3Y4aGRqMG9yaDJ5bmI0bGpqcjZnZSJ9._monxVHYf4s5qKbeS5F2nw&limit=1";
  request(
    {url:geoCode,json:true},(error,response) => {
         if (error) {
              console.log('error: not connected');
          } 
          else if (response.body.features.length===0){
               console.log('no matching location');
          }
          else {
               //console.log(response.features[0]);
               response.body.features.forEach((result) => {
                    console.log(`
                         Long: 
                         ${result.center[0]} 
                         and Lat: 
                         ${result.center[1]}
                    `);
               });
          }

  }
  );

//call to mapbox with co-ordinates
//const getLongLat = 'http://api.weatherstack.com/current?access_key=07746ce00eae9f908a7badfc246ef166&query=53.204418,-6.109190';
//request(
//    {url:getLongLat,json:true},(error,response) => {
//         if (error) {
//              console.log('error: not connected');
//          } else if(response.body.error){
//               console.log(`Error: ${response.body.error.type}`);
//          } 
//          else {
//               console.log(`
//                    Forecast:
//                    ${response.body.current.weather_descriptions[0]}
//                    current temperature:
//                    ${response.body.current.temperature}
//                    Feels Like
//                    ${response.body.current.feelslike}`
//                      );
//               }
//
//  }
//  );
  