import XpProModel from "../models/xpPro.model.js";

export const getXpPro = async (req, res) => {
  try {
    const xpPros = await XpProModel.find(); // Récupérer toutes les expériences professionnelles
    return res.status(200).json(xpPros);
  } catch (error) {
    return res.status(500).json({
      message:
        "Erreur lors de la récupération des expériences professionnelles",
      error,
    });
  }
};
