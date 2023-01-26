int alternateDigitSum(int n){
  int d = 1, sum = 0;
  while (n)
  {
    d*=-1;
    sum+=d*(n%10);
    n/=10;
  }
  return sum * d;
  
}