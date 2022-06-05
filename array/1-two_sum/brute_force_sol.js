const arr = [1, 3, 7, 9, 2];
const target = 11;

const findTwoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let x = i + 1; x < arr.length; x++) {
      const sum = arr[i] + arr[x];
      if (sum === target) {
        return [i, x];
      }
    }
  }
  return null;
};

const result = findTwoSum(arr, target);

// Time: O(N^2)
// Space: O(1)
console.log(result);
