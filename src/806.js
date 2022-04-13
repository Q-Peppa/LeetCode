/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    let line = 1
    let width = 0
    for (let i = 0; i < s.length; i++) {
        let index = s.charCodeAt(i) - 97
        let w = widths[index]
        if (width + w > 100) {
            line++
            width = w
        } else {
            width += w
        }
    }
    return [line, width]
};