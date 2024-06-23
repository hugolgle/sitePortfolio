import React, { useState } from 'react';
import './xpSection.scss';

import { xpPro } from '../../public/data.json';
import Button from '../components/button';
import Modal from '../components/modal';

export default function XpSection() {
    const [modalIndex, setModalIndex] = useState(null);

    const handleOpenModal = (index) => {
        setModalIndex(index);
    }

    const handleCloseModal = () => {
        setModalIndex(null);
    }

    return (
        <section id='xpPro' className="section xpPro">
            <h1>Expériences professionnelles</h1>

            <div className="containerXpPro">
                {
                    xpPro.map((xp, index) => (
                        <div className="boxXpPro" key={index}>
                            <p className='box'>{xp.type} - {xp.domaine} - {xp.date}</p>
                            <h2 className='box'>{xp.title}</h2>
                            <h3 className='box'>Mission : {xp.mission}</h3>
                            <Button title="En savoir plus" action={() => handleOpenModal(index)} />
                            {
                                modalIndex === index &&
                                <Modal show="show" btnClose={handleCloseModal} titre={`${xp.type} - ${xp.title}`}>
                                    <div className="containModal">
                                        <p className='mission'><b>Mission:</b> {xp.mission}</p>
                                    </div>
                                    <div className="containModal">
                                        <p><b>Contexte:</b> {xp.context}</p>
                                    </div>
                                    {xp.image.img1 != "" ? <img src={xp.image.img1} /> : ""}
                                    <div className="containModal">
                                        {xp.image.img2 !== "" && xp.text && xp.text.split('[IMG]').map((textPart, index) => (
                                            <React.Fragment key={index}>
                                                {index > 0 && <img src={xp.image.img2} alt="Image" />}
                                                {textPart.split('<br>').map((paragraph, idx) => (
                                                    <p key={idx}>{paragraph}</p>
                                                ))}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                    <div className="containModal">
                                        {xp.missions && (
                                            <div>
                                                <h2 className='textMission'>Missions</h2>
                                                {xp.missions.map(({ mission }) => (
                                                    <div key={mission.id}>
                                                        <h3 className='titleMission'>- {mission.title}</h3>
                                                        <p><b>Objectif : </b>{mission.objectif}</p>
                                                        {mission.description && (<p><b>Descritpion :</b>{mission.description}</p>)}
                                                        <a href={mission.ressource} target="_blank" rel="noopener noreferrer">Ressources</a>
                                                        {mission.apercu && (
                                                            <div>
                                                                <p><b>Aperçu :</b></p>
                                                                {mission.apercu.map(({ id, image, description }) => (
                                                                    <div key={id}>
                                                                        <img src={image} alt="Aperçu" />
                                                                        <p className="description">{description}</p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}

                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <div className="containModal">
                                        <b>Compétences:</b>
                                        {xp.skills.map(({ key, skill }) => (
                                            <div key={key} className="skill">
                                                <p>{skill}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="containModal">
                                        {xp.liens && xp.liens.map(({ key, text, lien }) => (
                                            <div key={key} className="link">
                                                <a href={lien} target="_blank" rel="noopener noreferrer">{text}</a>
                                            </div>
                                        ))}
                                    </div>
                                </Modal>
                            }
                        </div>
                    ))
                }
            </div>
        </section >
    );
}
