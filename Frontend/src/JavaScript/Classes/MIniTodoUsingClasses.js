// closure to genrate id
const createId = () => {
  let id = 1; 
  return () => id++;
};
const getId = createId();

// main todo
class Todo {
  constructor(text) {
    this.id = getId();
    this.text = text;
    this.completed = false;
  }
}
Todo.prototype.check = function () {
    this.completed = !this.completed;
};

// genrating multiple todo
function* todoGenerator(input) {
    for (let todo of input) yield todo;
}

// manager
class TodoManager {
    constructor(){
        this.input = [];
    }

    add(text){
        const todo = new Todo(text);
        this.input.push(todo);
        return todo;
    }

    remove(id){
        this.input = this.input.filter(t => t.id !== id);
    }

    check(id){
        this.input.find(t => t.id === id)?.check();
        // console.log(`${Innercheck?:}`);
    }

    list() {
        console.log("\nTodo List:");
        for (let todo of todoGenerator(this.input)) {
            console.log(`[${todo.completed ? "Done" : "Pending"}] (${todo.id}) ${todo.text}`);
        }
    }
}

(async function runApp() {
  const manager = new TodoManager();
  manager.add("task1:git");
  manager.add("task2:js");
  manager.add("task3:react");
  manager.list();
  manager.check(1);
  manager.list();   
  manager.check(2);
  manager.remove(1);
  manager.list();
})();
