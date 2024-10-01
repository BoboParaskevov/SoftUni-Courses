function bombNumbers(sequence, bombInfo) {
    let bombNumber = bombInfo[0];
    let power = bombInfo[1];

    let index = sequence.indexOf(bombNumber);
    
   
    while (index !== -1) {
       
        let start = Math.max(0, index - power); 
        let end = Math.min(sequence.length, index + power + 1);  

      
        sequence.splice(start, end - start);

     
        index = sequence.indexOf(bombNumber);
    }

   
    let sum = 0;
    for (let i = 0; i < sequence.length; i++) {
        sum += sequence[i];
    }

    console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2])