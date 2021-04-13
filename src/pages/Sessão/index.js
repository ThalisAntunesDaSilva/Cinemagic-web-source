import React, { useState, useEffect } from 'react';

import './styles.css';

import navBar from '../../components/navBar/index.js';
import mediaFilme from '../../components/mediaFilme/index.js';



export default function Home() {
  
    return (
        <>
         
                    
                        <div className="body">  
                            {navBar()}
                            {mediaFilme()}
                         
                        </div>



            
        </>
    );





}