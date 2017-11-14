

const geoweather= require('./geoWeather/geoWeather');
const geocode = require('./geocode/geocode');
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
var lat;
var lng;
geocode.geocode(argv.address,(errorMessage,results)=>{
  if(errorMessage){

    console.log(errorMessage);
  }
  else{
    console.log(results.address);
    geoweather.geoWeather(results.latitude,results.longitude,(errorMessage,weatherResults)=>{
      if(errorMessage){
        console.log(errorMessage);

      }
      else{

        console.log(JSON.stringify(weatherResults,undefined,3));
          }

    });

      }

});
