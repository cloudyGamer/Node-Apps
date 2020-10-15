const request = require('postman-request');


const geoCode = (address,callback) => {
     const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoibWFwYm94cmFjZXIiLCJhIjoiY2tkY3Y4aGRqMG9yaDJ5bmI0bGpqcjZnZSJ9._monxVHYf4s5qKbeS5F2nw&limit=1";
     request({url:url,json:true},(error,response) => {
               if(error){
                    callback('unable to connect to server!');
               } else if (response.body.features.length===0){
                    callback('unable to find location sorry');
               } else {
                    callback(undefined,{
                         latitude:response.body.features[0].center[0],
                         longitude:response.body.features[0].center[1],
                         location:response.body.features[0].place_name
                    });
               }
          });
};

module.exports = geoCode