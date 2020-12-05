let mergeSort = (arr) =>{
    if(arr.length === 1) return arr;
    let left = arr.slice(0,Math.floor(arr.length / 2));
    let right = arr.slice(Math.floor(arr.length / 2));
    return merge(mergeSort(left),mergeSort(right));
}
let merge = (a,b) =>{
    if(a.length === 0) return b;
    if(b.length === 0) return a;
    return a[0] < b[0] ? [a[0]].concat(merge(a.slice(1),b)) : [b[0]].concat(merge(b.slice(1),a));
}