function numTilePossibilities(tiles: string): number {
  let counter: number[] = new Array(26).fill(0)
  for (let i = 0; i < tiles.length; i++) {
    counter[tiles[i].charCodeAt(0) - 'A'.charCodeAt(0)]++
  }

  let dfs = (num: number[]): number => {
      let sum = 0
      for (let i=0; i<26;i++){
        if(counter[i] > 0){
          sum++
          counter[i]--
          sum+=dfs(counter)
          counter[i]++
        }
      }
      return sum
  }
  return dfs(counter)
};

console.log(numTilePossibilities('AAB') === 8 );
console.log(numTilePossibilities('AAABBC')  === 188);
