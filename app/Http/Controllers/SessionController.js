const Auth = require('../../Helpers/Auth');

const Session = require('../../Models/Session');

module.exports.index = async (req,res) => {
	let stagedSession = new Session;
	let session = await stagedSession.save();

	let session_id = Auth.sign({ session });

	res.json({ session_id });
}