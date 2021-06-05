const Order = require("./Order");
const Food = require("./Food");

var allOrder = [];

function newOrder() {
  const customer_name = prompt("Customer Name: ");
  var foodList = [];
  var isFood = true;
  while (isFood) {
    const food_name = prompt("Food? : ");
    const food_price = prompt("Price? : ");
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
}
function showOrders() {
  console.log(allOrder);
}

module.exports = { newOrder, showOrders };
