
function numOfX(arr){
    let count=0;
   for (let i = 0; i < 5; i++) {
     for (let j = 0; j < 5; j++) {
             if(arr[i][j]==="X")   
                count++;
        }
   }
   return count;
}
console.log(numOfX([["X","X",3,3,2],[1,2,3,3,3],[1,2,3,3,3],[1,2,3,3,3],[1,2,3,3,3]]));
