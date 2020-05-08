class Solution {
    public int distanceBetweenBusStops(int[] distance, int start, int destination) {
        if(distance.length == 1){
            return distance[0];
        }
        if(start > destination){
            int temp = start;
            start = destination;
            destination = temp;
        }
        int left = 0;
        for(int i=start;i<destination;i++){
            left+=distance[i];
        }
        int right = 0;
        for(int i=destination;i<distance.length;i++){
            right+=distance[i];
        }
        for (int i=0;i<start;i++){
            right+=distance[i];
        }
        return Math.min(left,right);

    }
}