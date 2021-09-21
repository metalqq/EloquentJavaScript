const range = (startRange, endRange) => {

    if (startRange > endRange)
        return "Start of range cant be greater than the end";

    let rangeArray = [];

    if (startRange === endRange)
        return rangeArray;

        for (let i = 0; i <= (endRange - startRange); i++) {
            rangeArray[i] = startRange + i;
        }
        return rangeArray;

};

const SumOfNumsFromArray = (arrayOfNums) => {
    let sum = 0;

    for (let i = 0; i < arrayOfNums.length; i++) {
        sum+= arrayOfNums[i];
    }
        return sum;
};
console.log(SumOfNumsFromArray(range(-3,5)));