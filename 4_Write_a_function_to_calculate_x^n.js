function power(x, y)
{
    if (y == 0)
        return 1;
    else if (y % 2 == 0) //means if even #
        return power(x, parseInt(y / 2, 10)) *
               power(x, parseInt(y / 2, 10));
    else
        return x * power(x, parseInt(y / 2, 10)) *
                   power(x, parseInt(y / 2, 10));
}
  
// Driver code
let x = 2;
let y = 4;
  
document.write(power(x, y));

console.log(power(x, parseInt(y / 2, 10)))//4, if y = 5, still 4
console.log(power(x, y))//32