class Solution {
    int []dx = {-1,-1,-1,0,0,1,1,1};
    int []dy = {-1, 0,1,-1,1,-1,0,1};
    public List<List<Integer>> queensAttacktheKing(int[][] queens, int[] king) {
        List<List<Integer>> res = new LinkedList<>();
        int x,y;
        boolean [][]b = new boolean[8][8];
        for (int a[]:queens){
            b[a[0]][a[1]] = true;
        }

        for (int i=0;i<8;i++){
            for(x=king[0],y=king[1];x>=0&&x<8&&y>=0&&y<8;x+=dx[i],y+=dy[i]){
                if(b[x][y]){
                   List<Integer> temp = new LinkedList<>();
                    temp.add(x);
                    temp.add(y);
                    res.add(temp);
                    break;
                }
            }
        }
        return res;
    }
}