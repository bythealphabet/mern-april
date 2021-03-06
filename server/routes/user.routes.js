import express from "express";
import * as userCtrl from "../controllers/user";
import authCtrl from "../controllers/auth.controller";

const router = express.Router();

router.route("/api/users").post(userCtrl.create).get(userCtrl.list);

router
	.route("/api/users/:userId")
	.get(authCtrl.requireSignin, userCtrl.read)
	.put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
	.delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove);

router.param("userId", userCtrl.userByID);

export default router;
