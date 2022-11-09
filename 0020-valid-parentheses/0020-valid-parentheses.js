/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    const sLength = s.length;
    const stack = [];
    
    for (let i=0; i<sLength; i++) {
        
        if (s[i] === "(") stack.push(")")
        else if (s[i] === "{") stack.push("}")
        else if (s[i] === "[") stack.push("]")
        else if (s[i] !== stack.pop()) return false;
        
    }
    
    return stack.length === 0;
};