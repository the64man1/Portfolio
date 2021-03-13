//WRITE YOUR CODE BELOW
var customerOrder = {
	drinkName: "Tea",
  numOfSugars: 2,
  ready: false
};

console.log(customerOrder.drinkName, customerOrder.numOfSugars);

if (customerOrder.ready === true) {
  console.log("Ready for pick-up");
} else {
  console.log("Still in order queue");
}