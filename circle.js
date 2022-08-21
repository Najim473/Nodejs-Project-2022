// USING CLASS 
class Circle {
    area(r) {
        return Math.PI * r * r;
    }
    circumference(r) {
        return 2 * Math.PI * r;
    }
}
module.exports = Circle;
// exports.area = function (r) {
//     const area = Math.PI * r * r;
//     return area;
// }
// exports.circumference = function (r) {
//     const circumference = 2 * Math.PI * r;
//     return circumference;
// }