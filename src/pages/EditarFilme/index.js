import React, { useState, useEffect } from 'react';
import editarFilme from '../../components/editarFilme/index.js';

export default function Teste() {
    return (
        <>
            <div className="body">
                {editarFilme()}
            </div>
        </>
    );
}