console.log("Task 1");


let now = new Date();

let today = now.toLocaleString('default', { weekday: 'long' })

var time = now.toLocaleTimeString();

// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

console.log(`Today is : ${today}`);
console.log(`Current time is : ${time}`);


// Task 2
console.log("");
console.log("Task 2");

console.log(`${now.toDateString()}`);


console.log("");


// Task 3
console.log("Task 3");

let a = 5, b = 6, c = 7;

let s = ((a + b + c) / 2);

let area = Math.sqrt(s * (s - a) * (s - b) * (s - c))

console.log(area.toFixed(3));


console.log("")


// Task 4
console.log("Task 4")


let string1 = "Saylani";
let string2 = [];

for (let i = 1; i <= string1.length; i++) {
    string2[i] = string1[string1.length - i];
}

console.log(string2.join(""));





// program to check leap year
function Leap() {
    const year = prompt('Enter a year:');

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        alert(year + ' is a leap year');
    } else {
        alert(year + ' is not a leap year');
    }
}
console.log("")

// Task 6



console.log("Task 6")

for (var year = 2014; year <= 2050; year++) {
    var d = new Date(year, 0, 1);
    if (d.getDay() === 0)
        console.log("1st January is  Sunday  " + year);
}

// Task 7

function random() {
    const num = prompt('Enter a Guess Number: ');
    let rand = Math.floor(Math.random() * 10);
    num == rand ? alert("Number Matched!") : alert("Number did not match")

    console.log(rand + ' ' + num);
}












// Task 8


console.log("")
console.log("Task 8")



let d8 = new Date();
d8.setFullYear(d8.getFullYear() + 1, 7, 14);

var Time = now.getTime() - d8.getTime();
  
var Days = Difference_In_Time / (1000 * 3600 * 24);

console.log( " in today and 14 august: ", Math.floor(Days < 0 ? Days * -1 : Days));













//Task 9

function operation() {
    let num1 = parseInt(prompt("Number 1: "));
    let num2 = parseInt(prompt("Number 1: "));
    let operand = prompt(" + or * : ");

    if (operand == '*') {
        alert(num1 * num2);
    } else {
        alert(num1 + num2);
    }
}



//Task 10


function temp() {
    let a = prompt("temperature?");
    let b = prompt("C OR F ?");

    b.toLowerCase();

    if (b == 'c') {
        var cToFahr = a * 9 / 5 + 32;
        alert(cToFahr);
    } else {
        var fToCel = (a - 32) * 5 / 9;
        alert(fToCel);
    }

}

function sum() {
    let a = prompt("num1: ");
    let b = prompt("num2: ");
    a = parseInt(a);
    b = parseInt(b);
    alert(a == b ? 3 * (a + b) : a + b);
}







// Task 12

function check(){
    let a = prompt("Enter num: ")
    alert((Math.abs(100 - a) <= 20) || (Math.abs(400 - a) <= 20));
}


function Largest() {
    let a = Number(prompt("Enter Num1: "));
    let b = Number(prompt("Enter Num2: "));
    let c = Number(prompt("Enter Num3: "));

    let arr = [a,b,c];
    let max;

    for (let i=1; i<3; i++) {
        if (arr[i] > arr[i-1]) {
            max = arr[i]
        }
    }

    alert(max + " is the largest number");

}


function toUpper() {
    let nam = prompt("Give any String");
    let arr = [];
    
    for (i=0;i<nam.length;i++) {
        if (nam[i] == ' ' && nam[i+1] != ' ') {
            arr[i] = ' ';
            arr[i+1] = nam[i+1].toUpperCase();
            i++;
        }else {
            arr[i] = nam[i];
        }
    }
    arr[0] = nam[0].toUpperCase();
    
    console.log(arr.join(""));
}