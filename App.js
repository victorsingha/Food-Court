const Order = require("./Order");
const Controller = require("./Controller");
const prompt = require("prompt-sync")();

var NOTEXIT = true;
while (NOTEXIT) {
  console.log(`Enter Choice:
New Order    [1]
Show Orders  [2]
Exit         [3]`);
  let input = prompt();
  switch (input) {
    case "1":
      Controller.newOrder();
      break;
    case "2":
      Controller.showOrders();
      break;
    case "3":
      NOTEXIT = false;
      break;
    default:
      console.log(input);
      break;
  }
}
