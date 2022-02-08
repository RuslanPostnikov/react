let arr: Array<any> = [1, 2, 3, -1, -2, [-3, 4]];

function flat(arr: Array<any>) {
    if(arguments.length > 1) {
        throw new Error('Function accepts only 1 argument, too much arguments provided');
    }
    let flattend = [];
    (function flat(array) {
        array.forEach(function(el) {
            if (Array.isArray(el)) flat(el);
            else flattend.push(el);
        });
    })(arr);
    return flattend;
}

console.log(flat(arr));