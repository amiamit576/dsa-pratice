let arr = [7, 12, 3, 9, 14, 17, 3, 2, 1];

function insertionSort(a) {
    let n = a.length;
    for (let i = 1; i < n; i++) {
        let curr = a[i];
        let prev = i - 1;
        // Move elements greater than curr one position ahead
        while (prev >= 0 && a[prev] > curr) {
            a[prev + 1] = a[prev];
            prev--;
        }
        // Place curr in its correct position
        a[prev + 1] = curr;
    }
    return a;
}

console.log(insertionSort(arr));
