/**
 * @param {number} area
 * @return {number[]}
 */
/**
 * @param {number} area
 * @return {number[]}
 */
 var constructRectangle = function(area) {
    let max = ~~Math.sqrt(area)

    for(let i = max;i > 0; -- i) {
        if (area % i === 0) {
            return [area / i, i]
        }
    }
};

console.log(constructRectangle(4))
console.log(constructRectangle(8))
console.log(constructRectangle(6))
console.log(constructRectangle(9))
console.log(constructRectangle(37))
console.log(constructRectangle(122122))
console.log(constructRectangle(9999999))
