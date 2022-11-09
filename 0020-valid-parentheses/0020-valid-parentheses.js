/**
 * @param {string} s
 * @return {boolean}
 */

function isRemove(singleBracket, stackTop) {
    console.log(singleBracket, stackTop)
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
            continue;
        }

        if (!isRemove(char, top)) {
            stack.push(char)
            break;
        }
        
        stack.pop();
    }
    
    return stack.length === 0;
};