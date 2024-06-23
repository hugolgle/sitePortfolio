export function calculerAge(annee, mois) {
    const dateActuelle = new Date();
    const anneeActuelle = dateActuelle.getFullYear();
    const moisActuel = dateActuelle.getMonth() + 1;
    let age = anneeActuelle - annee;
    if (moisActuel < mois) {
        age--;
    }
    return age;
}