function arrManipulator(nums, commands) {
    
for( const command of commands){
    let tokens = command.split(' ')
    const action = tokens.shift()


    if(action === 'add'){
        const index = Number(tokens.shift())
        const element = Number(tokens.shift())

        nums.splice(index, 0 , element)
    } else if(action === 'addMany'){
        const index = Number(tokens.shift())
    }

    for(const element of tokens){
        nums.splice(index, 0 , element)
        index++;
    }

    if(action === 'contains'){
        const index = Number(tokens.shift())
        const elementIndex = nums.indexOf(element)
        console.log(elementIndex);
        
    } else if(action === 'remove'){
        const index = Number(tokens.shift())
        nums.splice(index,1)
    } else if(action === 'shift'){
        const rotations = Number(tokens.shift())

        for(let rotation = 1; rotation <= rotations; rotation++){
            const firstElement = nums.shift()
            nums.push(firstElement)
        }
    } else if(action === 'sumPairs'){
        let resultArr = [];

        for(let i = 0; i , nums.length; i += 2){
const curNum = nums[i]
const nextNum = nums[i + 1]

if(nextNum === undefined){
    resultArr.push(curNum)
} else {
    resultArr.push(curNum + nextNum)
}
        }
        nums  = resultArr

    } else {
        console.log(`[ ${nums.join(', ')}} ]`);
        
    }
    }
}
arrManipulator([1, 2, 4, 5, 6, 7],

    ['add 1 8', 'contains 1', 'contains 3', 'print'])