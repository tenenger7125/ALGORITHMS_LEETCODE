/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {  
    let num = digits.pop() + 1;
    let result = `${num % 10}`;
    
    while (num >= 10) {
       num = digits.length >= 1 ? digits.pop() + 1 : 1; 
       result = (num % 10) + result;
    }
    
    digits.push(...result)
    return digits
};