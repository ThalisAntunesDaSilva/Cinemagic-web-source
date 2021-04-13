import React, { useState, useEffect } from 'react';

import './styles.css';

import navBar from '../../components/navBar/index.js';
import carrousel from '../../components/carrousel/index.js';
import cards from '../../components/cards/index.js';
import secaocards from '../../components/secaocards/index.js';
import entradaPesquisar from '../../components/entradaPesquisar/index.js';


export default function Home() {
  
    return (
        <>
         
                    <div className="corpo-home">
                      
                            {navBar()}
                            {entradaPesquisar()}
                            {carrousel()}
                    <div className="card bg-dark"> {cards()} </div>
                           
                           
                           <div className="chamada">{secaocards()} </div>
                         
                           
                           </div>
                     


            
        </>
    );





}