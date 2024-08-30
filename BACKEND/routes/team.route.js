import express from 'express'
import { getTeam, createTeam, updateTeam, deleteTeam } from '../controllers/team.controller.js'

const router = express.Router();
router.route("/getTeam").get(getTeam);
router.route("/createTeam").post(createTeam);
router.route("/updateTeam/:id").put(updateTeam);
router.route("/deleteTeam/:id").delete(deleteTeam);

export default router;