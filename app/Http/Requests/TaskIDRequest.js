const Joi = require('joi');

const schema = Joi.object().keys({ id: Joi.string().regex(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i).required() });

module.exports = (req,res,next) => {
	let {error} = Joi.validate(req.params,schema);

	if(error)
		return res.status(400).json({ message: 'Error en el id de la tarea' });

	next();
}