import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import './styles.css';



export default function Teste() {
    //aqui começa films
    //teste
    const [filme, setFilmes] = useState([]);


    //const [sessao, setSessao] = useState([]);
    const token = localStorage.getItem('token');
    const [test, setTest] = useState('')
    async function getApi() {
        try {
            const res = await api.get("filmes")
            setFilmes(res.data)
            setTest(res.data[0])
        } catch (ex) {
            alert(ex)
        }
    }
    useEffect(() => {
        getApi()
    }, [token])


    return (
        <>
            <div className="list-filmes">
                <ul>
                    {filme.map(ses => (
                        <li key={ses.id}>
                            <strong>Id:</strong>
                            <p className="test">{ses.id}</p>
                            <strong>Titulo:</strong>
                            <p className="test">{ses.titulo}</p>
                            <strong>Duração:</strong>
                            <p className="test">{ses.duracao}</p>
                            <strong>Genero:</strong>
                            <p className="test">{ses.genero.id}</p>
                            <strong>Descriçao genro:</strong>
                            <p className="test">{ses.genero.descricao}</p>
                            <strong>Foto:</strong>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}