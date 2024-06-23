import React from 'react';
import './careerSection.scss';

export default function CareerSection() {

    return (
        <section id='parcours' className="section parcours">
            <h1>Parcours</h1>

            <div className="containerParcours">
                <div className="barre"></div>
                <div className="boxParcour">
                    <div className="rond"></div>
                    <div className="boxText">
                        <h3>Septembre 2024 - Juin 2025</h3>
                        <hr />
                        <p>Bachelor Développeur Web - Alternance - MyDigitalSchool - VANNES</p>
                    </div>
                </div>
                <div className="boxParcour">
                    <div className="rond"></div>
                    <div className="boxText">
                        <h3>Septembre 2023 - Mars 2024</h3>
                        <hr />
                        <p>Parcours Integrateur Web - OpenClassrooms - En distanciel</p>
                    </div>
                </div>
                <div className="boxParcour">
                    <div className="rond"></div>
                    <div className="boxText">
                        <h3>2022/2023</h3>
                        <hr />
                        <p>Auto-formation</p>
                    </div>
                </div>
                <div className="boxParcour">
                    <div className="rond"></div>
                    <div className="boxText">
                        <h3>Septembre 2020 - Juin 2022</h3>
                        <hr />
                        <p>BTS SIO - Option SLAM (Solutions Logicielles et Applications Métier) - Lycée Victor & Hélène BASCH - RENNES</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
