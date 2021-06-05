const Food = require("./Food");

class Order {
  orderID;
  customer;
  food = [];
  totalprice;
}

module.exports = Order;
