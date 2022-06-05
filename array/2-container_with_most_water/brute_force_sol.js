const arr = [4, 1, 8, 2, 3, 9];

const maxAmountOfWater = (arr) => {
  let maxValue = 0;
  for (let p1 = 0; p1 < arr.length; p1++) {
    for (let p2 = i + 1; p2 < arr.length; p2++) {
      const width = p2 - p1;
      const height = Math.min(arr[p1], arr[p2]);
      maxValue = Math.max(width * height, maxValue);
    }
  }

  return maxValue;
};

// Time: O(N^2)
// Space: O(1)
console.log(maxAmountOfWater(arr));
