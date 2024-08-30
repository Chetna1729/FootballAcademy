import express from 'express'
import { getPlayer, createPlayer, updatePlayer, deletePlayer } from '../controllers/player.controller.js'

const router = express.Router();
router.get("/getPlayer").get(getPlayer);
router.post("/createPlayer").post(createPlayer);
router.put("/updatePlayer/:id").put(updatePlayer);
router.delete("/deletePlayer/:id").delete(deletePlayer);

export default router;