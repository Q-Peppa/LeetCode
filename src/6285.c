
struct MaxPriorityQueue
{
  int *data;
  int size;
  int capacity;
};
struct MaxPriorityQueue *createMaxPriorityQueue(int capacity)
{
  struct MaxPriorityQueue *queue = malloc(sizeof(struct MaxPriorityQueue));
  queue->data = malloc(capacity * sizeof(int));
  queue->size = 0;
  queue->capacity = capacity;
  return queue;
}
void enqueue(struct MaxPriorityQueue *queue, int value) {
  if (queue->size == queue->capacity)
  {
    return;
  }
  queue->data[queue->size] = value;
  queue->size++;
  int child = queue->size - 1;
  int parent = (child - 1) / 2;
  while (child > 0)
  {
    if (queue->data[child] > queue->data[parent])
    {
      int temp = queue->data[child];
      queue->data[child] = queue->data[parent];
      queue->data[parent] = temp;
      child = parent;
      parent = (child - 1) / 2;
    }
    else
    {
      break;
    }
  }
}

int dequeue(struct MaxPriorityQueue *queue)
{
  if (queue->size == 0)
  {
    return -1;
  }
  int res = queue->data[0];
  queue->data[0] = queue->data[queue->size - 1];
  queue->size--;
  int parent = 0;
  int child = parent * 2 + 1;
  while (child < queue->size)
  {
    if (child + 1 < queue->size && queue->data[child + 1] > queue->data[child])
    {
      child++;
    }
    if (queue->data[child] > queue->data[parent])
    {
      int temp = queue->data[child];
      queue->data[child] = queue->data[parent];
      queue->data[parent] = temp;
      parent = child;
      child = parent * 2 + 1;
    }
    else
    {
      break;
    }
  }
  return res;
}

int ceil(int a, int b)
{
  return (a + b - 1) / b;
}

long long maxKelements(int *nums, int numsSize, int k)
{
  struct MaxPriorityQueue *queue = createMaxPriorityQueue(k);
  for (int i = 0; i < numsSize; i++)
  {
    enqueue(queue, nums[i]);
  }
  long long res = 0;
  while (1)
  {
    if (!k)
    {
      return res;
    }
    long long temp = dequeue(queue);
    res += temp;
    k--;

    enqueue(queue, ceil(10 ,3 ));
  }
  return res;
}
int main()
{
  int nums[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
  int k = 3;
  long long res = maxKelements(nums, 10, k);
  return 0;
}