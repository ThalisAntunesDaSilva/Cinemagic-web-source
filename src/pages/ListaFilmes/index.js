import React, { useState, useEffect } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Jumbotron
} from 'reactstrap';
import api from '../../services/api'
import './styles.css';

export default function Teste() {

    const [filme, setFilmes] = useState([]);
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


    const encaminhaCompra = ses => async e => {
        alert("Encaminhado");
    }


    return (
        <>
            <div className="body-section">
                <ul className="super">
                    <li><a href="">Home</a></li>
                    <li><a href="">Cinemas</a></li>
                    <li><a href="">Sessoes</a></li>
                </ul>
                <ul>
                    <h1 className="title">Filmes disponiveis no nosso catalogo</h1>
                    {filme.map(ses => (
                        <li key={ses.id}>
                            <Jumbotron>
                                <div>
                                    <strong>Titulo do filme: </strong>
                                    <p className="test">{ses.titulo}</p>
                                    <strong>Duracao: </strong>
                                    <p className="test">{ses.duracao}</p>
                                    <strong>Genero: </strong>
                                    <p className="test">{ses.genero.descricao}</p>
                                    <Button color="danger" onClick={encaminhaCompra(ses)}>Comprar</Button>
                                </div>
                            </Jumbotron>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}