var temp;

function ascending(array) {
    for (x = 0; x <= array.length; x++) {
        for (i = 0; i <= array.length; i++) {
            if (array[x] < array[i]) {
                temp = array[i];
                array[i] = array[x];
                array[x] = temp;
            }
        }
    }
    return array;
}

function descending(array) {
    for (x = 0; x <= array.length; x++) {
        for (i = 0; i <= array.length; i++) {
            if (array[x] > array[i]) {
                temp = array[i];
                array[i] = array[x];
                array[x] = temp;
            }
        }
    }
    return array;
}