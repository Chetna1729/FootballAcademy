import express from 'express'
import { getPlayer, createPlayer, updatePlayer, deletePlayer } from '../controllers/player.controller.js'

const router = express.Router();
router.get("/getPlayer",getPlayer);
router.post("/createPlayer",createPlayer);
router.put("/updatePlayer/:id",updatePlayer);
router.delete("/deletePlayer/:id",deletePlayer);

export default router;