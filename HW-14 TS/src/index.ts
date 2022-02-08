const arr: Array<number> = [1, 2, 3, -1, -2, -3];

function getPositiveNums(arr) {
    if(arr.length === 0) return 'Array is empty';
    const newArr: Array<number> = [];
    for(let num of arr) {
       if(num > 0) newArr.push(num);
    }
    if(newArr.length !== 0) {
        return newArr
    } else {
        return null
    }
}

console.log(getPositiveNums(arr));