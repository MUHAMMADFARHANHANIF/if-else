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
