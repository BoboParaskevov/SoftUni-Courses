function rotateArr(arr) {
    let rotations = Number(arr.pop());

    for (let i = 0; i < rotations % arr.length; i++) {
        let lastElement = arr.pop();  
        arr.unshift(lastElement);     
    }

    
    console.log(arr.join(' '));
    
}
rotateArr(['1', '2', '3', '4', '2'])
