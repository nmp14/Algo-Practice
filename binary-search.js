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