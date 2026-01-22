// Generator
// A generator function is a special function that can pause and resume execution using yield
// It returns an iterator

function* test() {
  yield 11;
  yield 21;
}

const t = test();
console.log(t.next().value);
console.log(t.next().value);
console.log(t.next().value);
