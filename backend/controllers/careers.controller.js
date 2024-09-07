import CareersModel from "../models/careers.model.js";

export const getCareers = async (req, res) => {
  try {
    const careers = await CareersModel.find(); // Récupérer tous les Careers
    return res.status(200).json(careers);
  } catch (error) {
    return res.status(500).json({
      message: "Erreur lors de la récupération des Careers",
      error,
    });
  }
};
