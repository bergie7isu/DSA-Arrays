const Array = require('./array');

//2. Explore the push() method
function main(){
    Array.SIZE_RATIO = 3;
    // Create an instance of the Array class
    let arr = new Array();
    // Add an item to the array
    arr.push(3);
    console.log(arr);
}
main();
//length = 1
//capacity = 3
//memory address = 0

function main(){
    Array.SIZE_RATIO = 3;
    // Create an instance of the Array class
    let arr = new Array();
    // Add an item to the array
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    console.log(arr);
}
main();
//length = 6
//capacity = 12
//memory address = 3
    //We've added 6 items to the array, so the length is 6.
    //With the first push, the capacity increased from 0 to 3 ((length of zero plus one) times three).
    //The memory address stayed at zero.  It technically set itself to the address right after the last item,
    //but since there were no items, it reset itself to zero.
    //The capacity remained unchanged until we got to the forth push, at which point the capacity
    //increased from 3 to 12 ((length of 3 plus 1) time 3).  The memory address now again sets itself to the address
    //right after the last original item, which was at location 2 (0, 1, and 2 were the existing consumed locations)
    //so the new address is 3.

//3. Exploring the pop() method
function main(){
    Array.SIZE_RATIO = 3;
    // Create an instance of the Array class
    let arr = new Array();
    // Add an item to the array
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    arr.pop();
    arr.pop();
    arr.pop();
    console.log(arr);
}
main(); 
//length = 3
//capacity = 12
//memory address = 3
    //The length is only three because we removed the last three items from our original 6.  The capacity
    //and address remain the same because we don't change those when we pop.  All we're doing is removing
    //the last item and leaving that spot for another push.

//4. Understanding more about how arrays work
    //Print the 1st item in the array arr.
    function main(){
        Array.SIZE_RATIO = 3;
        // Create an instance of the Array class
        let arr = new Array();
        // Add an item to the array
        arr.push(3);
        arr.push(5);
        arr.push(15);
        arr.push(19);
        arr.push(45);
        arr.push(10);
        arr.pop();
        arr.pop();
        arr.pop();
        console.log(arr);
        console.log(arr.get(0));
    }
    main(); 

    //Empty the array and add just 1 item: arr.push("tauhida");
    function main(){
        Array.SIZE_RATIO = 3;
        // Create an instance of the Array class
        let arr = new Array();
        // Add an item to the array
        arr.push('tauhida');
        console.log(arr.get(0));
    }
    main();

    //Result: NaN
    //The array is a Float64Array, which can only handle numbers.  So the string we added gets handled as NaN.

    //The _resize function serves to get me more space to add items.  If I run out of space, the function
    //copies my existing items, allocates a space 3 times as large, pastes my items there, and relinquishes
    //my originally allocated space.