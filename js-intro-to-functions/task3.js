

function checkOrder(available, ordered) {
  if (available < ordered) {
    return "Your order is too large, we don’t have enough goods.";
  } else if (ordered === 0) {
    return "Your order is empty";
  } else {
    return "Your order is accepted";
  }
} 
console.log("Order 15 from 10 available:", checkOrder(10, 15));
console.log("Order 0 from 10 available:", checkOrder(10, 0));
console.log("Order 5 from 10 available:", checkOrder(10, 5));