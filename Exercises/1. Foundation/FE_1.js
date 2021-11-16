const sumNum = (nums) => {
  let total = 0;
  for(let i = 0; i < nums.length; i += 1) {
    total += nums[i];

  }
  console.log(total);
  return total;
}


sumNum([1,2,3,4,5])