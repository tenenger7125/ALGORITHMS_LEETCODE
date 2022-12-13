/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let answer = '1';
    
    for (let i=1; i<n; i++) {
        let temp = '';
        let prev = answer[0];
        let count = 1;
        
        
        for (let j=1; j<answer.length; j++) {
            if (prev !== answer[j]) {
                temp += count + prev;
                count = 0;
                prev = answer[j];
            }
            
            count++;
        }
        
        temp += count + prev;
        answer = temp;
    }
    
    return answer
};