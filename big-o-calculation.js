 
 function anotherFunction(){
    console.log(0);
 }

 function funChallenge(input) 
 {
     let a = 10;  //O(1)
     a = 50 + 3 ; //O(1)

    //loops are linear time
     for(let i = 0 ; i < input.length ; i++) { //O(n)
         anotherFunction(); //O(n) it runs as many time as the loop happens
         let strange = true;//O(n) 
         a++; //O(n)
     }
     return a; //O(1) the return statement always runs once
 }

//3  + n  + n + n
//BIG O(3 + 4n) <==> O(n)

let  input = [1,2,3,4,5,6];
console.log(funChallenge(input));

/*
 you won't need to calculate Big O step by step like here,
 there is an easier way to do this that is more practical.
*/