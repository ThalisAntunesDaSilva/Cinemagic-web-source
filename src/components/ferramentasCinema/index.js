import React, { useState } from 'react';
import cinemagic from '../../assets/cinemagic.jpeg';
import './styles.css';



const Example = (props) => {

    return (
        <div className="home-container">

            <section className="header col-xs-110 col-sm-90 col-md-110 col-lg-90">

                <div className="header-centro">
                    <img src={cinemagic} className="header-centro" alt="cinemagic" />
                </div>

            </section>
        </div>
    );
}

export default Example;