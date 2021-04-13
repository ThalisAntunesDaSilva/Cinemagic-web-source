import React, { useState, useEffect } from 'react';                               
import './styles.css';
import cardListadeSessoes from '../../components/cardResultadosPesquisa/index.js';

export default function Teste() {
    return (
        <>
    <div className="section">   
          {cardListadeSessoes()}
  
          </div>
        </>
    );





}