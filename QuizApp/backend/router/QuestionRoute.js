const { question } = require('../controller/quizController.js');
const express = require('express');
const quizRouter = express.Router();


quizRouter.get('/question',question);

module.exports = quizRouter;