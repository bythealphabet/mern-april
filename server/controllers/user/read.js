import User from "../../models/user.model";
import errorHandler from "../../helpers/dbErrorHandler";

export const read = (req, res) => {
	req.profile.hashed_password = undefined;
	req.profile.salt = undefined;
	return res.json(req.profile);
};
