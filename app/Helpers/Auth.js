const jwt = require('jsonwebtoken');

module.exports.sign = payload => jwt.sign(payload,process.env.JWT_SECRET)

module.exports.decode = token => {
	let data;

	try{
		data = jwt.verify(token,process.env.JWT_SECRET);
	}catch(error){
		error.status = 400;
		throw error;
	}

	return data;
}