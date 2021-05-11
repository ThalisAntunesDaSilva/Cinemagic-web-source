import React, { useState, useEffect } from 'react';
import {
    Button, Jumbotron, Row, Col, Form, FormGroup, Label, Input
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import api from '../../services/api'
import { login, getToken } from '../../services/auth/auth.js';
//import './styles.css';

const Example = (props) => {
    let history = useHistory();
    const token = localStorage.getItem('token');
    const [test, setTest] = useState('')
    const [titulo, setTitulo] = useState('');
    const [id, setId] = useState('');
    const [genero, setGenero] = useState('');
    const [duracao, setDuracao] = useState('');

    async function acaoBotao(e) {
        e.preventDefault();

        const data = {
            //id: id,
            titulo: titulo,
            duracao: duracao,
            filmes: [
                {
                    //id: id,
                    titulo: titulo,
                    duracao: duracao
                }
            ]
        };

        try {
            const res = await api.put(`/filmes/${id}`, data, {
                headers: {
                    authorization: getToken()
                }
            },
            );
            window.location.href = res.data.code;
            history.push(res.data.code);


        } catch (ex) {
            
        }

    }

    return (
        <div className="body-section">
            <ul className="super">
                <li><a href="">Home</a></li>
                <li><a href="">Cinemas</a></li>
                <li><a href="">Sessoes</a></li>
            </ul>
            <ul>
                <h1 className="title">Editar filme</h1>
                <li>
                    <Jumbotron>
                        <div>
                            <FormGroup >
                                <Label for="id" >ID do filme a ser modificado:</Label>
                                <Input type="number" name="id" onChange={e => setId(e.target.value)} id="id" placeholder="ID do filme" />
                            </FormGroup>
                            <FormGroup >
                                <Label for="titulo" >Novo titulo:</Label>
                                <Input type="text" name="titulo" onChange={e => setTitulo(e.target.value)} id="titulo" placeholder="Título do filme" />
                            </FormGroup>
                            <FormGroup >
                                <Label for="duracao" >Nova duração:</Label>
                                <Input type="text" name="duracao" onChange={e => setDuracao(e.target.value)} id="duracao" placeholder="Duraçao do filme" />
                            </FormGroup>
                            <Button color="danger" onClick={acaoBotao}>Editar</Button>
                        </div>
                    </Jumbotron>
                </li>
            </ul>
        </div>
    );
}

export default Example;
