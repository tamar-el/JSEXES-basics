function getType(arr){
    let numOfNumber=0;
    let numOfstring=0;
    let numOfobject=0;
    let numOfboolean=0;
    let numOfNull=0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === null) {
            numOfNull++;
            continue;
        }
        switch(typeof arr[i])
        {
            case "number":
                numOfNumber++;
                break;
            case "string":
                numOfstring++;
                break; 
            case "boolean":
                numOfboolean++;
                break; 
            case "object":
                numOfobject++;
                break; 
            case "null":
                numOfNumber++;
                break; 
            default:
                break;            
        }
    }
    console.log("Number",numOfNumber,"String",numOfstring)

}
getType(["aa","aab",12, null,{age: 1},2,2])