import { MaxHeap } from 'datastructures-js/heap';

var AuctionSystem = function () {
  this.itemBids = new Map();
  this.itemHeaps = new Map();
};

/**
 * @param {number} userId
 * @param {number} itemId
 * @param {number} bidAmount
 * @return {void}
 */
AuctionSystem.prototype.addBid = function (userId, itemId, bidAmount) {
  let bids = this.itemBids.get(itemId);
  if (!bids) {
    bids = new Map();
    this.itemBids.set(itemId, bids);
  }
  bids.set(userId, bidAmount);

  let heap = this.itemHeaps.get(itemId);
  if (!heap) {
    heap = new MaxHeap((value) => (BigInt(value[0]) << 32n) + BigInt(value[1]));
    this.itemHeaps.set(itemId, heap);
  }
  heap.insert([bidAmount, userId]);
};

/**
 * @param {number} userId
 * @param {number} itemId
 * @param {number} newAmount
 * @return {void}
 */
AuctionSystem.prototype.updateBid = function (userId, itemId, newAmount) {
  const bids = this.itemBids.get(itemId);
  bids.set(userId, newAmount);

  const heap = this.itemHeaps.get(itemId);
  heap.insert([newAmount, userId]);
};

/**
 * @param {number} userId
 * @param {number} itemId
 * @return {void}
 */
AuctionSystem.prototype.removeBid = function (userId, itemId) {
  const bids = this.itemBids.get(itemId);
  bids.delete(userId);
};

/**
 * @param {number} itemId
 * @return {number}
 */
AuctionSystem.prototype.getHighestBidder = function (itemId) {
  const bids = this.itemBids.get(itemId);
  if (!bids || bids.size === 0) return -1;

  const heap = this.itemHeaps.get(itemId);

  while (heap && heap.root()) {
    const [amount, userId] = heap.root();
    const current = bids.get(userId);
    if (current === amount) return userId;
    heap.extractRoot();
  }

  return -1;
};

/**
 * Your AuctionSystem object will be instantiated and called as such:
 * var obj = new AuctionSystem()
 * obj.addBid(userId,itemId,bidAmount)
 * obj.updateBid(userId,itemId,newAmount)
 * obj.removeBid(userId,itemId)
 * var param_4 = obj.getHighestBidder(itemId)
 */
