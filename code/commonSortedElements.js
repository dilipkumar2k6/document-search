const MinHeap = require('./MinHeap');
const isUnivalTree = require('./isUnivalTree');
/**
 * Definition for a LinkedList node.
 * function LinkedListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {LinkedListNode[]} kSortedList 
 */
const commonSortedElements = (kSortedList) => {
    const commonElements = [];
    // Initialize heap
    const minHeap = new MinHeap();
    for(const list of kSortedList) {
        minHeap.add(list);
    }
    const k = kSortedList.length;
    while(minHeap.arr.length === k) {
        // check if heap is unival tree
        if(isUnivalTree(minHeap)){
            const top = minHeap.arr[0];
            commonElements.push(top.val);
        }
        // remove lowest from heap
        const lowest = minHeap.remove();
        if(lowest.next) {
            minHeap.add(lowest.next);
        }

    }
    return commonElements;
}