## CIT 281 p3
   
## Outcome:

This project had us write code and run it through node.js in the terminal. 
We also created a webserver that would parse information from the URL to perform tasks. 
This webserver titled 'coinage' exported functions from a code module and coints coins and tells the user the number, denomination, and total value.   
This project I used arrow function notation we learned in the lab to condense my code.
   
**[p3 Repo](https://github.com/Myles-P-D/cit281-p3)**
   
## Code:
Here are links to all of the project code:   
   
**[server](https://github.com/Myles-P-D/cit281-p3/blob/main/p3-server.js)**    
   
**[Module](https://github.com/Myles-P-D/cit281-p3/blob/main/p3-module.js)**   
   
**[index.html](https://github.com/Myles-P-D/cit281-p3/blob/main/index.html)**   
   
Below are some excerpts from the code module used in this webserver.    
   
```javascript
const validDenomination = (coin) => {for (let value of coinArray = [1, 5, 10, 25, 50, 100]){ if (coinArray.indexOf(coin) !== -1){return true}}};
const valueFromCoinObject = (obj) => { const {denom, count} = obj; return denom * count; };
const valueFromArray = (arr) => arr.reduce(function (total, obj){ return valueFromCoinObject(obj) + total}, 0);
```
   
## Images:   
    
Server 3 coin value of 25 screenshot.    
   
![3X25](https://github.com/Myles-P-D/cit281-p3/blob/main/3X25_screenshot.png?raw=true "3X25")    
      
Server option 1 screenshot.    
   
![option 1](https://github.com/Myles-P-D/cit281-p3/blob/main/opt1_screenshot.png?raw=true "opt 1")    
      
Server option 3 screensot.    
   
![option 3](https://github.com/Myles-P-D/cit281-p3/blob/main/opt3_screenshot.png?raw=true "opt 3")    
         
Terminal output screenshot.    
   
![terminal output](https://github.com/Myles-P-D/cit281-p3/blob/main/outputScreenshot.png?raw=true "terminal output")    
   
