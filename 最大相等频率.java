// 最大相等频率.java
class Solution {
//
	public int maxEqualFreq(int[] nums) {
		int len = nums.length;
		int []sub = new int[100001];
		int []pre = new int[100001];
		int res = 0;
		int cur = 0;
		for(int i=0;i<len;i++){
			pre[++sub[nums[i]]]++;
			cur = Math.max(sub[nums[i]],cur);
			if(pre[cur]==1 && pre[cur-1] * (cur-1)+1 == (i+1) || (pre[cur]*cur+1==i+1)){
				res=i+1;
			}
		}
     	if(cur == nums.length){
     		System.out.println(cur);
     		return cur;
     	}
		if(cur == 1) return nums.length;
		return res;
	}
}


//[1,1,1,2,2,3,3] --->pre[cur]==1 && pre[cur-1] * (cur-1)+1 == (i+1) 
//[1,1,1,1,2] ----> pre[cur]*cur+1==i+1
//[1,2,3,4,5,6] ---->cur = 1
//[1,1,1,1,1] ----->pre[cur]*cur+1==i+1