import mysql from 'mysql';

const connectDB = () => {
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "portfolio",
        socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock" // Assurez-vous que le chemin du socket est correct
    });

    connection.connect((err) => {
        if (err) {
            console.error("Erreur de connexion à la base de données :", err.stack);
            return;
        }
        console.log("Connexion réussie à la base de données !");
    });

    return connection.promise(); // Utilisez .promise() pour activer le support des promesses
};

export default connectDB;
