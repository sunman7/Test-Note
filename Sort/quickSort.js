let quickSort = (arr) =>{
    let k = arr.length;
    if(k <= 1) return arr;
    let left = [];
    let right = [];
    let index = Math.floor( k/2 );
    let pivot = arr.splice(index,1)[0]; 
    for(let i = 0 ;i<k;i++){
        if(pivot < arr[i]){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot],quickSort(right));

}