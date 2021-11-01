const getTasks = "SELECT * FROM tasks";
const getTaskbyStatus = "SELECT * FROM tasks WHERE status = $1";
const addTask = "INSERT INTO tasks (name, status) VALUES ($1, $2)";
const deleteTask = "DELETE from tasks WHERE id = $1"
const updateTask = "UPDATE tasks SET name = $1 WHERE id = $2"

module.exports = {
    getTasks,
    getTaskbyStatus,
    addTask,
    deleteTask,
    updateTask,
}