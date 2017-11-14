
const request = require('request');
geocode=(address,callback)=>{

var inititialUrl2 = encodeURIComponent(address);


request({
  url:`https://maps.googleapis.com/maps/api/geocode/json?address=${inititialUrl2}`,
  json:true,
},(error,response,body)=>{
  if(error){
    callback('unable to connect to the server');
  }
  else if(body.status==='ZERO_RESULTS'){
    callback('no address found ');
  }
  else if(body.status==='OK'){
    var resultObj={
      address: body.results[0].formatted_address,
      latitude: body.results[0].geometry.location.lat,
      longitude: body.results[0].geometry.location.lng,
    }
  callback(undefined,resultObj);
}
});
}

module.exports = {
  geocode,
}
