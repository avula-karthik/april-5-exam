const express = require('express');
const router = express.Router();
const todoModel = require('../mysqlmodels/todo');
router.get('/', function (req, res) {
    todoModel.findAll().then(
        function (todos) {
            res.status(200).json(todos);
        },
        function (error) {
            res.status(500).send(error);
        }
    );
});
router.post('/', function (req, res) {
    let { title, status, description } = req.body;
    todoModel.create({ title, status, description }).then(
        function (todos) {
            res.status(200).json(todos);
        },
        function (error) {
            res.status(500).send(error);
        }
    );
});
module.exports = router;
