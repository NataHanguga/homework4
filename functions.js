var array = [2, 5, 3, 6, 4];
//+forEach,+map,+push,+filter,+sort
Array.prototype.myForEach = function (arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}
console.log('ForEach Function');
array.myForEach(array, function (val) {
    console.log(val + ')');
});
Array.prototype.myMap = function (arr, callback) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i], i, arr));
    }
    return newArr;
}
console.log('Map Function');

console.log(array.myMap(array, function (val) {
    return (Math.pow(val, 2));
}));
Array.prototype.myFilter = function (arr, callback) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr))
            newArr.push(arr[i]);
    }
    return arr;
}
console.log('Filter Function');
console.log(array.myFilter(array, function (val) {
    if (val % 2 == 0)
        return val;
}));
Array.prototype.mySort = function (arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (callback(arr[i], arr[j]) > 0) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr;
}
console.log('Sort Function');
console.log(array.mySort(array, function (a, b) {
    return a - b;
}));
Array.prototype.myPush = function (arr, val) {
    var newArr = [];
    return newArr.concat(arr, val);
}
console.log('Push Function');
console.log(array.myPush(array, 'val'));