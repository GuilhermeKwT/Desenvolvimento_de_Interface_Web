const task1 = {
    name: "Task 1",
    createdAt: new Date(),
    updatedAt: null,
    completed: false
}
const task2 = {
    name: "Task 2",
    createdAt: new Date(),
    updatedAt: null,
    completed: false,
    changeName
}

function changeName(name){
    this.name = name
    this.updatedAt = new Date()
}

task1.name = "task1 update"
task1.updatedAt = new Date()
task2.changeName("task2 update")
console.log(task1)
console.log(task2)