// A new task will be created as incomplete
const newTask = (title, desc) => {
  const task = {
    title,
    desc,
    complete: false,
    completeTask: function() {
      this.complete = true;
    },
    logTask: function() {
      console.log((`${this.title} has${this.complete ? ' ' : ' not '}been completed!`));
    }
  };
  return task;
};

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Then do task 2"); // task 0
const task2 = newTask("Do Laundry", "Then do task 1"); // task 1
const tasks = [ task1, task2 ];

task1.logTask(); // Clean Cat Litter has not been completed
task1.completeTask();
task1.logTask(); // Clean Cat Litter has been completed


// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed
