

const axiom = require('axios');
const yargs = require('yargs');
const argv = yargs
             .options({
               a:{
                 describe: 'address of the location',
                 alias: 'address',
                 string: true,
                 demand: true,
               }
             })
             .help()
             .alias('help','h')
             .argv;

var address = encodeURIComponent(argv.address);
var geoCodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`;
axiom.get(geoCodeUrl).then((response)=>{
  if(response.data.status==='ZERO_RESULTS')
  {
    throw new Error('no address found');
  }
  console.log(response.data.results[0].formatted_address);
  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  console.log(`latitude: ${lat}, longitude: ${lng}`);
  geoWeatherURL=`https://api.darksky.net/forecast/b804a04d108f8da07a6cd5d1af44652d/${lat},${lng}`;
  return axiom.get(geoWeatherURL);
}).then((response)=>{
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  console.log(`it's currently ${temperature} and it feels like ${apparentTemperature}`);
}).catch((e)=>{
  if(e.code=='ENOTFOUND')
     console.log(e);
  else {
     console.log(e.message);
}
});
