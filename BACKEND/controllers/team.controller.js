import { Team } from "../models/team.model.js"

// Get Team
export const getTeam = async (req, res) => {
    try {
        const teams = await Team.find();
        res.status(200).send(teams);
    } catch (e) {
        res.status(400).send(e);
    }
}

// Create Team 
export const createTeam = async (req, res) => {
    try {
        const { team_name, team_captain, team_gender, team_coach} = req.body;
        await Team.create({
            team_name,
            team_captain,
            team_gender,
            team_coach
        });
        res.status(201).json({
            message: "Team Created Successfully.",
            success: true,
        });
    } catch (e) {
        res.status(400).json({
            message: "Cannot create",
            success: false,
        });
    }
}

//  Update Team 
export const updateTeam = async (req, res) => {
    try {
        const { id } = req.params;
        const team = await Team.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).send(team);
    } catch (error) {
        res.status(400).send(e);
    }
}

// Delete Team
export const deleteTeam = async (req, res) => {
    try {
        const { id } = req.params;
        await Team.findByIdAndDelete(id);
        res.status(200).send({ message: "Team deleted successfully" });
    } catch (error) {
        res.status(400).send(e);
    }
}
