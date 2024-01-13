/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let output = [];
    for(let index=0; index<nums.length; index++){
        const selectedNumber = nums[index];
        const numberToFind = target - selectedNumber;
        for(let index_j=0; index_j<nums.length; index_j++){
            if(nums[index_j] === numberToFind){
                    if(index !== index_j)
                output.push(index)
            }
        }
    }
    return output;
};