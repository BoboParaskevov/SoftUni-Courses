function nonSubset(arr) {
    let currentBiggest = arr[0];  
    let result = arr.filter(num => {
        if (num >= currentBiggest) {
            currentBiggest = num;  
            return true;  
        }
        return false;  
    });
    
    console.log(result.join(' ')); 
}
nonSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24])