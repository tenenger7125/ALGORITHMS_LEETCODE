/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    for (let i=0; ;i++) {
        if (x / i < i) return i - 1;
    }
};