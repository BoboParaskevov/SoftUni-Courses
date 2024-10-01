function evenAndOddSubtraction(numbers) {
    let sumEven = 0;
    let sumOdd = 0;
    
    for (let num of numbers) {
        if (num % 2 === 0) {
            sumEven += num;
        } else {
            sumOdd += num;
        }
    }
    
    return sumEven - sumOdd;
}
evenOrOdd([1,2,3,4,5,6])