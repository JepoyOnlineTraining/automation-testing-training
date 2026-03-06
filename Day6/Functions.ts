
/**
 * 
 *  Function Syntax
 *  
 *  function functionName(parameter): returnType 
 * {
 *      // block of code
 * }
 * 
 */


// Example 1: Named Function with no parameters and no return type

function display():void
{
    console.log("Welcome to Typescript");
}

display();

// Example 2: Function with 2 parameters

function addNumbers(x:number, y:number):number
{
    return x + y;
}

console.log(addNumbers(1, 2))

// Example 3: Function with Rest Parameters


function sumNumbers(...nums:number[]):number
{
    let sum:number = 0;
    for (let i:number = 0; i < nums.length; i++){
        sum = sum + nums[i];
    }

    return sum;
}


console.log(sumNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

// Example 4: Function with Rest Parametes with multiple types.

function findElements(...elements:(number|string)[]):number
{
    return elements.length
}

console.log(findElements(1, "2", "Color", 3, 4, 7, "10"))

// Example 5: Function with optional parameters

function displayDetails(id:number, name:string, mailId?:string):void
{
    console.log("ID", id);
    console.log("Name", name);

    if(mailId !== undefined){
        console.log("Email Id", mailId) 
    }
    
}

displayDetails(1, "Pass", "test@email.com");
displayDetails(1, "Test");


// Example 6: Function with default parameters

function calculateDiscount(price:number, rate:number = 0.10):void
{
    let discount:number = price * rate;
    console.log("Discount Amount", discount);
}

calculateDiscount(1000, 0.30);
calculateDiscount(2000);





