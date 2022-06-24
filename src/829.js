const _ = {
    sum(s){

        return s.reduce((a,b)=>a+b)
    }
}
/**
 * @param {number} n
 * @return {number}
 */
 var consecutiveNumbersSum = function(n) {
    if(n <= 3) return n ;
    let ans = 0
    const dfs = (sum) =>  {
        if(sum.length === 0) {
            return ;
        }
        const nowSum = _.sum(sum);
        const len = sum.length;
        if(nowSum === n　||　sum[len -1] > n) {

           ans++
           sum.shift();
        }else if(nowSum < n) {
            sum.push(sum[len-1] + 1)
        }else{
            sum.shift()
        }
        dfs(sum)
    }


    dfs([1])
    return ans;
};

// const a = consecutiveNumbersSum(15)
const ans = consecutiveNumbersSum(10e2);
console.log( ans);