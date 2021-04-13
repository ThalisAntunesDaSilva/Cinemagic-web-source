import React, { useState, useEffect } from 'react';
import formCadastro from '../../components/formCadastro/index.js';





export default function CadastroCliente() {

    return (
        <>
            <div className="body">
               
                {formCadastro()}

            </div>

        </>
    );
}