import React, { useState, useEffect } from 'react';
import formSessao from '../../components/formSessao/index.js';
import ferramentasFilme from '../../components/ferramentasFilme/index.js';


export default function CadastroFilme() {

    return (
        <>
            <div className="body">
                {formSessao()}
            </div>

        </>
    );
}