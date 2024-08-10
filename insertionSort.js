// Runtime Complexity: O(n^2), O(n) when starting from a sorted array.
// Space Complexity: O(1)
function insertionSort(arr) {
    let temp;
    for (let i = 1; i < arr.length; i++) {
        temp = arr[i];
        for (var j = i - 1; arr[j] > temp && j > -1; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = temp;
    }
    return arr;
}

export default insertionSort;
