// Use same name function but different parameters or return type

// Step 1: Signature of a functions. Function without a body is a function signature.
// One implementation satisfying all signatures

function getInfo(id:number):string;

function getInfo(name:string):string;


function getInfo(param:string|number):string
{
    if(typeof param === "number"){
        return `User Id is ${param}`;
    } else {
        return `User Name is ${param}`
    }
}

console.log(getInfo("Geo"));
console.log(getInfo(1));


function getSum(a:number, b:number, c:number):number;
function getSum(a:number, b:number):number;

function getSum(a:number, b:number, c?:number):number
{
    if(c !== undefined){
        return a + b + c;
    } else {
        return a + b;
    }
}

console.log(`Sum of 3 and 4 is ${getSum(3, 4)}`);
console.log(`Sume of 3, 4, and 5 is ${getSum(3, 4, 5)}`);


function processInput(input:string):string;
function processInput(input:number):number;

function processInput(input: string | number): string | number
{
    if(typeof input === "string"){
        return input.toUpperCase();
    } else {
        return input*2;
    }
}

console.log(`Capital of janngeoffrereyescatayong ${processInput('janngeoffreyreyescatayong')}`);
console.log(`Double the number 5 ${processInput(5)}`);


function greet(name:string):string;
function greet(age:number):string;
function greet(isMarried:boolean):string;


function greet(value:string | number |boolean): string
{
    if(typeof value === "string"){
        return `Hello! ${value}`
    } else if(typeof value === "number"){
        return `You are ${value} years of age`
    } else {
        let result:string = value? 'Married' : 'Single';
        return result;
    }
}

console.log(greet("Jann Geo"));
console.log(greet(5));
console.log(greet(true));