import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
    player_name: {
        type: String,
        required: true
    },
    position: {
        type: String
    },
    team_id: {
        type: String,
        required: true
    },
    player_dob: {
        type: Date
    },
    player_age: {
        type: Number,
        required: true
    },
    jersey_number: {
        type: Number
    }
});

export const Player = mongoose.model('Player', playerSchema);