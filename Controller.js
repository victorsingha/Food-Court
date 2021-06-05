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
  total = 0;
  const order = new Order();
  order.orderID = makeid(5);
  order.customer = customer_name;
  order.food = foodList;

  foodList.forEach((f) => {
    total = total + parseInt(f.price);
  });

  order.totalprice = total;

  allOrder.push(order);
  printReceipt(order);
}

function printReceipt(order) {
  console.log(order);
  //console.log(JSON.stringify(order));
}

function showOrders() {
  //console.log(JSON.stringify(allOrder));
  console.log(allOrder);
}

function makeid(length) {
  var result = [];
  var characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result.push(
      characters.charAt(Math.floor(Math.random() * charactersLength))
    );
  }
  return result.join("");
}

module.exports = { newOrder, showOrders };
