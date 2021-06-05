const Order = require("./Order");
const Food = require("./Food");
const prompt = require("prompt-sync")();

var allOrder = [];

function newOrder() {
  const customer_name = prompt("Customer Name: ");
  var foodList = [];
  var isFood = true;
  while (isFood) {
    const food_name = prompt("Food? : ");
    const food_price = prompt("Price? : ");
    console.log(`--------------`);
    if (food_name != "") {
      const food = new Food(food_name, food_price);
      foodList.push(food);
    } else isFood = false;
  }
  const order = new Order();
  order.orderID = 424;
  order.customer = customer_name;
  order.food = foodList;
  order.totalprice = 999;

  allOrder.push(order);
  printReceipt(order);
}
function printReceipt(order) {
  console.log(JSON.stringify(order));
  //   console.log(`orderID: ${order.orderID}`);
  //   console.log(`Customer Name: ${order.customer}`);
  //   foodList = order.food;
  //   console.log(foodList);
  //   console.log(`Total Amount = ${order.totalprice}`);
}
function showOrders() {
  console.log(JSON.stringify(allOrder));
}

module.exports = { newOrder, showOrders };
