const bubbleSort = (nums) => {
    let swapped;
    do {
        swapped = false;

        for (let i = 0, l = nums.length - 1; i < l; i++) {
            if (nums[i] > nums[i + 1]) {
                // Swap num[i] and num[i + 1]
                let copy = nums[i + 1];
                nums[i + 1] = nums[i];
                nums[i] = copy;
                swapped = true;
            }
        }

    } while (swapped);
    return nums;
}

console.log(bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));