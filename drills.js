//5. URLify a string
const URLify = function(string) {
    return string.replace(/ /g, '%20');
};
console.log(URLify('tauhida praveen'));
console.log(URLify('www.thinkful.com /tauh ida parv een'));
//Linear time O(n);  Not really an array solution, but this is fewer steps.

//6. Filtering an array
const arrayFilter = function(array) {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 5) {
            filteredArray.push(array[i]);
        };
    };
    return filteredArray;
}
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrayFilter(testArray));
//Linear time O(n)

//7. Max sum in the array
