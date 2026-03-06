// Arrow function know as lambda functions - concise mechanism to represents anonymous function


/**
 * Syntax:
 * let variable = (parameters) =>
 * {
 *     // block of code
 * }
 * 
 * variable();
 */

// Example 1: Arrow Function witn no Parameters and No Return Type

let greeter = ():void =>
{
    console.log("Hello TypeScript")
}

greeter();

// Example 2: Arrow Function with Parameters and Return Type

let total = (a:number, b:number):number =>{
    return a + b;
}

console.log(`Total of 12 and 13 is ${total(12, 13)}`);

// Example 3: Arrow Function with Implicit Return

let add = (a:number, b:number):number => a + b;

console.log(add(1, 2))

let product = (a:number, b:number):number => a * b;

console.log(`Product of 3 and 5 is ${product(3, 5)}`);

// Example 4: Arrow Function with optional parameters

let displayInformation = (id:number, name:string, mailId?:string): void =>
{
    console.log(`ID is ${id}`);
    console.log(`NAME is ${name}`);

    if(mailId !== undefined){
        console.log(`MAIL ID is ${mailId}`);
    }
    

}

displayInformation(1, "Xavie", "xavie@email.com");
displayInformation(1, "Xavie");
displayInformation(1, "Xavie", "test@email.com");

// Example 5: Arrow Function with Default parameter

let getDiscount = (price:number, rate:number= 0.10):void =>
{
    let discount:number = price * rate;
    console.log("Discount Amount is", discount);
}


getDiscount(100, 0.10);
getDiscount(1000, 0.12);

// Example 6: Arrow Function with Rest Parameters

let totalValue = (...items:number[]):void => 
{
    let total = 0;
    for(let i:number = 0; i < items.length; i++){
        total = total + items[i];
    }
    console.log(total);
}

totalValue(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Example 7: Arrow Function with Rest Parameters multiple Types

let getTotalElementCount = (...items:(number|string)[]) =>
{
    console.log(`Total number of elements is ${items.length}`)
}

getTotalElementCount(1, "2", 3, 4, "7", "890")