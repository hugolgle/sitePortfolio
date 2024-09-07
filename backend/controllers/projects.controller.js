import ProjectModel from "../models/projects.model.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await ProjectModel.find(); // Récupérer tous les projets
    return res.status(200).json(projects);
  } catch (error) {
    return res.status(500).json({
      message: "Erreur lors de la récupération des projets",
      error,
    });
  }
};
