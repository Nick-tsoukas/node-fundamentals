// returns a collection of tasks that need to be done
// using arrow function to bind the this keyword
const tasks = {
  tasks: [
    {
      task: 'Grocery shopping',
      completed: true
    },
    {
      task: "Clean the house",
      completed: false
    },
    {
      task: "Walk the dog",
      completed: false
    }
  ],
  todo() {
    return this.tasks.filter( (t) => {
      return t.completed === false;
    });

  }
}

tasks.todo();
