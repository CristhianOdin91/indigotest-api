const express = require('express');
const router = express.Router();

const SessionMiddleware = require('../app/Http/Middleware/SessionMiddleware');
const TaskOwnerMiddleware = require('../app/Http/Middleware/TaskOwnerMiddleware');

const TaskRequest = require('../app/Http/Requests/TaskRequest');
const TaskIDRequest = require('../app/Http/Requests/TaskIDRequest');

const SessionController = require('../app/Http/Controllers/SessionController');
const TaskController = require('../app/Http/Controllers/TaskController');

router.post('/session',SessionController.index);

router.route('/task')
	  .all(SessionMiddleware)
	  .get(TaskController.index)
	  .post(TaskRequest,TaskController.store);

router.post('/task/search',SessionMiddleware,TaskRequest,TaskController.search);

router.route('/task/:id')
	  .all(SessionMiddleware,TaskOwnerMiddleware)
	  .patch(TaskIDRequest,TaskController.complete)
	  .put(TaskIDRequest,TaskRequest,TaskController.update)
	  .delete(TaskIDRequest,TaskController.destroy);

module.exports = router;
