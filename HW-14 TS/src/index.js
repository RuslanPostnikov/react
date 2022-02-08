var arr = [1, 2, 3, -1, -2, -3];
function getPositiveNums(arr) {
    if (arr.length === 0)
        return 'Array is empty';
    var newArr = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        if (num > 0)
            newArr.push(num);
    }
    if (newArr.length !== 0) {
        return newArr;
    }
    else {
        return null;
    }
}
console.log(getPositiveNums(arr));
