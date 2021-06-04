/* 
validDenomination(coin):

Returns true if the coin function parameter is a valid coin value of either 1, 5, 10, 25, 50, or 100
Must use the array indexOf() method, and !== equality operator
This function can be coded to be a single line of code

valueFromCoinObject(obj):

Returns the calculated value of a single coin object from the obj function parameter
Must use object deconstruction to create constant variables denom and count from the obj function parameter, using default object values of 0 for denom and count

valueFromArray(arr):

Iterates through an array of coin objects and returns the final calculated value of all coin objects
Must use Array.reduce() method, and an arrow function with the Array.reduce() method
Must call valueFromCoinObject()
Extra credit: Handle scenario where the arr function parameter, rather than an array of coin objects, contains another array of coin objects

coinCount(...coinage):

This function is the only exported function from the code module
Calls and returns the result of valueFromArray() function, which will be the value of all coin objects with the coinage array function parameter */

//create coin array to be iterated through in different functions

//const coinArray = [1, 5, 10, 25, 50, 100];

/* function validDenomination(coin) 
{
    for (index = 0; index < coinArray.length; index++)
    {
        if (coinArray.indexOf(index) !== coin)
        {
            return false
        }
        else 
        {
            return true 
        }
    }
} */

const validDenomination = (coin) => {for (let value of coinArray = [1, 5, 10, 25, 50, 100]){ if (coinArray.indexOf(coin) !== -1){return true}}};
/* 
test with
console.log(validDenomination(5));
console.log(validDenomination(23)); 
 */

const valueFromCoinObject = (obj) => { const {denom, count} = obj; return denom * count; };

/* 
const valueFromArray = (arr) => arr.reduce(sumNums, 0);
function sumNums(total, obj)
{
    return valueFromCoinObject(obj) + total;
}; 
*/

const valueFromArray = (arr) => arr.reduce(function (total, obj){ return valueFromCoinObject(obj) + total}, 0);

const coinCount = (...coinage) => {return valueFromArray(coinage)};



/* The functions are listed in the recommended order for development.
The first two functions can be tested individually.
The last two functions depend on other functions and should be coded last.
Initially, code each function using whatever technique works, then refactor the functions to meet the specific requirements.
Test the code module using the following console.log() statements: */


console.log("{}", coinCount({denom: 5, count: 3})); 
console.log("{}s", coinCount({denom: 5, count: 3},{denom: 10, count: 2})); 
const coins = [{denom: 25, count: 2},{denom: 1, count: 7}]; 
console.log("...[{}]", coinCount(...coins)); 
console.log("[{}]", coinCount(coins));  // Extra credit 

module.exports = 
{
 coinCount , 
 coins 
};