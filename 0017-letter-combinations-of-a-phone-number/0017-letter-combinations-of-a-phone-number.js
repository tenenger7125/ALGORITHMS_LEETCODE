/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const phoneString = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }
    let answer = [];
    
    digits.split("").forEach(digit => {
        const arr = phoneString[digit];
        let temp = [];
        
        if (answer.length === 0) temp = arr;
        else answer.forEach(char => arr.forEach(newChar => temp.push(char + newChar))) 
        
        answer = temp;
    })
    
    return answer
};