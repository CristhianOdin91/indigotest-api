const moment = require('moment');
moment.locale('es');

module.exports = task => ({
	id: task._id,
	name: task.name,
	completed: task.completed,
	created_at: moment(task.createdAt).calendar(),
	updated_at: moment(task.updatedAt).calendar()
})