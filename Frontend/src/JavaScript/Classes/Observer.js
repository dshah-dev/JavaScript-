// The Observer pattern is a design pattern where an object maintains a list of observers and notifies them automatically when its state changes.

class test {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  notify(data) {
    this.observers.forEach(fn => fn(data));
  }
}

const Test = new test();

Test.subscribe(data => console.log("Observer 1:", data));
Test.subscribe(data => console.log("Observer 2:", data));

Test.notify("This is data/State changed");


// MutationObserver

// const target = document.getElementById("box");
// const observer = new MutationObserver((mutations) => {
//   mutations.forEach(m => {
//     console.log("DOM changed:", m);
//   });
// });

// observer.observe(target, {
//   childList: true,
//   characterData: true,
//   subtree: true
// });

// target.textContent = "Its is changed";