function maxSubArray(nums) {
  let current = 0;
  let max = nums[0];

  for (let n of nums) {
    current += n;
    max = Math.max(max, current);

    if (current < 0) current = 0;
  }

  return max;
}
