/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const reversed = parseInt(x.toString().split('').reverse().join(''))
    if (reversed > 2147483647 || reversed < -2147483647 ) return 0
    return x < 0 ? -1 * reversed : reversed
};