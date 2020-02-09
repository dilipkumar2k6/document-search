/**
 * Definition for a binary tree node.
 * function Node(val) {
 *     this.val = val;
 * }
 */
class MinHeap{
    constructor(){
        this.arr = [];
    }
    print(message){
        const arr = this.arr.map(a => a.val);
        console.log(message + ' '+ arr);
    }
    getSize(){
        return this.arr.length;
    }
    swap(i, j) {
        const t = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = t;
    }
    /**
     * @param {Node} a 
     * @param {Node} b 
     */
    isSmaller(a, b){
        return a.val < b.val
    }
    /**
     * @param {Node} a 
     */
    add(a) {
        this.arr.push(a);
        this.heapifyUp(this.getSize() - 1)
    }
    remove(){
        this.swap(0, this.getSize() - 1);
        const t = this.arr.pop();
        this.heapifyDown(0);
        return t;
    }
    heapifyUp(i){
        if(i === 0) {
            return;
        }
        const pIndex = Math.floor((i-1)/2);
        if(this.isSmaller(this.arr[i], this.arr[pIndex])) {
            this.swap(i, pIndex);
            this.heapifyUp(pIndex);
        }
    }
    heapifyDown(i){
        let min = i;
        const left = i * 2 + 1;
        const right = i * 2 + 2;
        if(left < this.getSize() && this.isSmaller(this.arr[left], this.arr[min])) {
            min = left;
        }
        if(right < this.getSize() && this.isSmaller(this.arr[right], this.arr[min])) {
            min = right
        }
        if(min !== i) {
            this.swap(min, i);
            this.heapifyDown(min);
        }
    }
}
module.exports = MinHeap;