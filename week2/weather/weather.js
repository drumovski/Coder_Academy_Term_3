const dataString = require('./data');
class Weather {
  constructor() {
    this.data = JSON.parse(dataString);
}
}
// returns an array containing the max_temp from consolidated_weather array.
Weather.prototype.maxTemps = function() {

  return this.data.consolidated_weather.map(x => x.max_temp)
}
// **averageTemp** - returns a string with 2 decimal places. (It should be the average temperature of the week, use the the_temp data.)
Weather.prototype.averageTemp = function() {
    let the_temp_array = this.data.consolidated_weather.map(x => x.the_temp)
    let average_temp = the_temp_array.reduce((acc, sum) => acc+sum, 0)/this.data.consolidated_weather.length
    return average_temp.toFixed(2);
}
// *forcast** - This takes in a day with the format (yyyy-mm-dd) and returns a string. 
// The string should read:  The temperature was (the_temp) degrees with a high of (max) and a low of (min).  Each temperature should have at most 2 decimal places.
// If no data is found return a string: No information for that day

Weather.prototype.forcast = function (date) {
 let day = this.data.consolidated_weather.find(x => x.applicable_date == date)
 if (day) {
   return `The temperature was ${day.the_temp.toFixed(2)} degrees with a high of ${day.max_temp.toFixed(2)} and a low of ${day.min_temp.toFixed(2)}.` 
 }
else {
  return "No information for that day"
}
 
// array.find(function(currentValue, index, arr),thisValue)
}

// let weather1 = new Weather()

// // console.log(weather1)
// console.log(weather1.maxTemp());
// console.log(weather1.averageTemp());
// console.log(weather1.forecast("2015-05-26"))
// // Don't change this line
module.exports = Weather;



// totalCost: (email, orderId) => {
//     const order = drinkShop.customers[email].orders.find(order => order.id === orderId);
//     console.log(order.items);
//     // const total = order.items[0].productId;
//     let total = 0
//     for (item of order.items){
//         total += (shop.productCost(item.productId)*item.qty);
//     }
//     return total;
//     // total item times price
//     // Return the total cost of an order.
// },
