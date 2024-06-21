var num = 6;
var x = 10;
var sum = function (num, x) {
    return num + x;
};
console.log(sum(4, 7));
var num1 = function (y) {
    return y;
};
console.log(num1(5));
var summary = function (z, a) {
    if (a === true) {
        return z.toUpperCase();
    }
    else {
        return z.toLowerCase();
    }
};
console.log(summary('thando', false));
console.log(summary('mlab', true));
