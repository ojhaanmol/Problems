/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let sum = l1.val + l2.val;
    let carry = sum > 9 ? 1:0;
    sum = sum > 9 ? sum-10 : sum;
    let out = new ListNode(sum,null);
    let tail = out;
    l1 = l1.next;
    l2 = l2.next;
    if(!l1&&!l2&&carry){
        tail.next = new ListNode(carry,null);
    }
    sum = 0;
    for(;l1||l2;){
        let addl1 =0;
        let addl2 =0;
        addl1 = !l1 ? 0 : l1.val;
        addl2 = !l2 ? 0 : l2.val; 
        sum = addl1 + addl2 + carry;
        carry = 0;
        carry = sum > 9 ? 1:0;
        sum = sum > 9 ? sum-10 : sum;
        tail.next = new ListNode(sum,null);
        tail = tail.next;
        sum = 0;
        if(l1!==null)
        l1 = l1.next;
        if(l2!==null)
        l2 = l2.next;
        if(!l1&&!l2&&carry)
        tail.next = new ListNode(carry,null);
    }
    return out;
};