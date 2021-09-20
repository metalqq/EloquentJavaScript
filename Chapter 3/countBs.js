const countBs = (string) => {
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()){
            count++;
        }

    }
    return count;
};
console.log(countBs(''));