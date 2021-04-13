import React, { useState } from 'react';
import cinemagicClient3 from '../../assets/logo.png';
import './styles.css';


const Example = (props) => {

    return (
        <div className="home-container">

            <section className="header col-xs-20 col-sm-12 col-md-20 col-lg-12">

                <div className="header-centro">
                    <img src={cinemagicClient3} className="header-centro" alt="cinemagicClient3" />
                </div>

            </section>
        </div>
    );
}

export default Example;