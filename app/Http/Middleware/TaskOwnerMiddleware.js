const Session = require('../../Models/Session');

module.exports = async (req,res,next) => {
	let session = await Session.findById(res.locals.session);
	let index;

	if((index = session.tasks.indexOf(req.params.id)) == '-1')
		return res.status(403).json({ message: 'Permisos insuficientes' });

	next();
}