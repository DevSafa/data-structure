/*
    Rule 1 - worst case
    when calculating big O we always think about the worst case.
    Big-O ONLY cares about the worst case .
    
*/

const everyone = ['dory','bruce','marlin','gill','nemo','bloat','nigel','squirt',
'darla','hank'];


function findNemo(array)
{
    for(let i = 0 ; i < array.length ; i++)
    {
        console.log("runing");
        if(array[i] === 'nemo')
        {
            console.log('FIND NEMO!');
            break;
        }
    }
}

findNemo(everyone);
console.log("-------------");

/*
    - what is the worst case in findNemo function?
    the worst case is instead of having nemo as fifth item  , nemo 
    is at very end

    - best case is if nemo at the very begening and we only have to loop
        through it once

*/
const worst_case = ['dory','bruce','marlin','gill','nemod','bloat','nigel','squirt',
'darla','hank','nemo'];

findNemo(worst_case);

/*
    -the very first rule is we always care about what is the worst case scenario.
    because when we talk about scalability we can't just assume things are going well
    even though findNemo function  might be O(1) if nemo is the very first item in the array,
    it doesn't matter.
    - big O of findNemo is O(n)

*/