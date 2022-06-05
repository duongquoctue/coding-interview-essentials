const arr = [4, 1, 8, 2, 3, 9];

const maxAmountOfWater = (arr) => {
  let maxValue = 0;

  let p1 = 0;
  let p2 = arr.length - 1;

  while (p1 < p2) {
    const height = Math.min(arr[p1], arr[p2]);
    const width = p2 - p1;
    const area = height * width;
    maxValue = Math.max(maxValue, area);

    if (arr[p1] <= arr[p2]) {
      p1++;
    } else {
      p2--;
    }
  }

  return maxValue;
};

// Time: O(N)
// Space: O(N)
console.log(maxAmountOfWater(arr));
