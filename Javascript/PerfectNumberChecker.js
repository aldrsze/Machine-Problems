const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a number: ', num => {
    let number = parseInt(num);
    let sum = 0;

    for(let i = 1; i < number; i++){
       if (number % i == 0) {
           sum += i;
       }
    }

    if(sum === number){
        console.log("The number is a perfect number!");
    } else {
        console.log("The number is a NOT perfect number!");
    }



    readline.close();
});

