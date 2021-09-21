const reversArray = (array) => {

    let reversArray = [];

    for (let i = 0; i < array.length; i++) {
        reversArray[i] = array[array.length - 1 - i];
    }
    return reversArray;


};
console.log(reversArray([-5,-1,0,3,6]));

const reversArrayInPlace = (array) => {

    let storage;

    for (let i = 0; i < Math.ceil(array.length / 2); i++) {

        storage = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = storage;

    }
    return array;


};
console.log(reversArrayInPlace([-5,-1,0,3,6]));