var bill_amount = prompt("Please Enter Your Total Bill Amount:");
var tip_amount = Numeral(bill_amount * 0.20).format('$0,0.00');
var total_amount = Numeral(bill_amount + tip_amount).format('$0,0.00');

alert("Bill Amount: " + bill_amount + "\nTip Amount: " + tip_amount + "\nTotal Amount Due: " + total_amount);
