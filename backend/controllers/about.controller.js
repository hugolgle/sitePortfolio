import AboutModel from "../models/about.model.js";

export const getAbout = async (req, res) => {
  try {
    const aboutData = await AboutModel.find();
    console.log(aboutData);
    return res.status(200).json(aboutData);
  } catch (error) {
    return res.status(500).json({
      message: "Erreur lors de la récupération des données 'about'",
      error,
    });
  }
};
