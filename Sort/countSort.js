let countSort = (arr) =>{
    let result = [],max = 0,table = {};
    for(let i = 0; i< arr.length;i++){
        if(!(arr[i] in table)){
            table[arr[i]] = 1;
        }else{
            table[arr[i]] += 1;
        }
        if(arr[i] > max){
            max = arr[i];
        }
    }
    for(let j = 0;j<=max ;j++){
        if(j in table){
            for(let k = 0;k<table[j];k++){
                result.push(j);
            }
        }
    }
    return result;
}