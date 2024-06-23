import React, { useState } from 'react';
import './projectSection.scss';
import { realisations } from '../../public/data.json';
import Button from '../components/button';
import Modal from '../components/modal';

export default function ProjectSection() {
    const [modalIndex, setModalIndex] = useState(null);
    const [btnFilter, setBtnFilter] = useState("");

    const handleOpenModal = (index) => {
        setModalIndex(index);
    }

    const handleCloseModal = () => {
        setModalIndex(null);
    }

    const getFirstSentence = (text) => {
        if (!text) {
            return '';
        }
        const sentences = text.split(/[.!?]\s/);
        let firstSentence = sentences[0];
        if (!/[.!?]$/.test(firstSentence)) {
            firstSentence += '.';
        }
        return firstSentence;
    }

    const realisationFilter = (real, ecole) => {
        if (ecole !== "") {
            return real.filter((x) => x.ecole === ecole);
        } else {
            return real;
        }
    }

    const handleBtnFilter = (ecole) => {
        setBtnFilter(ecole);
    }

    const filteredRealisations = realisationFilter(realisations, btnFilter);

    return (
        <section id='project' className="section project">
            <h1>Réalisations</h1>
            <div className="btnFilter">
                <Button title="Tout" className={`btnFilter ${btnFilter === "" ? "active" : ""}`} value="Tout" action={() => handleBtnFilter("")} />
                <Button title="BTS SIO" className={`btnFilter ${btnFilter === "BTS SIO" ? "active" : ""}`} value="BTS SIO" action={() => handleBtnFilter("BTS SIO")} />
                <Button title="OpenClassrooms" className={`btnFilter ${btnFilter === "OpenClassrooms" ? "active" : ""}`} value="OpenClassrooms" action={() => handleBtnFilter("OpenClassrooms")} />
            </div>

            <div className="containerProject">
                {filteredRealisations.map((realisation, index) => (
                    <div className="containerRealisation" key={index} onClick={() => handleOpenModal(index)}>
                        <div className="img">
                            <img src={realisation.image} alt={realisation.title} />
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
                <Modal show="show" btnClose={handleCloseModal} titre={filteredRealisations[modalIndex].title}>
                    <div className="containModal">
                        {filteredRealisations[modalIndex].mission ?
                            (<p><b>Mission:</b> {filteredRealisations[modalIndex].mission}</p>
                            ) : (
                                ""
                            )
                        }
                    </div>
                    <div className="containModal">
                        {filteredRealisations[modalIndex].context ?
                            (<p><b>Contexte :</b> {filteredRealisations[modalIndex].context}</p>
                            ) : (
                                ""
                            )
                        }
                    </div>
                    {filteredRealisations[modalIndex].ecole === "BTS SIO" ? (
                        <>
                            <div className="containModal">
                                {filteredRealisations[modalIndex].skills ?
                                    (<p><b>Compétence :</b> {filteredRealisations[modalIndex].skills}</p>
                                    ) : (
                                        ""
                                    )
                                }
                            </div>
                            <div className="containModal">
                                <a href={filteredRealisations[modalIndex].ressource} target="_blank" rel="noopener noreferrer">Ressources</a> - <a href="./images/fichedecompetences.pdf" target="_blank" rel="noopener noreferrer">Fiche de compétences</a>
                            </div>
                        </>
                    ) : null}
                    {filteredRealisations[modalIndex].ecole === "OpenClassrooms" ? (
                        <>
                            <div className="containModal">
                                <p><b>Technologies:</b> {filteredRealisations[modalIndex].techno}</p>
                            </div>
                            <div className="containModal">
                                <b>Compétences:</b>
                                {filteredRealisations[modalIndex].skills.map((skill, skillIndex) => <p key={skillIndex}>{skill.skill}</p>)}
                            </div>
                            <div className="containModal">
                                <a href={filteredRealisations[modalIndex].ressource} target="_blank" rel="noopener noreferrer">Ressources</a>
                            </div>
                        </>
                    ) : null}
                </Modal>
            )}
        </section>
    );
}
