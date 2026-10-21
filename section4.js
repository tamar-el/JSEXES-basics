function revARR(arr){
    let j=arr.length-1;
    let tmp;
    for (let i = 0; i < arr.length/2; i++) {
        tmp=arr[i];
        arr[i]=arr[j];
        arr[j]=tmp;
        j--;    
    }
    return arr;
}
console.log(revARR([1,2,3]));