percentage = +prompt('percentage!');

if(percentage >100 || percentage <0 ){
    console.log("percentage error!");
}
else if (percentage < 40){
    console.log("fail");
}

else if (percentage >=40 && percentage < 50) {
    console.log("your grade is D");
    
}

else if (percentage >=50 && percentage < 60) {
    console.log("your grade is c");
    
}

else if (percentage >=60 && percentage < 70) {
    console.log("your grade is b");
    
}

else if (percentage >=70 && percentage < 80) {
    console.log("your grade is A");
    
}

else if (percentage >=80 && percentage < 90) {
    console.log("your grade is A1");
    
}

else if (percentage >=90 && percentage <= 100) {
    console.log("your grade is A1+");
    
}



// question no 1


var number = +prompt("enter number is division by 3")
if (number % 3 == 0) {
    console.log("number is divisible by 3 ");
    
} 
else{
    console.log("number is not divisible by 3");
}



// question no 2

var number = +prompt("enter even and odd number")
if (number % 2 == 0) {
    console.log("even number");
    
} 

else{
    console.log("odd number");
}


// question no 3

var age = +prompt("enter your age")
if (age > 18) {
    console.log("old enough");
}
else{console.log("Too young");}


// question no 4

var myName ="Muhammad farhan"
var userName = prompt("enter My name")
if (myName == userName){
    console.log("thanks your answer is corect");
}
else{
    console.log("spelings mistake");
}

// question no 5 


var number = +prompt("enter  number")
if (number % 3 == 0) {
    console.log("number is divisible by 3 ");
    
} 
else{
    console.log("number is not divisible by 3");
}

// question no 7 


var number = +prompt('enter a 0 to 2400 number')

if (number >=0 && number <=1200) {
    console.log("good morning");
    
}
else if (number >1200 && number <=1700){
    console.log("good afternoon");
}
else if(number >1700 && number <=2100){
    console.log("good evening");
}
else if (number >2100 && number <2400 ){
    console.log("good night");
}





// question no 9

var number = +prompt("leap year check enter number")
if (number % 4 == 0) {
    console.log("your years is leap year");
    
} 
else{
    console.log("not leap year");
}

// quextion no 10

var password = prompt("enter your password")
var retypePassword = prompt("enter retype password")
if (password == retypePassword) {console.log("correct! password are same");
    
}
else(console.log("incurect retypepassword please enter same password"))


// question no 11



var myName = "farhan"
var inputNmae = prompt("name check")
if (myName == inputNmae){
    document.write("welcome Farhan")
}
else(document.write("you not Farhan"))



// question no  12


var hour = +prompt("enter hour 0 to 24")
if (hour < 18) { 
    var greeting = "good day"
} 
else{var greeting = "good evening"}

console.log(greeting);

// question no 13

var firstNumber = prompt("enter first number")
var secondNumber = +prompt("enter second number")

if (firstNumber > secondNumber){
    console.log(`${firstNumber} is larger than ${secondNumber}`);
}
else if (secondNumber > firstNumber){
    console.log(`${secondNumber} is larger than ${firstNumber}`);
}
else{console.log(`${firstNumber} and ${secondNumber} are equal`);}