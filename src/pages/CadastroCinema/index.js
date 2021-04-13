import React, { useState, useEffect } from 'react';
import formCinema from '../../components/formCinema/index.js';





export default function CadastroCinema() {

    return (
        <>
            <div className="body">
               
                {formCinema()}

            </div>

        </>
    );
}