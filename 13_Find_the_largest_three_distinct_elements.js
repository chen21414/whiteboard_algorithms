let arr = [ 12, 13, 1, 10, 34, 1 ];
let n = arr.length;

function print3largest(arr, arr_size)
{
let first, second, third;

// There should be atleast three elements
if (arr_size < 3)
{
    document.write(" Invalid Input ");
    return;
}

third = first = second = Number.MIN_VALUE; //as possible as zero
for(let i = 0; i < arr_size; i++)
{
     
    // If current element is
    // greater than first
    if (arr[i] > first)
    {
        third = second;
        second = first;
        first = arr[i];
    }

    // If arr[i] is in between first
    // and second then update second
    else if (arr[i] > second)
    {
        third = second;
        second = arr[i];
    }

    else if (arr[i] > third)
        third = arr[i];
}

console.log(first,second,third)

}

print3largest(arr, n)