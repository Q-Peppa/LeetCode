const help = (needs) => {
  for (const need of needs) {
    if (need !== 0) return false
  }
  return true
}
/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function (price, special, needs) {
  // 先直接计算价钱
  let sum = 0
  let res = 0
  for (let index = 0; index < needs.length; index++) {
    sum += needs[index] * price[index]
  }
  res = sum
  for (let i = 0; i < special.length; i++) {
    const sp = special[i]
    let buy = true
    for (let j = 0; j < sp.length - 1; j++) {
      if (sp[j] > needs[j]) {
        buy = false
        break
      }
    }
    if (buy) {
      const newBuy = []
      for (let j = 0; j < sp.length - 1; j++) {
        newBuy.push(needs[j] - sp[j])
      }
      const left = shoppingOffers(price, special, newBuy)
      res = Math.min(res, left + sp[sp.length - 1])
    }
  }
  return res
}

console.log(shoppingOffers([2, 5], [
  [3, 0, 5],
  [1, 2, 10]
], [3, 2]))
console.log(shoppingOffers([2, 3, 4], [
  [1, 1, 0, 4],
  [2, 2, 1, 9]
], [1, 2, 1]))
console.log(shoppingOffers([9, 9], [
  [1, 1, 1]
], [2, 2]))
console.log(shoppingOffers([6, 3, 6, 9, 4, 7], [
  [1, 2, 5, 3, 0, 4, 29],
  [3, 1, 3, 0, 2, 2, 19]
], [4, 1, 5, 2, 2, 4]))
