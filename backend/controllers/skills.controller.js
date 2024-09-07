import SkillsModel from "../models/skills.model.js";

export const getSkills = async (req, res) => {
  try {
    const skills = await SkillsModel.find(); // Récupérer toutes les compétences
    return res.status(200).json(skills);
  } catch (error) {
    return res.status(500).json({
      message: "Erreur lors de la récupération des compétences",
      error,
    });
  }
};
