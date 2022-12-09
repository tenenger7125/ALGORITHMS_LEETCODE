/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const result = [];
    
    while (n !== 1) {
        result.push(n);
        n = n.toString().split("").reduce((acc, cur) => acc + cur * cur, 0);
        
        if (result.includes(n)) break;
    }
    
    return n === 1;
};

// 2 -> 4 -> 16 -> 1+36=37-> 9+49=58 -> 25+64=89 -> 64+81=145 -> 42 -> 20-> 4