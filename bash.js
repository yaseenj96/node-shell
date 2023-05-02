//if statement to process command
//and run different functions from

const ls = require("./ls.js");

//files depending on cmd
process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {  
    const cmd = data.toString().trim(); //remove the newline
    if (cmd === 'pwd'){
        return require("./pwd.js")();
    } else if (cmd === 'ls'){
        return require("./ls.js")();
    }
    process.stdout.write('prompt > ');
});
