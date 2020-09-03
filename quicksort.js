function sort(arr){
    return quickSort(arr, 0, arr.length - 1);
}

function quickSort(arr, start, end){
    if (start < end){
        let pIndex = partition(arr, start, end);

        quickSort(arr, start, pIndex - 1);
        quickSort(arr, pIndex + 1, end);
    }

    return arr;
}

function partition(arr, start, end){
    let pivot = arr[end];
    let pIndex = start;

    for (var i=start; i<end; i++){
        if (arr[i] < pivot){
            swap(arr, i, pIndex);
            pIndex ++;
        }
    }

    swap(arr, pIndex, end);

    return pIndex;
}

function swap(arr, i, j){
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;

    return arr;
}

console.log(sort([7, 2, 1, 6, 8, 5, 3, 4]));

