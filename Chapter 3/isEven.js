const isEven = (a) => {

    if (a === 0) {
        return true;
    }
    if (a === 1) {
        return false;
    }
    return isEven(a-2);
};
console.log(isEven(5));