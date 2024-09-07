import { useState } from "react";
import "./projectSection.scss";
import Button from "../components/button";
import Modal from "../components/modal";
import { useFetchData } from "../api/fetch";
import { fetchProjectsData } from "../api/data";

export default function ProjectSection() {
  const [modalIndex, setModalIndex] = useState(null);
  const [btnFilter, setBtnFilter] = useState("");

  // --------------------------------------------
  const { data } = useFetchData(fetchProjectsData);

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <p>Aucune donnée disponible</p>;
  }
  // --------------------------------------------

  const handleOpenModal = (index) => {
    setModalIndex(index);
  };

  const handleCloseModal = () => {
    setModalIndex(null);
  };

  const getFirstSentence = (text) => {
    if (!text) {
      return "";
    }
    const sentences = text.split(/[.!?]\s/);
    let firstSentence = sentences[0];
    if (!/[.!?]$/.test(firstSentence)) {
      firstSentence += ".";
    }
    return firstSentence;
  };

  const realisationFilter = (real, ecole) => {
    if (ecole !== "") {
      return real.filter((x) => x.ecole === ecole);
    } else {
      return real;
    }
  };

  const handleBtnFilter = (ecole) => {
    setBtnFilter(ecole);
  };

  const filteredRealisations = realisationFilter(data, btnFilter);

  return (
    <section id="project" className="section project">
      <h1>Réalisations</h1>
      <div className="btnFilter">
        <Button
          title="Tout"
          className={`btnFilter ${btnFilter === "" ? "active" : ""}`}
          value="Tout"
          action={() => handleBtnFilter("")}
        />
        <Button
          title="BTS SIO"
          className={`btnFilter ${btnFilter === "BTS SIO" ? "active" : ""}`}
          value="BTS SIO"
          action={() => handleBtnFilter("BTS SIO")}
        />
        <Button
          title="OpenClassrooms"
          className={`btnFilter ${btnFilter === "OpenClassrooms" ? "active" : ""}`}
          value="OpenClassrooms"
          action={() => handleBtnFilter("OpenClassrooms")}
        />
      </div>

      <div className="containerProject">
        {filteredRealisations.map((realisation, index) => (
          <div
            className="containerRealisation"
            key={index}
            onClick={() => handleOpenModal(index)}
          >
            <div className="img">
              <img src={realisation.img} alt={realisation.title} />
              <div className="containHover">
                <p>{realisation.date}</p>
                <p>{getFirstSentence(realisation.mission)}</p>
              </div>
            </div>
            <div className="details">
              <h3>{realisation.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {modalIndex !== null && (
        <Modal
          show="show"
          btnClose={handleCloseModal}
          titre={filteredRealisations[modalIndex].title}
        >
          <div className="containModal">
            {filteredRealisations[modalIndex].mission && (
              <p>
                <b>Mission:</b> {filteredRealisations[modalIndex].mission}
              </p>
            )}
          </div>
          <div className="containModal">
            {filteredRealisations[modalIndex].context && (
              <p>
                <b>Contexte :</b> {filteredRealisations[modalIndex].context}
              </p>
            )}
          </div>
          <div className="containModal">
            {filteredRealisations[modalIndex].technology && (
              <p>
                <b>Technologies:</b>{" "}
                {filteredRealisations[modalIndex].technology.join(", ")}
              </p>
            )}
          </div>
          <div className="containModal">
            {filteredRealisations[modalIndex].skills && (
              <div>
                <b>Compétences:</b>
                {filteredRealisations[modalIndex].skills.map(
                  (skill, skillIndex) => (
                    <p key={skillIndex}>- {skill}</p>
                  )
                )}
              </div>
            )}
          </div>
          {filteredRealisations[modalIndex].link && (
            <div className="containModal">
              {filteredRealisations[modalIndex].link.map((link, linkIndex) => (
                <div key={linkIndex}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.text}
                  </a>
                  {linkIndex <
                    filteredRealisations[modalIndex].link.length - 1 && ", "}
                </div>
              ))}
            </div>
          )}
        </Modal>
      )}
    </section>
  );
}
