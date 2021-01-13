
function calculateMeanTemperature(forecast) {
  const { today : { low: todayLow , high:todayHigh},
         tomorrow: {low: tomorrowLow, high:tomorrowHigh}
  }= forecast
         
 

  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

//calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }) возвращает 37.