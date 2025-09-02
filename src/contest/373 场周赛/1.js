import _ from 'lodash';

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var beautifulSubstrings = function (s, k) {
  const isVowel = (c) => {
    return c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u';
  };

  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    let voNum = isVowel(s[i]) ? 1 : 0;
    let coNum = isVowel(s[i]) ? 0 : 1;
    for (let j = i + 1; j < s.length; j++) {
      if (isVowel(s[j])) {
        voNum++;
      } else {
        coNum++;
      }
      if (voNum === coNum && (voNum * coNum) % k === 0) {
        ans++;
      }
    }
  }
  return ans;
};
console.time('112');
console.log(
  112 ===
    beautifulSubstrings(
      'auooubignuoyoaiyoetrezuuucuocemaeefldjqwoioizoyoputaaixrasvuseichoikpsjgeevbwebeoxuejagyoxiuqhgmoapiketuzjnmaaoamceejuujguqafquzaqwhnuiuiofuebaiiwiavetqiiearkuoovukwouauuhipauiguaadojcaaeiicbwaozouihusgzalacbiqbffsdeousaecsvqudjouixoojettoiizaaumeforosgiiiewiouuoouoaqfooyhgacawpeeeowpouhieogstoghvutljmuuvkeenliyyueaeeiooiwhiesamwaowmoehhshedslidnosbnojjrmdoijtaebavgkaizeaeeolcgooyapaofeiuugfzoeuwydouiuoqnaexruhzoyobhujwupoiipaaqwokioooaodfufouuoexcobliunbirebbxqlsuevtntdreooeueedfraqlcoreeilqoeuyczxnadiejvehieiebiykkvpiijeozignatgevuauiihioorqrnlhmzmyoiasiuajlrerinuuxoudbweeoiaajibtikko',
      135,
    ),
);
console.timeEnd('112');
