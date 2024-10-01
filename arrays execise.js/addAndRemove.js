function addAndRemove(commands) {
    let result = [];
    let currentNumber = 1;

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === 'add') {
            result.push(currentNumber);
        } else if (commands[i] === 'remove') {
            result.pop();
        }
        currentNumber++;
    }

    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join(' '));
    }
}
addAndRemove(['add', 'add', 'add', 'add'])