import { MaxPriorityQueue } from '@datastructures-js/priority-queue';
import _ from 'lodash';

const q = new MaxPriorityQueue();
q.enqueue(1);
q.enqueue(-1);
q.enqueue(0);
q.enqueue(2);
q.enqueue(200);
q.enqueue(-90);
console.log(q.toArray());
console.log(_.sortBy(q.toArray()));
console.log(_.sum(q.toArray()));
console.log(_.max(q.toArray()));
console.log(_.min(q.toArray()));
