# datastructures-js Priority Queue 使用教程（含 Demo）

本文基于仓库当前依赖 `@datastructures-js/priority-queue` 的实际行为整理，演示 `MinPriorityQueue` 和 `MaxPriorityQueue` 的常见方法。

## 1. 安装与导入

```bash
pnpm add @datastructures-js/priority-queue
```

```js
import { MinPriorityQueue, MaxPriorityQueue } from '@datastructures-js/priority-queue';
```

## 2. 常用方法速览

- `enqueue(element, priority?)` / `push(element, priority?)`：入队。
- `dequeue()` / `pop()`：弹出队头（最高优先级元素）。
- `front()`：查看队头元素。
- `back()`：查看队尾元素。
- `size()`：队列长度。
- `isEmpty()`：是否为空。
- `clear()`：清空队列。
- `toArray()`：导出当前队列元素数组。
- `contains(fn)`：按回调条件查找。
- `remove(fn)`：按回调条件删除元素。

> 说明：在本仓库依赖版本中，`front()/dequeue()` 直接返回元素本身。

## 3. Demo A：最小堆（Dijkstra 风格）

```js
import { MinPriorityQueue } from '@datastructures-js/priority-queue';

const pq = new MinPriorityQueue();
pq.enqueue('node-0', 0);
pq.enqueue('node-1', 5);
pq.enqueue('node-2', 2);

console.log('front:', pq.front()); // node-0
console.log('dequeue:', pq.dequeue()); // node-0
console.log('size:', pq.size()); // 2
console.log('toArray:', pq.toArray()); // ['node-2', 'node-1']
```

## 4. Demo B：最大堆（对象自定义比较）

```js
import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

const maxQ = new MaxPriorityQueue({
  compare: (a, b) => b.score - a.score,
});

maxQ.enqueue({ name: 'alice', score: 90 });
maxQ.enqueue({ name: 'bob', score: 95 });
maxQ.enqueue({ name: 'carol', score: 88 });

console.log('front:', maxQ.front()); // { name: 'bob', score: 95 }
console.log('dequeue:', maxQ.dequeue()); // { name: 'bob', score: 95 }
console.log('contains score 90:', maxQ.contains((x) => x.score === 90)); // true
maxQ.remove((x) => x.name === 'carol');
console.log('after remove:', maxQ.toArray());
```

## 5. 在 LeetCode 题目中的建议

- 图最短路：`MinPriorityQueue`，优先弹出距离最小节点。
- 贪心 Top K：`MaxPriorityQueue` 或 `MinPriorityQueue` 维护候选集。
- 每次 `dequeue()` 后请先判空，避免空队列操作。
