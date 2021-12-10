
const {performance} =require('perf_hooks');

const nemo = ['nemo'];

const everyone = ['dory','bruce','marlin','gill','nemo','bloat','nigel','squirt',
'darla','hank'];

const large = new Array(100).fill('nemo');

const bigger = new Array(1000).fill('nemo');

function findNemo(array)
{
    for(let i = 0 ; i < array.length ; i++)
    {
        if(array[i] === 'nemo')
            console.log('FIND NEMO!');
    }
}

findNemo(everyone); //O(n) --> Linear Time

/*
    - what is the big O of the function findNemo.
    - runtime is how long it takes to run.
    - how this function in run time grow as the input increases ?
    - how the efficiency of this function increase?

    - if number of elements in input is n => the number of operations is n
    - as the number of inputs increases the operations increases
    - findNemo function has a big O notaion of O(n) (big O of n) 
    - it takes Linear time to find a nemo
    - n can be anything
    - n means  the big O depends on the number of inputs
    - if we had nemo array O(n) === O(1)
    - if we had everyone array O(n) === O(10) ...
    - as the input increase the operations increases lineary
    - O(n) is the most common big-O notation you find.
*/