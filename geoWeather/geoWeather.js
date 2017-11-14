// const request = require('request');
// var geoWeather=(lat,lon,callback)=>{
//   request({
//     url:`https://maps.googleapis.com/maps/api/geocode/json?address=${inititialUrl2}`,
//     json:true,
//   },(error,response,body)=>{
//   if(error){
//     console.log('unable to connect to the server');
//   }
//   else if(response.statusCode===400){
//     console.log('no address found ');
//   }
//   else if(response.statusCode===200){
//     console.log(body.currently.temperature);
// }
// });
// }
// module.exports={
//   geoWeather,
// }
const request = require('request');
var geoWeather=(lat,lng,callback)=>{

//var inititialUrl2 = encodeURIComponent(address);


request({
  url:`https://api.darksky.net/forecast/b804a04d108f8da07a6cd5d1af44652d/${lat},${lng}`,
  json:true,
},(error,response,body)=>{
  if(error){
    callback('unable to fetch Weather');
  }
  else if(response.statusCode===400){
    callback('no address found ');
  }
  else if(response.statusCode===200){
    callback(undefined,{
      temperature:body.currently.temperature,
      appearantTemperature:body.currently.apparentTemperature,
   });
}
});
}

module.exports = {
  geoWeather,
}
