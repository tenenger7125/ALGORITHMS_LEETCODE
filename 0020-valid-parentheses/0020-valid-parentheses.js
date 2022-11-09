/**
 * @param {string} s
 * @return {boolean}
 */

function isRemove(singleBracket, stackTop) {
    
    if (stackTop === null) return false;
    
    if (stackTop === "(" && singleBracket === ")" ||
        stackTop === "{" && singleBracket === "}" ||
        stackTop === "[" && singleBracket === "]"
       ) return true
    
    return false
}

var isValid = function(s) {
    const stack = [];
    
    for (const char of s) {
        
        if (char === "(") stack.push(")")
        else if (char === "{") stack.push("}")
        else if (char === "[") stack.push("]")
        else if (char !== stack.pop()) return false;
        
    }
    
    return stack.length === 0;
};