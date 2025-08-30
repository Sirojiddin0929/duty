class TodoList {
    constructor() {
        this.tasks = []
    }
    addTask(task) {
        this.tasks.push(task)
    }
    removeTask(index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks.splice(index, 1)
        }
    }
    displayTasks() {
        if (this.tasks.length === 0) {
            console.log("Vazifalar yo'q.")
        } else {
            this.tasks.forEach((task, i) => {
                console.log(`${i + 1}. ${task}`)
            })
        }
    }
}
let myTodoList = new TodoList()
myTodoList.addTask('Kitob oqish')
myTodoList.addTask('uxlash')
myTodoList.displayTasks()
myTodoList.removeTask(0)
myTodoList.displayTasks()
