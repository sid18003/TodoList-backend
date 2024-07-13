const express = require('express');
const router = express.Router();

// Importing the createTodo function from the controller
const { createTodo } = require('../controller/Createtodo');
const  {getTodo,getTodoById} = require('../controller/getTodo')
const  {updateTodo} = require('../controller/updateTodo')
const  {deleteTodo} = require('../controller/deleteTodo')
// Define the route to create a new todo
router.post('/createTodo', createTodo);
router.get('/getTodo',getTodo);
router.get('/getTodo/:id',getTodoById);
router.put('/updateTodo/:id',updateTodo);
router.delete('/deletetodo/:id',deleteTodo);
module.exports = router;
