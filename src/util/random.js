
/**
 * Returns a random value from a list
 * @return single value
*/
export const getRandomFromList = (list) => {
    if(Array.isArray(list)) {
        return list[Math.floor(Math.random() * list.length)];
    }
    throw new Error('Cannot get random elm from non array object');
}