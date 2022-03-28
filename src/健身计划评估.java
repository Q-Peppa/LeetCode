class Solution {
    public int dietPlanPerformance(int[] calories, int k, int lower, int upper) {
        int res = 0;
        for(int i=0;i<calories.length;i++){
            int dummySum = sum(calories, i, i + k);
            if(dummySum < lower) res--;
            if (dummySum > upper) res++;
            if(k+i >= calories.length)
                return res;
        }
        return res;
    }
    
    private int sum(int[] calories, int start, int end) {
        int res = 0;
        for(int i=start;i<end;i++){
            res+=calories[i];
        }
        return res;
    }
}
