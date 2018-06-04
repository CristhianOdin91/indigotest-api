const Joi = require('joi');

const Auth = require('../../Helpers/Auth');

const schema = Joi.object().keys({ authorization: Joi.string().regex(/^Bearer .+\..+\..+$/).required() });

module.exports = async (req,res,next) => {
	let authorization = req.get('Authorization');
	let {error} = Joi.validate({authorization},schema);

	if(error)
		return res.status(403).json({ message: 'Error en el token de sesión' });

	let token = authorization.split(' ')[1];
	let {session} = Auth.decode(token);

	res.locals.session = session;

	next();
}