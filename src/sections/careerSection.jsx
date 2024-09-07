import "./careerSection.scss";
import { fetchCareersData } from "../api/data";
import { useFetchData } from "../api/fetch";

export default function CareerSection() {
  // --------------------------------------------
  const { data } = useFetchData(fetchCareersData);

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <p>Aucune donnée disponible</p>;
  }
  // --------------------------------------------

  return (
    <section id="parcours" className="section parcours">
      <h1>Parcours</h1>

      <div className="containerParcours">
        <div className="barre"></div>
        {data.map((unParcours, index) => (
          <div key={index} className="boxParcour">
            <div className="rond"></div>
            <div className="boxText">
              <h3>{unParcours.date}</h3>
              <hr />
              <p>{unParcours.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
