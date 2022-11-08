/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanSymbolObj = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    }
    let answer = 0;
    
    for (let i=0; i<s.length; i++) {
        const [curChar, nextChar] = [s[i], s[i+1]];
        
        if (!nextChar) {
            answer += romanSymbolObj[curChar];
            continue;
        };
        
        if ((curChar === 'I' && (nextChar === "V" || nextChar === "X")) ||
            (curChar === 'X' && (nextChar === "L" || nextChar === "C")) ||
            (curChar === 'C' && (nextChar === "D" || nextChar === "M"))
           ) {
            answer += romanSymbolObj[curChar + nextChar];
            i++;
            continue;
        }
        
        answer += romanSymbolObj[curChar]
    }
    
    return answer
};