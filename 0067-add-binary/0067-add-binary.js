/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const maxLength = Math.max(a.length, b.length);
    const [padA, padB] = [a.padStart(maxLength, 0), b.padStart(maxLength, 0)];
    let result = '';
    let carry = 0;
    
    for (let i=maxLength-1; i>=0; i--) {
        const sum = parseInt(padA[i]) + parseInt(padB[i]) + carry;
        
        if (sum >= 2) {
            result = (sum - 2) + result;
            carry = 1;
        } else {
            result = sum + result;
            carry = 0;
        }
        
    }
    
    if (carry === 1) result = carry + result;
    
    return result
};