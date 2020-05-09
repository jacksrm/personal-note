const express = require('express');
const routes = express.Router();

const NotesController = require('./controller/NotesController');

const NotesValidator = require('./validators/NotesValidator');

routes.get('/notes', NotesController.index);
routes.post('/notes', NotesValidator.createValidation(), NotesController.create);
routes.get('/notes/:id', NotesValidator.readValidation(), NotesController.read);
routes.put('/notes/:id', NotesValidator.updateValidation(), NotesController.update);
routes.delete('/notes/:id', NotesValidator.deleteValidation(), NotesController.delete);

module.exports = routes;

