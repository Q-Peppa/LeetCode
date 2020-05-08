public class Solution {

    private List<List<Integer>> res = new ArrayList<>();

    public List<List<Integer>> permute(int[] nums) {
        if (nums == null || nums.length == 0)
            return res;
        List<Integer> temp = new ArrayList<>();
        List<Integer> numsList = new ArrayList<>();
        for (int i = 0; i < nums.length; i++) {
            numsList.add(nums[i]);
        }
        permute(numsList, temp);
        return res;
    }

    private void permute(List<Integer> nums, List<Integer> temp) {
        if (nums.size() == 0){
               this.res.add(new ArrayList<>(temp));
                return ;
        }         
        for (int i = 0; i < nums.size(); i++) {
            int t = nums.get(i);
            temp.add(t);
            nums.remove(i);
            permute(nums, temp);
            nums.add(i, t);
            temp.remove(temp.size() - 1);
        }
    }
}