// Leetcode 35. Search Insert Position

const seachInsert = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = nums[mid];

    if (guess === target) {
      return mid;
      break;
    } else if (guess > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
};

numsList = [1, 3, 5, 7, 9, 11, 13];
console.log(seachInsert(numsList, 10));
