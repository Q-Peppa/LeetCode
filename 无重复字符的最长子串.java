public class Solution {
    public int lengthOfLongestSubstring(String s) {
        int res = 0;
       Queue<Character> q = new ArrayQueue<>();
       for (int i=0;i<s.length(); i++) {
           if(!q.contains(s.charAt(i))){
            q.offer(s.charAt(i));
           }else{
            while (q.contains(s.charAt(i))) {
                q.poll();
            }
               q.offer(s.charAt(i));
           }
           res = Math.max(res,q.size());
       }
        return res;
    }
}
