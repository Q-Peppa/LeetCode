int comp(int *a, int *b ,int k ) { 
    return a[k] == b[k] ? 0 : a[k] < b[k] ? 1 : -1;
}
void swap(int **a, int **b) {
    int *temp = *a;
    *a = *b;
    *b = temp;
}
void sort(int **s , int size , int k) {
    for (int i = 0; i < size; i++) {
        for (int j = 0; j < size - i - 1; j++) {
            if (comp(s[j], s[j + 1], k) == 1) {
                swap(s[j], s[j + 1]);
            }
        }
    }
}

/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** sortTheStudents(int** score, int scoreSize, int* scoreColSize, int k, int* returnSize, int** returnColumnSizes){
    sort(score, score + scoreSize, k);
    *returnSize = scoreSize;
    *returnColumnSizes = scoreColSize;
    return score;

}