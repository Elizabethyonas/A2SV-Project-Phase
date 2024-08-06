var tasks = [];
var addTask = function () {
    var taskInput = document.getElementById('taskInput');
    var text = taskInput.value.trim();
    if (text) {
        tasks.push({ text: text, completed: false });
        taskInput.value = "";
        updateTasksList();
        updateStats();
    }
};
var ToggleTaskComplete = function (index) {
    tasks[index].completed = !tasks[index].completed;
    updateTasksList();
    updateStats();
};
var deleteTask = function (index) {
    tasks.splice(index, 1);
    updateTasksList();
    updateStats();
};
var editTask = function (index) {
    var taskInput = document.getElementById('taskInput');
    taskInput.value = tasks[index].text;
    tasks.splice(index, 1);
    updateTasksList();
    updateStats();
};
var updateStats = function () {
    var completedTasks = tasks.filter(function (task) { return task.completed; }).length;
    var totalTasks = tasks.length;
    var progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
    var progressBar = document.getElementById('progress');
    progressBar.style.width = "".concat(progress, "%");
    document.getElementById('numbers').innerText = "".concat(completedTasks, " / ").concat(totalTasks);
};
var updateTasksList = function () {
    var taskList = document.getElementById('task-list');
    taskList.innerHTML = "";
    tasks.forEach(function (task, index) {
        var listItem = document.createElement("li");
        listItem.innerHTML = "\n            <div class=\"taskItem\">\n                <div class=\"task ".concat(task.completed ? 'completed' : '', "\">\n                    <input type=\"checkbox\" class=\"checkbox\" ").concat(task.completed ? 'checked' : '', " onchange=\"ToggleTaskComplete(").concat(index, ")\"/>\n                    <p>").concat(task.text, "</p>\n                </div>\n                <div class=\"icons\">\n                    <img src=\"./img/edit.jpg\" onclick=\"editTask(").concat(index, ")\" alt=\"Edit Task\"/>\n                    <img src=\"./img/delete.png\" onclick=\"deleteTask(").concat(index, ")\" alt=\"Delete Task\"/>\n                </div>\n            </div>\n        ");
        taskList.append(listItem);
    });
};
document.getElementById('taskForm').addEventListener('submit', function (e) {
    e.preventDefault();
    addTask();
});
