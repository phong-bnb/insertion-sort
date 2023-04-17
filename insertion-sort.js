function insertionSort(array) {
    for (var i = 1; i < array.length; i++) {
        var open_1 = array[i];
        var j = i - 1;
        if (open_1 < array[j] && (j > -1)) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = open_1;
    }
    return array;
}
var array = [1, 2, 5, 4, 7, 89, 45];
console.log(insertionSort(array));
