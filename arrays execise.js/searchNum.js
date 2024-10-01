function searchNum(arr1,commands) {
    let takenElement = arr1.slice(0, commands[0])
    
    let modifiedArray = takenElement.slice(commands[1]);

    let count = 0;
    for (let i = 0; i < modifiedArray.length; i++) {
        if (modifiedArray[i] === commands[2]) {
            count++;
        }
    }

  
    console.log(`Number ${commands[2]} occurs ${count} times.`);
}
searchNum([5, 2, 3, 4, 1, 6],

    [5, 2, 3])