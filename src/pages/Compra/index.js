import React, { useState, useEffect } from 'react';


import './styles.css';
import navBar from '../../components/navBar/index.js';
import cardFilme from '../../components/cardFilme/index.js';
import formularioDeCompra from '../../components/formularioDeCompra/index.js'



export default function Compra() {
  
    return (
        <>
                    



                     
                            {navBar()}


                       <div className="layout">



                       <div className="ladoE">
                           {cardFilme()}
                           </div>
                          
                          
                           <div className="ladoR">
                           {formularioDeCompra()}

                           </div>
                           
                           
                           
                           </div>
                        
                        
                        

                      

            
        </>
    );





}