// A closure is created when a function remembers and can access variables from its lexical scope, even after the outer function has finished executing.
// in short (it remembers outer scope variables)
//Task: Creating a counter using closure

function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const inc = counter();
console.log(inc());
console.log(inc());
