//5. URLify a string
console.log('URLify a string');
const URLify = function(string) {
    return string.replace(/ /g, '%20');
};
console.log(URLify('tauhida praveen'));
console.log(URLify('www.thinkful.com /tauh ida parv een'));
//Linear time O(n);  Not really an array solution, but this is fewer steps.
console.log('-------------------------');

//6. Filtering an array
console.log('Filtering an array');
const arrayFilter = function(array) {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 5) {
            filteredArray.push(array[i]);
        };
    };
    return filteredArray;
}
const filterArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrayFilter(filterArray));
//Linear time O(n)
console.log('-------------------------');

//7. Max sum in the array
console.log('Max sum in the array');
const maxSum = function(array) {
    let max = array[0];
    let running;
    for (let j = 0; j < array.length; j++) {
        running = 0;
        for (let i = j; i < array.length; i++) {
            running += array[i];
            if (running > max) {
                max = running;
            };
        };
    };
    return max;    
};
const sumArray = [4, 6, -3, 5, -2, 1];
console.log(maxSum(sumArray));
//Polynomial time O(n^2)
console.log('-------------------------');

//8. Merge arrays
console.log('Merge arrays');
const mergeArray = function(array1, array2) {
    const mergedArray = array1.concat(array2).sort(function(a, b){return(a - b)});
    return mergedArray;
};
const mergeArrayAlternate = function(array1, array2) {
    let index1 = 0;
    let index2 = 0;
    const mergedArray = [];
    while (index1 < array1.length || index2 < array2.length) {
        if (index1 === 'done') {
            mergedArray.push(array2[index2]);
            index2++;
        } else if (index2 === 'done') {
            mergedArray.push(array1[index1]);
            index1++;
        } else if (array1[index1] <= array2[index2]) {
            mergedArray.push(array1[index1]);
            if (index1 < array1.length - 1) {
                index1++
            } else {
                index1 = 'done'
            };
        } else {
            mergedArray.push(array2[index2]);
            if (index2 < array2.length - 1) {
                index2++
            } else {
                index2 = 'done'
            };
        };
    };
    return mergedArray;
};
const array1 = [1, 3, 6, 8, 11];
const array2 = [2, 3, 5, 8, 9, 10];
console.log(mergeArray(array1, array2));
console.log(mergeArrayAlternate(array1, array2));
//Linear time O(n)
console.log('-------------------------');

//9. Remove characters
console.log('Remove characters')
const removeCharacters = function(string, remove) {
    let newString = '';
    let match;
    for (let i = 0; i < string.length; i++) {
        match = 'no';
        for (let j = 0; j < remove.length; j++) {
            if (string.charAt(i).toLowerCase() === remove.charAt(j).toLowerCase()) {
                match = 'yes';
                break;
            };
        };
        if (match === 'no') {
            newString += string.charAt(i);
        };
    };
    return newString;
};
console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));
//Polynomial time O(n^2) - loop within a loop, though the inner loop may end early if not the worst case
console.log('-------------------------');

//10. Products
console.log('Products');
const products = function(array) {
    if (array.length === 1) {
        return 'only one item in array!';
    };
    let productsArray = [];
    let product;
    for (let i = 0; i < array.length; i++) {
        product = 1;
        for (let j = 0; j < array.length; j++) {
            if (i !== j) {
                product *= array[j];
            };
        };
        productsArray.push(product);
    };
    return productsArray;
};
const productArray = [1, 3, 9, 4];
console.log(products(productArray));
console.log(products([7879]));
//Polynomial time O(n^2)
console.log('-------------------------');

//11. 2D array
console.log('2D array');
const array2D = function(inputArray) {
    const array = inputArray.map(row => row);
    const zeroedRowsArray = [];
    const columns = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes(0)) {
            zeroedRowsArray.push(array[i].map(item => {return 0}));
        } else {
            zeroedRowsArray.push(array[i]);
        };
        for (let j = 0; j < array[0].length; j++) {
            if (array[i][j] === 0) {
                if (!columns.includes(j)) {
                    columns.push(j);
                };
            };
        };
    };
    const finalOutput = zeroedRowsArray.map(rows => 
        rows.map((item, index) => {
            if (columns.includes(index)) {
                return 0
            } else {
                return item
            }
        })
    );
    return finalOutput;
};
const inputArray = [
    [1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]
];
console.log(array2D(inputArray));
//Linear time O(n) - going through each item twice (nested loops are just to get through matrix, not making performance polynomial time), once to clear the rows and find columns, again to update columns
//Optimization could come through figuring out how to not need to map the output array at the end.  When
//I don't map it I end up modifying the original array for some reason.
console.log('-------------------------');

//12. String rotation
console.log('String rotation');
const stringRotation = function(string1, string2) {
    let count;
    let j;
    for (let i = 0; i < string2.length; i++) {
        count = 0;
        newString = '';
        j = i;
        while (count < string2.length) {
            newString += string2[j];
            if (j === string2.length - 1) {
                j = 0;
            } else {
                j++;
            };
            count++;
        };
        if (newString === string1) {
            return true;
        };
    };
    return false;
};
console.log(stringRotation('amazon', 'azonma'));
console.log(stringRotation('amazon', 'azonam'));
//Polynomial time O(n^2) - while nested inside for loop