function insertionSort(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] < array[i - 1] && array[i - 1] > 0) {
            array[i - 1] = array[i];
            i = i + 1;
        }
    }
    return array;
}
var array = [1, 2, 5, 4, 7, 89, 45];
console.log(insertionSort(array));
