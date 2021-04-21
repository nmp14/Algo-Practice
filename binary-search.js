const bSearch = (arr, search) => {
    let start = 0;
    let end = arr.length - 1;

    if (search === arr[start] || search === arr[end]) return true;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === search) return true;

        if (arr[mid] < search) start = mid + 1;
        else if (arr[mid] > search) end = mid - 1;
    }
    return false;
}

const arr = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const searchNum = 42;

console.log(bSearch(arr, searchNum));

const recursiveBSearch = (arr, searchVal, start, end, count = 0) => {
    if (start > end) return false;

    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === searchVal) return true;

    if (arr[mid] < searchVal) return recursiveBSearch(arr, searchVal, mid + 1, end, count);
    else if (arr[mid] > searchVal) return recursiveBSearch(arr, searchVal, start, mid - 1, count);
}

const recursionArr = [1, 2, 3, 4, 8, 12, 20, 25, 50, 60, 80, 100, 250, 500];

const searchVal = 500;

console.log(recursiveBSearch(recursionArr, searchVal, 0, recursionArr.length - 1));