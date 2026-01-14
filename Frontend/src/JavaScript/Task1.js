// Implement this functions - 
// getItemTotal(id) - on the basis of id
// getTotalAmount()
// checkDeliveryCharge(totalAmount)
//              (If totalAmount is greater than 500 - "Free Delivery", Else - "Delivery Charge: ₹50")
// printFinalSummary(), 
// output - Total Amount: ₹950
//                          Free Delivery

const orders = [
  { id: 1, item: "Notebook", price: 50, quantity: 2 },
  { id: 2, item: "Pen", price: 10, quantity: 5 },
  { id: 3, item: "Bag", price: 800, quantity: 1 }
];
console.log(orders);


function getItemTotal(id){
  let orderId = orders.find( e => e.id===id);
  return orderId ? orderId.price*orderId.quantity : console.log("Not found");
}
console.log(getItemTotal(1))
console.log(getItemTotal(2))
console.log(getItemTotal(0))
console.log(getItemTotal(5))


let total=0;
function getTotalAmount(orders){
  for(let i of orders){
    total+=i.price*i.quantity;
  }
  return console.log(total);
}

getTotalAmount(orders);


function checkDeliveryCharge(total){
  if(total>=500){
    console.log("Free Delivery");
  }else{
    console.log("Delivery Charge: ₹50");
    total+=50;
  }
}

checkDeliveryCharge();


function printFinalSummary(){
  checkDeliveryCharge();
  console.log(`Total Amount:${total}`)
}

printFinalSummary();