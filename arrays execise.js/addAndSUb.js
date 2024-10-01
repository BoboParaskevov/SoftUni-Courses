function modifyArray(arr) {
    let originalSum = 0;
    let modifiedSum = 0;
    let modifiedArr = [];

    for (let i = 0; i < arr.length; i++) {
        originalSum += arr[i];  // Sum the original array

        // Modify the array based on the odd/even condition
        if (arr[i] % 2 === 0) {
            modifiedArr.push(arr[i] + i);  // Add index to even numbers
        } else {
            modifiedArr.push(arr[i] - i);  // Subtract index from odd numbers
        }

        modifiedSum += modifiedArr[i];  // Sum the modified array
    }

    console.log(modifiedArr);
    console.log(originalSum);
    console.log(modifiedSum);
}
modifyArray([5, 15, 23, 56, 35])