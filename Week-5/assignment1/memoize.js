const temperatureData = {
  "New York": 20,
  London: 18,
  Paris: 22,
  Tokyo: 25,
  Sydney: 28,
};

let temperatureCache = {};
function getTemperatureForCity(city) {
  if (temperatureCache.hasOwnProperty(city)){
    console.log("Retrieving From Cache")
    return temperatureCache[city]
  }
  else{
    let result = temperatureData[city]
    temperatureCache[city] = result
    console.log("tem cache",temperatureCache)
    return result
  }
}

console.log(getTemperatureForCity("Paris"))
console.log(getTemperatureForCity("Paris"))
console.log(getTemperatureForCity("Paris"))
console.log(getTemperatureForCity("Paris"))