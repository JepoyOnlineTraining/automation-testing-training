// Variable - Is a container which can hold/store data

let x = 10;
// x = 'Name';

console.log(x);

// var, let, const

// Syntax: keyword variableName = data type=value
// Ex: var age:number=30;

var age:number=30;
console.log(age);
console.log(typeof(age));
console.log(`age variable has a value of ${age} with data type of ${typeof(age)}`);

// var vs let vs const

/**
 *      1) Scope
 *      2) Declaration/Value Assignment
 *      3) Re-declaration
 *      4) Re-initialization/Re-assignment
 *      5) Hosting
 */

// Scope
// var is not recommended to use in TypeScript. 
// try to avoid var. It has function scope and can lead to unexpected

// let is a keyword, use if you want to change the value of a variable
// const is a keyword, use if you don't want to change the value of a variable.


// Scope - Accessible are (Functional Scope (var) & Block Scope (let and const))

// function test()
// {
//     // Anything inside the function is a functional scope
// }

// if(true){
//     // Anything inside a condition is a block scope
// }


// Example 1: Scope var (functional scope)

function varScope()
{
    if(true){
        var msg = 'Hello Geo!';
        console.log(`Inside block ${msg}`)
    }

    console.log(`Outside the block ${msg}`)
}

varScope();

// Example 2: let and const (Block Scope)

function blockScope()
{
    if(true){
        let msg = 'let keyword';
        const greet = 'const keyword'

        console.log(msg);
        console.log(greet);
    }

    // console.log(msg);
    // console.log(greet);
}

blockScope();

// Declaration - creating variable without value, initialization create variable with value.


// Hoisting var
// console.log(a);  - print undefined
// var a  = 10;
// console.log(10);

// Hoisting let and const
// console.log(a); - print not initialization error
// let a = 10;
// console.log(a);

// console.log(a);
// const a = 10;
// console.log(a);