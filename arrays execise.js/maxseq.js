function maxSequenceOfEqualElements(arr) {
    let maxSequence = [];
    let currentSequence = [];

    for (let i = 0; i < arr.length; i++) {
        if (currentSequence.length === 0 || arr[i] === currentSequence[0]) {
            
            currentSequence.push(arr[i]);
        } else {
            
            if (currentSequence.length > maxSequence.length) {
                maxSequence = currentSequence;
            }
            
            currentSequence = [arr[i]];
        }
    }

    if (currentSequence.length > maxSequence.length) {
        maxSequence = currentSequence;
    }

    console.log(maxSequence.join(' '));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])