/*
    Rule-2 : Remove Constants
*/

function printFirstItemThenFirstHalfThenSayHi100Times(items){
    console.log(items[0]);

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while(index < middleIndex){
        console.log(items[index]);
        index++;
    }

    for(var i = 0 ; i < 100 ; i++){
        console.log('hi');
    }
}

/*
 what is the big O of this function?
 -log out the first item  -> O(1)
 -log out half of the items -> O(n/2)
 - for loop (no matter how big the items are  this will be always a loop of 100)
    ->O(100) ->O(1)
 - the big O of the function O(1 + n/2 + 100)

 - rule number 2 says drop the constants
 - so
    O(1 + n/2 + 100)
    O(n/2 + 101)
-even though n is divided by half,
in the grand scheme of things we only care about when it scales;
when the inputs are getting larger and larger.

- as n gets bigger and bigger we don't care about adding
    an extra 100 because if n is a million adding an extra
    100 on there it doesn't really matter
- the same with dividing by 2 ; as n gets larger and larger
    dividing by 2 has a decreasingly significant effect
- so we drop the constant
    O(n + 1)
    O(n)

- so if we have an example of O(a + 50000000)
-> we drop the constants and it becomes O(n) 
*/

function compressBoxesTwice(boxes){
    boxes.forEach(function(box){
        console.log(box);
    });

    boxes.forEach(function(box){
        console.log(box);
    });
}

let boxes =["box1","box2","box3","box4","box5"];
compressBoxesTwice(boxes);

/*
- compressBoxesTwice function has two for loops where it does the same thing

- so we have O(n) for first for loop 
- O(n) for second for loop

- so the function is O(n + n ) => O(2n)
- in an interview doesn't really matter  because we drop the constants
and if we drop the constants it's just O(n) Linear time

- with big O we don't care how steep the line is (in graph) we care about how the line moves
as our input increase.(Linear)

- you will never see the numbers (constnats) in big O notation
*/

