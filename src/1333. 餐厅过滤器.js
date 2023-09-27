/**
 * 给你一个餐馆信息数组 restaurants，其中  restaurants[i] = [idi, ratingi, veganFriendlyi, pricei, distancei]。
 * 你必须使用以下三个过滤器来过滤这些餐馆信息。
 * 其中素食者友好过滤器 veganFriendly 的值可以为 true 或者 false，
 * 如果为 true 就意味着你应该只包括 veganFriendlyi 为 true 的餐馆，
 * 为 false 则意味着可以包括任何餐馆。
 * 此外，我们还有最大价格 maxPrice 和最大距离 maxDistance 两个过滤器，
 * 它们分别考虑餐厅的价格因素和距离因素的最大值。
 * 过滤后返回餐馆的 id，按照 rating 从高到低排序。
 * 如果 rating 相同，那么按 id 从高到低排序。
 * 简单来说就是给你一个数组，数组里面是餐馆的信息，然后给你三个过滤器，
 * 你需要根据这三个过滤器过滤餐馆，最后返回餐馆的 id，按照 rating 从高到低排序。
 * 如果 rating 相同，那么按 id 从高到低排序。
 **/
import _ from 'lodash-es';

/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function (
  restaurants,
  veganFriendly,
  maxPrice,
  maxDistance,
) {
  restaurants = restaurants
    .filter((e) => e[2] >= veganFriendly)
    .filter((e) => e[3] <= maxPrice)
    .filter((e) => e[4] <= maxDistance);

  restaurants = _.orderBy(restaurants, [1, 0], ['desc', 'desc']);
  // console.log(restaurants)
  return _.map(restaurants, 0);
};

console.log(
  filterRestaurants(
    [
      [1, 4, 1, 40, 10],
      [2, 8, 0, 50, 5],
      [3, 8, 1, 30, 4],
      [4, 10, 0, 10, 3],
      [5, 1, 1, 15, 1],
    ],
    1,
    50,
    10,
  ), // [3,1,5]
);
