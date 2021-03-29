'use strict'
let e = document.getElementById('div')
// .innerHTML = 'Hello from the app.js';
// alert('hello form js alert');
// console.log('hello from `console.log`')
// console.log(e);
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
// document.getElementById('discount').innerHTML = 'Price = ' + price;
let num1 = 28e3,
    num2 = 7.12345,
    num3 = num2.toString(),
    num4 = num2.toFixed(2),
    num5 = num2.toPrecision(2);

document.write(' num1: ' + num1 + '<br>');
document.write(' num2: ' + num2 + '<br>');
document.write(' num3: to string' + num3 + '<br>');
document.write(' num4: fixed to 2 digits ' + num4 + '<br>');
document.write(' num5: precision to 2 digits! ' + num5 + '<br>');
// window.alert('hello form js \'window.alert\'');

let counter2 = 1;
let guessingArray = ['skating', 'bodybuilding', 'boxing', 'walking'];

function sports(sport) {
    let userGuess2 = prompt('I enjoy doing sports;\nCan you guess any of them!!');
    while (counter2 <= 6) {
        for (let i = 0; i < guessingArray.length; i++) {
            if (userGuess2.toLowerCase() == guessingArray[i]) {
                alert('Great job ' + userName);
                score++;
                counter2 = 7;
                //console.log(j);
                break;
            }
        } if (counter2 !== 7) {
            userGuess2 = prompt('Not exctly ' + userName + '\nTry again!');
            counter2++;
        } else if (counter2 === 6) {
            alert('Well, the sporst are\nskating, bodybuilding, boxing, & walking');
        }
    }
}

// sports();
let ConsArray = [];
function Constractor(input1, input2) {
    this.input1 = input1;
    this.input2 = input2;
    ConsArray.push(this);

}

let cons2 = new Constractor('second Input', 40);
let cons1 = new Constractor('first Input', 30);
console.log(ConsArray);
// event.target.name.value
// let li = document.getElementById('liId');
// let creatLi = document.createElement('li');
// li.innerHTML = '';
// li.className = 'liClass';
// li.id = 'liId';

let starNum = 4;
function pattern(starNum) {
    for (let i = 0; i < starNum; i++) {
        let stars = '';
        for (let x = 0; x <= i; x++) {
            stars += '*';


        }
        console.log(stars);
    }

}
// pattern(starNum);

function dimond(starNum) {
    for (let i = 0; i < starNum; i++) {
        let stars = '';
        for (let x = 0; x <= i; x++) {
            const element = array[x];

        }

    }


}
let table = document.getElementById('table');
function header() {
    let thead = document.createElement('thead');
    table.appendChild(thead);
    for (let i = 0; i < array.length; i++) {
        let th = document.createElement('th');
        thead.appendChild(th);
        th.innerText=
    }



}