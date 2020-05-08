class Solution {
    public int equalSubstring(String s, String t, int maxCost) {
        //如果maxCost==0 则只需要判断t里面最大字串(含s) 多长
        int len = s.length();
        int dp[] = new int[len];
        for (int i = 0; i < len; ++i) {
            dp[i] = s.charAt(i) - t.charAt(i);
            dp[i] = Math.abs(dp[i]);
        }
        int res = 0;
        int cost = 0;
        for (int low = 0, fast = 0; low < len; low++) {
            while (fast < len && cost + dp[fast] <= maxCost) {
                cost += dp[fast++];
            }
            res = Math.max(res, fast - low);
            cost -= dp[low];
        }
        return res;
    }
}