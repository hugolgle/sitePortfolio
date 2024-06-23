import connectDB from '../config/db.js';

export const getParcours = async (req, res) => {
    const dbConnection = connectDB();
    const reqSql = 'SELECT * FROM parcours';

    try {
        dbConnection.query(reqSql, (error, results) => {
            if (error) {
                return res.status(500).json({ message: "Erreur lors de la récupération des parcours", error });
            }
            return res.status(200).json(results);
        });
    } catch (error) {
        return res.status(500).json({ message: "Erreur lors de la récupération des parcours", error });
    } finally {
        dbConnection.end();
    }
};

