const pool = require('../../db')
const queries = require('./queries')


const getTasks = (req, res) => {
    pool.query(queries.getTasks, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

const getTaskbyStatus = (req, res) => {
    const taskStatus = req.params.status;
    pool.query(queries.getTaskbyStatus, [taskStatus], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addTask = (req, res) => {
    const { name, status } = req.body;
    pool.query(queries.addTask, [name, status], (error, results) => {
        if (error) throw error;
        res.status(200).send("Task added");
    });
};

const deleteTask = (req, res) => {
    const taskId = parseInt(req.params.taskId)

    pool.query(queries.deleteTask, [taskId], (error, results) => {
        if (error) throw error;
        res.status(200).send("Task deleted");
    });
};

const updateTask = (req, res) => {
    const taskId = parseInt(req.params.taskId);
    const { name } = req.body;

    pool.query(queries.updateTask, [name, taskId], (error, results) => {
        if (error) throw error;
        res.status(200).send("Task status updated succesfully");
    });

};


module.exports = {
    getTasks,
    getTaskbyStatus,
    addTask,
    deleteTask,
    updateTask,
};