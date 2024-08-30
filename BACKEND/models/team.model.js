import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
    team_name: {
        type: String,
        required: true
    },
    team_captain: {
        type: String,
        required: true
    }, 
    team_gender: {
        type: String,
        required: true
    },
    team_coach: {
        type: String,
        required: true
    }
});

export const Team = mongoose.model('Team', teamSchema);