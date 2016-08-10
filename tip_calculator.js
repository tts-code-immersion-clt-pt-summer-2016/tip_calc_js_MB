var bill_amount = prompt("Please Enter Your Total Bill Amount:");
var tip_amount = Number(bill_amount) * 0.20;
var total_amount = Number(bill_amount) + Number(tip_amount);

alert("Bill Amount: $" + bill_amount + "\nTip Amount: $" + tip_amount + "\nTotal Amount Due: $" + total_amount);
