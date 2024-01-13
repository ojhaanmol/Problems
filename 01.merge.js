/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
*/

const ms = (nums1 = [4,5,6,0,0,0], m = 3, nums2 = [1,2,3], n = 3) => {
    let mcount=m;
    let ncount=0;
    for(index = 0; index< nums1.length; index++){
        if(m <= 0){
            nums1[index] = nums2[ncount];
            ncount++
            continue;
        }
        if(n < 0 ){
            continue
        }
        if(nums1[index] > nums2[ncount]){
            for(indexj = mcount; indexj>=index; indexj--){
                nums1[indexj] = nums1[indexj-1];
            }
            nums1[index] = nums2[ncount];
            mcount++
            ncount++;
            n--;
        }else if(nums1[index] <= nums2[ncount]){
            m--;
        }
    }
    return nums1;
}
const main = () => {
console.log(ms());
}
main();