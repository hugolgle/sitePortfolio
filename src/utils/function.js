export function calculerAge(year, month, day) {
  const dateActuelle = new Date();
  const anneeActuelle = dateActuelle.getFullYear();
  const moisActuel = dateActuelle.getMonth() + 1;
  const jourActuel = dateActuelle.getDate();

  let age = anneeActuelle - year;

  if (moisActuel < month || (moisActuel === month && jourActuel < day)) {
    age--;
  }

  return age;
}
