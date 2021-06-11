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

const insertionSort = arr => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                const spliced = arr.splice(i, 1);
                arr.splice(j, 0, spliced[0]);
            }
        }
    }
    return arr;
};

console.log(insertionSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]));