import { Player } from '../models/player.model.js';

// Get Player
export const getPlayer = async (req, res) => {
    try {
        const players = await Player.find();
        res.status(200).send(players);
    } catch (error) {
        res.status(400).send(error);
    }
}

// Create Player
export const createPlayer = async (req, res) => {
    try {
        const player = await req.body;
        const newPlayer = new Player(player);
        await newPlayer.save();
        res.status(201).send(newPlayer);
    } catch (error) {
        res.status(400).send(error);
    }
}

// Update Player
export const updatePlayer = async (req, res) => {
    try {
        const player = req.params;
        const updatedPlayer = await Player.findByIdAndUpdate(player, req.body, { new: true });
        res.status(200).send(updatedPlayer);
    } catch (error) {
        res.status(400).send(error);
    }
}

// Delete Player 
export const deletePlayer = async (req, res) => {
    try {
        const player = req.params;
        await Player.findByIdAndDelete(player);
        res.status(200).send("Player deleted");
    } 
    catch(error) {
        res.status(400).send(error);
    }
}