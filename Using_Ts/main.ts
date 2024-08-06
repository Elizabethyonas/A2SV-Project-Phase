interface Task {
    text: string;
    completed: boolean;
}

let tasks: Task[] = [];

const addTask = (): void => {
    const taskInput = document.getElementById('taskInput') as HTMLInputElement;
    const text = taskInput.value.trim();

    if (text) {
        tasks.push({ text: text, completed: false });
        taskInput.value = "";
        updateTasksList();
        updateStats();
    }
};

const ToggleTaskComplete = (index: number): void => {
    tasks[index].completed = !tasks[index].completed;
    updateTasksList();
    updateStats();
};

const deleteTask = (index: number): void => {
    tasks.splice(index, 1);
    updateTasksList();
    updateStats();
};

const editTask = (index: number): void => {
    const taskInput = document.getElementById('taskInput') as HTMLInputElement;
    taskInput.value = tasks[index].text;

    tasks.splice(index, 1);
    updateTasksList();
    updateStats();
};

const updateStats = (): void => {
    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
    const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
    const progressBar = document.getElementById('progress') as HTMLDivElement;

    progressBar.style.width = `${progress}%`;
    document.getElementById('numbers')!.innerText = `${completedTasks} / ${totalTasks}`;
};

const updateTasksList = (): void => {
    const taskList = document.getElementById('task-list') as HTMLUListElement;
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");

        listItem.innerHTML = `
            <div class="taskItem">
                <div class="task ${task.completed ? 'completed' : ''}">
                    <input type="checkbox" class="checkbox" ${task.completed ? 'checked' : ''} onchange="ToggleTaskComplete(${index})"/>
                    <p>${task.text}</p>
                </div>
                <div class="icons">
                    <img src="./img/edit.jpg" onclick="editTask(${index})" alt="Edit Task"/>
                    <img src="./img/delete.png" onclick="deleteTask(${index})" alt="Delete Task"/>
                </div>
            </div>
        `;
        
        taskList.append(listItem);
    });
};

document.getElementById('taskForm')!.addEventListener('submit', function (e) {
    e.preventDefault();
    addTask();
});
