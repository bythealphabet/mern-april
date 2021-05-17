import User from "../../models/user.model";
import extend from "lodash/extend";
import errorHandler from "../../helpers/dbErrorHandler";

export const update = async (req, res) => {
	try {
		let user = req.profile;
		user = extend(user, req.body);
		user.updated = Date.now();
		await user.save();
		user.hashed_password = undefined;
		user.salt = undefined;
		res.json(user);
	} catch (err) {
		return res.status(400).json({
			error: errorHandler.getErrorMessage(err),
		});
	}
};
