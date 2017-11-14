const request = require('request');
var geoPromise = (address)=>{
  return new Promise((resolve,reject)=>{

    var inititialUrl2 = encodeURIComponent(address);


    request({
      url:`https://maps.googleapis.com/maps/api/geocode/json?address=${inititialUrl2}`,
      json:true,
    },(error,response,body)=>{
      if(error){
        console.log('unable to connect to the server');
      }
      else if(body.status==='ZERO_RESULTS'){
        reject('no address found ');
      }
      else if(body.status==='OK'){
        var resultObj={
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng,
        }
      resolve(resultObj);
    }
    });
  })
}

geoPromise('123456789').then((result)=>{
  console.log(JSON.stringify(result,undefined,3));
},(errorMessage)=>{
  console.log(errorMessage);
});
