
const boxes = [0,1,2,3,4,5 ];

/*
- what is the big O of compressFirstBox function ?
- how many steps  or operations does this function take if the boxes increase
    from 0 to 100 for example

=> this is what we call O(1) - constant time
- no matter how many   boxes we have  we always log out the first item of the array
 
*/
const compressFirstBox = boxes =>  console.log(boxes[0]);



/*
- how do we mesure the big O of logFirstTwoBoxes function?
- each time this function runs two operations , every operation is o(1)
- so the function in total run o(2) everytime
- no matter how  big boxes is  ,the number of operations is going to be 2

- when it comes to constant time we don't care if it's o(1) o(2) o(3) o(1000)... 
=>we simply say o(1) - Constant time (a flat line in graph)
- in terms of scalability  it doesn't matter how big our input is ,we're always gone to do 
the constant amount of time in  function 

- O(1) it doesn't matter how many elemnts we have , it always runs the same

- O(n) => fair (Big-O Complexiy chart)
- O(1) => excellent , we always love O(1)

*/
const logFirstTwoBoxes = boxes => {  
    console.log(boxes[0]); //o(1)
    console.log(boxes[1]); //o(1)
}

logFirstTwoBoxes(boxes); //o(2)


