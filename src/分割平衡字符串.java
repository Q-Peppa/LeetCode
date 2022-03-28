class Solution {
    public int balancedStringSplit(String s) {
        int res = 0;
        int r = 0;
        int l = 0;
        for (int i=0; i<s.length(); i++) {
        	if(s.charAt(i) == 'R'){
        		r++;
        	}else{
        		l++;
        	}
        	if(r==l && l!=0){
        		res++;
        		r = 0;
        		l = 0;
        	}
        }
        return res;
    }
}