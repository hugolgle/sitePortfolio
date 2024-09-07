import "./homeSection.scss";

import { calculerAge } from "../utils/function.js";
import { fetchAboutData } from "../api/data.js";
import { useFetchData } from "../api/fetch.js";

export default function HomeSection() {
  const age = calculerAge(2002, 7);

  // --------------------------------------------
  const { data } = useFetchData(fetchAboutData);

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <p>Aucune donnée disponible</p>;
  }
  // --------------------------------------------

  return (
    <section id="home" className="section home">
      <div className="containerLeft">
        <img src="./images/pp.jpeg" />
        <h1>Étudiant de {age} ans</h1>
        <hr />
        <p>{data[0].situation}</p>
        <div className="mouse">
          <hr />
        </div>
      </div>
    </section>
  );
}
