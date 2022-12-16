/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 == 0 || num2 == 0) return '0';
    
    const n = num1.length;
    const m = num2.length;
    const arr = Array(n+m).fill(0);
    
    for (let i=n-1; i>=0; i--) {
        
        for (let j=m-1; j>=0; j--) {
            const [p1, p2] = [i+j, i+j+1];
            const sum = parseInt(num1[i]) * parseInt(num2[j]) + arr[p2];
            
            arr[p2] = sum % 10;
            arr[p1] += Math.floor(sum/10);
        }
    }
    
    if (arr[0] === 0) arr.shift();
    
    return arr.join('')
};
