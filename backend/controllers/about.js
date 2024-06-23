import connectDB from '../config/db.js';

export const getAbout = async (req, res) => {
    const dbConnection = connectDB(); // Assurez-vous que connectDB est une fonction qui retourne une connexion ou un pool
    const reqSql = 'SELECT * FROM about';

    try {
        dbConnection.query(reqSql, (error, results) => {
            if (error) {
                return res.status(500).json({ message: "Erreur lors de la récupération des projets", error });
            }
            return res.status(200).json(results);
        });
    } catch (error) {
        return res.status(500).json({ message: "Erreur lors de la récupération des projets", error });
    } finally {
        dbConnection.end(); // Assurez-vous d'appeler end() sur la connexion ou le pool lorsque vous avez fini de l'utiliser
    }
};
