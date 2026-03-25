// Callback Function  - Function pass as an argument
// If you want a function to execute after another function
// Common in asynchronous operation
// One at a time

function showMessage(message:string):void
{
    console.log(message);
}

function shakeHand(name:string){
    console.log(`Nice meeting you ${name}`)
}


function greet(name:string, smg:(message:string) => void, sHand:(name:string) => void)
{
    console.log(`Hey ${name}`)
    smg("Welcome!");
    sHand(name)

}

greet("Geo", showMessage, shakeHand);


// Example 2

function sum(a:number, b:number, callback:(result:number)=> void )
{
    let result = a + b;
    callback(result);
}

// Callback Function
function displayResult(result:number):void
{
    console.log(result);
}
console.log(`*****Example 2*****`)
sum(10, 20, displayResult);

