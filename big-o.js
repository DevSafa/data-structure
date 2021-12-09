
//using performance.now()
//performance comes built-in to the browser (when using js in the browser)

//In Node.js it is required to import the performance class
//importing performance
const { performance }= require('perf_hooks');

const nemo = ['nemo'];


const everyone = ['dory','bruce','marlin','gill','nemo','bloat','nigel','squirt',
'darla','hank'];

//create a massive array anad fill it 's items  with  'nemo'
const large = new Array(100).fill('nemo');

const bigger = new Array(1000).fill('nemo');

function findNemo(array) {
	//mesure how long takes the funtion to run 
	let t0  = performance.now();
	for(let i = 0 ; i < array.length ; i++)
	{
		if(array[i] === 'nemo'){
			console.log('Found NEMO!');
		}	
	}
	let t1 = performance.now(); 
	//the time will be different from a computer to a computer
	//it depends how powerful the CPU in the computer and what other programs are runing on your
	//computer , what program language i'm using and many other factors .
	console.log('Call to find Nemo took ' + (t1-t0) + ' milliseconds');

}

// as input grow as  the function findNemo become slower  and slower

// findNemo(nemo);
// findNemo(everyone);
findNemo(large);
// findNemo(bigger);


/*
how can we make sure  that there is a way for us to measure in terms of efficiency
what is good code and what is a bad code ?
and what is the code that can scale ; when the length of arrays or inputs increases
it doesn't constantly slow down more and more .

=>Big-O notation is the language we use for talking about how long an algorithm takes to run  .
=> we can compare two algorithms , two functions  using big-o and say which one is better than the other when it comes
to scale regardless of our computer differences.

=>when we talk about big-O and scalability of the code we simply mean when we grow bigger and bigger with our input ,
how much does the algorithm or function slow down  . the slower it slows down the better it is 

=> instead of using performance.now  and using time to measure the efficiency of our function , we can just calculate how many operations
a computer has to perform because each operation takes time on a computer.

=> as the elemnts increases how many more operations do we have to do ? this is what we call algorithmic efficiency
Big-o allows us to explain this concept.

*/



