// Function without a name. Nameless funciton. Unnamed function.



/**
 * 
 * Syntax
 * 
 * let variable = function(parameters)
 * {
 *    // function body.
 * }
 * 
 * // Calling function
 * variable();
 * 
 */


// Example 1: Anonymous Function


let msg =  function():string
{
    return "Hello Typescript";
}

console.log(msg());


// Example 2: Anonymous Function with Parameters

let multiply = function(a:number, b:number):number
{
    return a*b;
}

console.log(`Product of 5 and 5 is ${multiply(5, 5)}`)
