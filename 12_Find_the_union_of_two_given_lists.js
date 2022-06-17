var a = [34, 35, 45, 48, 49];
var b = [48, 55];
var union = [...new Set([...a, ...b])];
console.log(union);


// Little explanation about this line: [...a, ...b] concatenates two arrays, you can use a.concat(b) as well. 
// new Set() create a set out of it and thus your union. 
// And the last [...x] converts it back to an array.