const arr = [1, 3, 7, 9, 2];
const target = 11;

const findTwoSum = (arr, target) => {
  const hashMap = {}; // value:index of arr
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (hashMap[target - arr[i]] >= 0) {
      return [hashMap[target - arr[i]], i];
    } else {
      hashMap[value] = i;
    }
  }
  return null;
};

const result = findTwoSum(arr, target);

// Time: O(N)
// Space: O(N)
console.log(result);
