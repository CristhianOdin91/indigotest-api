const Task = require('../../Models/Task');
const Session = require('../../Models/Session');

const TaskFormat = require('../../Helpers/TaskFormat');

module.exports.index = async (req,res) => {
	let session = await Session.findById(res.locals.session).populate('tasks');

	res.json({ 
		message: 'Tareas cargadas correctamente',
		tasks: session.tasks.map(element => TaskFormat(element))
	});
}

module.exports.store = async (req,res) => {
	let task = await Task.create(req.body);
	let session = await Session.findById(res.locals.session);

	session.tasks.push(task._id);
	await session.save();

	res.json({ message: 'Tarea guardada correctamente' });
}

module.exports.complete = async (req,res) => {
	let task = await Task.findById(req.params.id);

	task.completed = !task.completed;
	await task.save();

	res.json({ message: 'Tarea editada'	});
}

module.exports.update = async (req,res) => {
	let task = await Task.findById(req.params.id);

	task.name = req.body.name;
	await task.save();

	res.json({ message: 'Tarea editada'	});
}

module.exports.destroy = async (req,res) => {
	let task = await Task.findById(req.params.id);
	let session = await Session.findById(res.locals.session);

	let validTasks = new Array();

	session.tasks.forEach(element => {
		if(element != req.params.id)
			validTasks.push(element);
	});

	session.tasks = validTasks;
	await session.save();
	await task.remove();

	res.json({ message: 'Tarea eliminada' });
}

module.exports.search = async (req,res) => {
	let session = await Session.findById(res.locals.session).populate('tasks',null,{ name: { $regex: `.*${req.body.name}.*` } });

	res.json({ 
		message: 'Búsqueda realizada',
		tasks: session.tasks.map(element => TaskFormat(element))
	});
}