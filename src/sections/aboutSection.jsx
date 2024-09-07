import "./aboutSection.scss";
import { fetchAboutData } from "../api/data";
import { calculerAge } from "../utils/function";
import { useFetchData } from "../api/fetch";

export default function AboutSection() {
  // --------------------------------------------
  const { data } = useFetchData(fetchAboutData);

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <p>Aucune donnée disponible</p>;
  }
  // --------------------------------------------

  const age = calculerAge(2002, 7, 16);

  return (
    <section id="about" className="section about">
      <h1>Présentation</h1>
      <div className="containerAbout">
        <img src="./images/portrait.png" alt="Portrait" />
        <div className="containerText">
          <p>{data[0]?.text.replace("{age}", age)}</p>
        </div>
      </div>
    </section>
  );
}
