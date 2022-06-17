//https://leetcode.com/problems/evaluate-reverse-polish-notation/

//better and easier solution
let a, b
const evaluate = {"+": ()=>a+b, "-": ()=>a-b, "*": ()=>a*b, "/": ()=>~~(a/b)}

var evalRPN = function(tokens) {
    let stack = []
    for (let t of tokens) {
        if (evaluate[t]) {
            b = stack.pop(), a = stack.pop()//pop() method removes (get) the last element
            stack.push(evaluate[t]())
        } else stack.push(~~t) //if token is a Number; ~~ means Math.floor
    }
    return stack[0]
};





//alternative regex solution
const evalRPN = function ( tokens ) {
    const stack = [];
    
    // If the token is an operator, the operands will be
    // the last two items on the stack.
    // Evaluate the expression then add the value back on to the stack,
    // as it will be the operand for the next expression.
    // Otherwise, its an operand (digit). Cast to number and add to stack.

    //The test() method executes a search for a match between 
    //a regular expression and a specified string. 
    //Returns true or false

    // / - start of regex
    // ^ - start of line
    // $ - end of line
    // / - end of regex
    // d - delete lines which match

    tokens.forEach(( token ) => {
      if ( /^[+\-*/]$/.test( token ) ) {
        const [y, x] = [stack.pop(), stack.pop()];//pop() method removes (get) the last element
        stack.push( evaluate( x, y, token ) );
      } else {
        stack.push( +token );  // if token is a Number(token)
      }
    });
   
    // The last evaluated expression is the answer
    return stack.pop();
  };
  
  const evaluated = ( x, y, op ) => {
    switch ( op ) {
      case '+': return x + y;
      case '-': return x - y;
      case '*': return x * y;
      case '/': return x / y | 0;  // Math.trunc()
    }
  };