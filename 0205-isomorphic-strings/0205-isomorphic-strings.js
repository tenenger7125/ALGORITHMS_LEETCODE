/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const obj = {};
    
    for (let i=0; i<s.length; i++) {
        if (obj['s' + s[i]] === undefined) obj['s' + s[i]] = t[i];
        if (obj['t' + t[i]] === undefined) obj['t' + t[i]] = s[i];
        if (obj['s' + s[i]] !== t[i] || obj['t' + t[i]] !== s[i]) return false
    }
    
    return true
};