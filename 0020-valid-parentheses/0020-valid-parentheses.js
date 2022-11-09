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
        const top = stack.length === 0 ? null : stack[stack.length-1];
        
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
        } else if (isRemove(char, top)) {
            stack.pop();
        } else return false;
        
        
    }
    
    return stack.length === 0;
};