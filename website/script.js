console.log('Hello World');

//window.alert('This is an Alert !');

//this is a comment

/* This is a comment */


document.getElementById("myTitle").textContent = `Hello World`;

let x = 250;

document.getElementById("xValue").textContent = `x value is ${x}`;

console.log(typeof x);


let isStudent = true;

console.log(`Is he a student ? : ${isStudent}`);


let student = 30;

student = student + 1; // student +=1 

//for increase by 1 -> student++

console.log(student);

/* operator precedence

1. parenthesis
2.exponents
3. X , / , %
4. + , -

*/


// accept user input 

//easy way using window prompt

/*
let name; 
name = window.prompt("What is your name ? ");

console.log(name);

*/
let myName;

document.getElementById("btn").onclick = function(){

    myName = document.getElementById("myName").value;
    console.log(myName);

    document.getElementById("greetingUser").textContent = `Welcome ${myName} ...!`;


}

//type conversion

/*

let age = window.prompt("How old are you ?");

age = Number(age);

age +=1;

console.log(age,typeof age)

*/


let randNum = Math.floor(Math.random()*6);

console.log(randNum);







