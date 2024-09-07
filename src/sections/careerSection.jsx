import React from "react";
import { useSelector } from "react-redux";
import "./careerSection.scss";

export default function CareerSection() {
  const parcours = useSelector((state) => state.parcoursReducer || []);

  const reversedParcours = [...parcours].reverse();

  return (
    <section id="parcours" className="section parcours">
      <h1>Parcours</h1>

      <div className="containerParcours">
        <div className="barre"></div>
        {reversedParcours.map((unParcours, index) => (
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
