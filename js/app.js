let e = document.getElementById('div')
// .innerHTML = 'Hello from the app.js';
// alert('hello form js alert');
console.log('hello from `console.log`')
console.log(e);
let x = 3;
let y = 5;
y %= x
// alert(y);
/*
    Boolean : true, false 
    Aarray : ['string', 28, '28']
    Object : {var :'string', age : 28, num : '28'}
    String : 'string'
    Num : 28
    Undefined
    Null
    NaN = Not a Number
    Symbol
    ///////// typeof /////////
*/

// We use switch insted of if/else if/else if/else if/else if/else ...!
let key = 'Wendsday',
    dispaly;

switch (key) {
    case 'Sunday':
        dispaly = key
        break;
    case 'Monday':
        dispaly = key
        break;
    case 'Tuseday':
        dispaly = key
        break;
    default:
        dispaly = 'Not a day'
        break;
}
// alert(dispaly)

function fun() {
    alert('Function from js renderd by button on html')
}
let
    hasDiscount = false,
    price = 500,
    discount = 50;
string = 'to ignore the \''

if (hasDiscount === true) {
    price -= discount;
} else {
    price = price;
}
document.getElementById('discount').innerHTML = 'Price = ' + price;
let num1 = 28e3,
    num2 = 7.12345,
    num3 = num2.toString(),
    num4 = num2.toFixed(2),
    num5 = num2.toPrecision(2);

document.write(' num1: '+num1 + '<br>');
document.write(' num2: '+num2 + '<br>');
document.write(' num3: to string'+num3 + '<br>');
document.write(' num4: fixed to 2 digits '+num4 + '<br>');
document.write(' num5: precision to 2 digits! '+num5 + '<br>');
// window.alert('hello form js \'window.alert\'');