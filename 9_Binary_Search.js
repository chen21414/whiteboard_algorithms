
//naive approach
// const search = (val, arr) => {
//     for(let i = 0; i < arr.length; i++) {
//         console.log(i) //to see how many iterations we had
//         if (val === arr[i]) {
//             return i;
//         }
//     }
//     return -1;
// }

// const values = [0,1,2,3,4,5,6,7,8,9,10];

// console.log(search(7, values));


//correct approach
//regular bad search
const search = (val, arr) => {
    for(let i = 0; i < arr.length; i++) {
        console.log(i) //to see how many iterations we had
        if (val === arr[i]) {
            return i;
        }
    }
    return -1;
}

//binary
const binary = (val, arr) => {
    let lower = 0;
    let upper = arr.length - 1;

    while(lower <= upper) {
        console.log("how many times")
        const middle = lower + Math.floor((upper - lower) / 2);

        if (val === arr[middle]) {
            return middle;
        } 

        //we didn't find it in the middle, it's in either right/left side
        if (val < arr[middle]) {
            upper = middle - 1;
        } else {
            lower = middle + 1;
        }
    }

    return -1;
}

const values = [0,1,2,3,4,5,6,7,8,9,10];

//console.log(search(7, values));
console.log(binary(7, values))

//any elements will only take us four times to find it