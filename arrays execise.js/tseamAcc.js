function tseamAcc(input) {
    
    let account = input[0].split(' ');

    
    for (let i = 1; i < input.length; i++) {
        let commandLine = input[i];

        
        if (commandLine === 'Play!') {
            break;
        }

        let [command, game] = commandLine.split(' ');

        
        if (command === 'Install') {
            if (!account.includes(game)) {
                account.push(game);
            }
        }

       
        else if (command === 'Uninstall') {
            account = account.filter(g => g !== game);
        }

      
        else if (command === 'Update') {
            if (account.includes(game)) {
                account = account.filter(g => g !== game);  
                account.push(game);  
            }
        }

        
        else if (command === 'Expansion') {
            let [gameName, expansion] = game.split('-');
            if (account.includes(gameName)) {
                let index = account.indexOf(gameName);
                account.splice(index + 1, 0, `${gameName}:${expansion}`);
            }
        }
    }

    
    console.log(account.join(' '));
}
tseamAcc(['CS WoW Diablo',

    'Install LoL',
    
    'Uninstall WoW',
    
    'Update Diablo',
    
    'Expansion CS-Go',
    
    'Play!'])