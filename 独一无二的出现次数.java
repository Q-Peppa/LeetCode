class Solution {
    public boolean uniqueOccurrences(int[] arr) {
        int res[] = new int[2001];
        int tim[] = new int[2001];
		for(int i:arr){
			if(i>=0)
			res[i]++;
		else
			res[-i+1000]++;
		}
		for(int i:res){
            if(i!=0)
			tim[i]++;
		}
		// return true;
        for(int i:tim){
            if(i>=2){
                return false;
            }
        }
        return true;
    }
}