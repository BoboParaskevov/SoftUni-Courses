function distinctArr(arr) {
    let uniqueNums = [];

    for(const num of arr){
        if(uniqueNums.includes(num)){
            uniqueNums.push(num)
        }
    }
    console.log(uniqueNums.join(' '));
    
}
distinctArr([1, 2, 3, 4])