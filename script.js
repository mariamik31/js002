'use strict' ;

// N1

for (let x = 5; x < 100; x++) {
    console.log([x]);
}

// N2

let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for (let i=0; i <array1.length; i++) {
    const number = array1[i];
    if (number>0 && number<10){
        console.log(number);
    }
}

for (let number of array1){
    if (number>0 && number<10)
    console.log(number);
}

// N3

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < array2.length; i++) {
    const number = array2[i];
    if (number==5){
    console.log("stop");
break;
    }
}

for (let number of array2){
    if(number==5)
    console.log("stop");
}

// N4

let array3= [1, 2, 3, 4, 5];


// N5

let array4= [1, 2, 3, 4, 5];

// N6

let array5 = [1, 2, 3, 7, 6, 9];
for (let item of array5){
if (item == 7){
continue;} 
    console.log(item)
}

// N7

let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active",
}

// dot notation
console.log(user.studentstatus);

// braket notation
console.log(user["studentstatus"]);

// N8

let user2 = {
    name: "anna",
    age: 20,
    studentstatus: "active",
}

 if (user2.age < 18 && studentstatus === "active" ) {
    console.log("hello user")
} else if (
    user2.name === "levani") {
    console.log("hello levan")
} else if (
    user2.studentstatus === "active" || user2.age < 25 ) {
    console.log("hello anna")
} else {
    console.log("error")
}

let result = user2.age < 18 && studentstatus == "active" ? "hello user" : user2.name == "levani" ? "hello levani" : user2.studentstatus == "active" || user2.age < 25 ? "hello anna" : "error" ;

console.log(result);

// N9

let array6 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
for (let num = 0; num < array6.length; num++) {
    const x = array6 [num];
    if (x % 2 === 0){
        console.log(x);
    }
}

// N10

let users = [
    {username: "giorgi" , status: false},
    {username: "levani" , status: false},
    {username: "anna" , status: true}
]
for (let name of users){
    if (name.status === true){
    console.log(true); }
}

// N11 

let array7 = [32, 14, 10, "hello", null, "40", 50];
for (let element of array7){
    if (element % 5 === 0 && typeof element === "number"){
        console.log(element);
    }
}

// N12