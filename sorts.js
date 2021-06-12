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

const mergeSort = arr => {
    if (arr.length < 2) return arr;

    const len = arr.length;
    const mid = Math.floor(len / 2);

    const left = arr.slice(0, mid);
    const right = arr.slice(mid, len);

    return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
    const newArr = [];

    do {
        if (left[0] > right[0]) {
            newArr.push(right.shift());
        } else {
            newArr.push(left.shift());
        }

    } while (left.length > 0 && right.length > 0);

    if (left.length > 0) newArr.push(...left);
    else if (right.length > 0) newArr.push(...right);

    return newArr;
};

console.log(mergeSort([5, 2, 9, 10, 50, 42, 11, 3, 2, 1, 15, 16, 1, 67, 92, 100, 44, 99, 23, 32, 21, 7, 8]));