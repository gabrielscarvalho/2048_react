
/**
 * Returns a list of all integer numbers between 2 numbers.
 * @example (1,5) -> [1,2,3,4,5]
*/
export const getListBetweenValues = (fromValue, toValue) => {
    
    let list = [];
    for (let i = fromValue; i <= toValue; i++) {
        list.push(i);
    }
    return list;
}

/**
 * Shuffles a list
 * @return list
*/
export const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}