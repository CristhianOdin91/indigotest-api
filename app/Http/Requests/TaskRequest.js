const Joi = require('joi');

const schema = Joi.object().keys({ name: Joi.string().required() });

module.exports = (req,res,next) => {
	let {error} = Joi.validate(req.body,schema);

	if(error)
		return res.status(400).json({ message: 'Error en el nombre de la tarea' });

	next();
}