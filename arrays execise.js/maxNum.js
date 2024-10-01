function maxNum(arr) {
    let topNums = [];

for(let i = 0; i < arr.length; i++){
let currNum  = arr[i]
let isTop = true; 
for(let j = i +  1; j < arr.length; j ++){
    let topNumRight = arr[j]

    if(currNum <= topNumRight){
        isTop = false ;
        break;
    }
}
if(isTop){
    topNums.push(currNum)
}
}
console.log(topNums.join(' '));
}
maxNum([1, 4, 3, 2])