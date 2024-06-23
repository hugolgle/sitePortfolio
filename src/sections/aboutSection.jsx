import React from 'react';
import './aboutSection.scss';
import { useSelector } from "react-redux";

export default function AboutSection() {

    const about = useSelector((state) => state.aboutReducer || []);

    return (
        <section id='about' className="section about">
            <h1>Présentation</h1>
            <div className="containerAbout">
                <img src="./images/portrait.png" alt="" srcSet="" />
                <div className="containerText">
                    <p>{about[0].text}</p>
                </div>
            </div>
        </section>
    );
}
