
  totalCost: (email, orderId) => {
    let total = 0;
    for (let order of drinkShop.customers[email].orders) { //iterate through orders to find the orderID
      if (order.id == orderId) {
        for (let item of order.items) { //iterate through items of the found order
          let {productId,qty} = item; //destructure the item values
          total += shop.productCost(productId) * qty; //calculate running total
        }
    return total;// Return the total cost of an order.
      }
    }
  },

totalCost: (email, orderId) => {
    const order = drinkShop.customers[email].orders.find(order => order.id === orderId);
    console.log(order.items);
    // const total = order.items[0].productId;
    let total = 0
    for (item of order.items){
        total += (shop.productCost(item.productId)*item.qty);
    }
    return total;
    // total item times price
    // Return the total cost of an order.
},

totalCost: (email, orderId) => {

let findOrder = drinkShop["customers"]["jane@doe.com"]["orders"];
let findProducts = drinkShop["products"];
let totalCost = 0;


findOrder.forEach((order) => {
if (order.id !== orderId) {
return "not a valid order"
}

order.items.forEach((item) => {
findProducts.forEach((product) => {
totalCost +=
product.id === item.productId ? product.price * item.qty : false;
});
});
});
return totalCost;


},
